// Universal Data Loader: Reads syllabus structure from subjects.json and content from /data files
(function() {
  const cache = {
    subjects: null,
    subjectDetails: {}
  };

  function loadScript(src) {
    return new Promise((resolve, reject) => {
      const existing = document.querySelector(`script[src="${src}"]`);
      if (existing) {
        return resolve();
      }
      const script = document.createElement('script');
      script.src = src;
      script.async = true;
      script.onload = () => resolve();
      script.onerror = (err) => reject(new Error(`Failed to load script ${src}`));
      document.head.appendChild(script);
    });
  }

  const DataLoader = {
    async getSubjects() {
      if (cache.subjects) {
        return cache.subjects;
      }

      // 1. Try fetch subjects.json from root or data/ if not on file:// protocol
      if (window.location.protocol !== 'file:') {
        try {
          const res = await fetch('subjects.json');
          if (res.ok) {
            const data = await res.json();
            cache.subjects = data;
            return data;
          }
        } catch (e) {
          // Try fallback path
        }

        try {
          const res = await fetch('data/subjects.json');
          if (res.ok) {
            const data = await res.json();
            cache.subjects = data;
            return data;
          }
        } catch (e) {
          console.warn('Fetch failed for subjects.json, trying script fallback...', e);
        }
      }

      // 2. Check if subjects.js is already loaded in window
      if (window.SUBJECTS_MANIFEST && Array.isArray(window.SUBJECTS_MANIFEST)) {
        cache.subjects = window.SUBJECTS_MANIFEST;
        return cache.subjects;
      }

      // 3. Fallback: load data/subjects.js via script tag
      try {
        await loadScript('data/subjects.js');
        if (window.SUBJECTS_MANIFEST) {
          cache.subjects = window.SUBJECTS_MANIFEST;
          return cache.subjects;
        }
      } catch (err) {
        console.error('Offline fallback loading error for subjects:', err);
      }

      throw new Error('Unable to load syllabus manifest data from subjects.json.');
    },

    async getSubject(subjectId) {
      const subjects = await this.getSubjects();
      const subjectMeta = subjects.find(s => s.id === subjectId);
      if (!subjectMeta) {
        throw new Error(`Subject "${subjectId}" not found in syllabus.`);
      }

      // Clone syllabus structure from subjects.json (the Single Source of Truth)
      const subject = {
        ...subjectMeta,
        topics: subjectMeta.topics.map(t => ({ ...t }))
      };

      // Load educational content from dataFile
      const dataFileName = subjectMeta.dataFile || `${subjectId}.json`;
      let contentData = null;

      if (cache.subjectDetails[subjectId]) {
        contentData = cache.subjectDetails[subjectId];
      } else {
        if (window.location.protocol !== 'file:') {
          try {
            const res = await fetch(`data/${dataFileName}`);
            if (res.ok) {
              contentData = await res.json();
              cache.subjectDetails[subjectId] = contentData;
            }
          } catch (e) {
            console.warn(`Fetch failed for data/${dataFileName}, trying fallback...`, e);
          }
        }

        if (!contentData && window.SUBJECT_DATA && window.SUBJECT_DATA[subjectId]) {
          contentData = window.SUBJECT_DATA[subjectId];
          cache.subjectDetails[subjectId] = contentData;
        }

        if (!contentData) {
          try {
            const scriptName = dataFileName.replace(/\.json$/, '.js');
            await loadScript(`data/${scriptName}`);
            if (window.SUBJECT_DATA && window.SUBJECT_DATA[subjectId]) {
              contentData = window.SUBJECT_DATA[subjectId];
              cache.subjectDetails[subjectId] = contentData;
            }
          } catch (err) {
            // Not all pending topics require content yet
          }
        }
      }

      // Merge educational content into official syllabus topics
      if (contentData && Array.isArray(contentData.topics)) {
        contentData.topics.forEach(cTopic => {
          const target = subject.topics.find(t => 
            t.id === cTopic.id || 
            (cTopic.alias && t.id === cTopic.alias) ||
            (t.id === 'os-process-management' && (cTopic.id === 'process-management' || cTopic.alias === 'process-management'))
          );

          if (target) {
            const { id, title, syllabus, status } = target;
            Object.assign(target, cTopic, {
              id,
              title,
              syllabus,
              status: (cTopic.status === 'ready' || cTopic.status === 'done' || status === 'done') ? 'done' : status
            });
          }
        });
      }

      return subject;
    },

    async getTopic(subjectId, topicId) {
      const subject = await this.getSubject(subjectId);
      if (!subject || !subject.topics) {
        return null;
      }
      const topic = subject.topics.find(t => 
        t.id === topicId || 
        (t.id === 'os-process-management' && topicId === 'process-management') ||
        (t.id === 'process-management' && topicId === 'os-process-management')
      );
      return { subject, topic };
    }
  };

  window.DataLoader = DataLoader;
})();
