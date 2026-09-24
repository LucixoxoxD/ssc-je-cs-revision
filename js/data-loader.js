// Universal Data Loader: Reads JSON via fetch() with automatic script-tag fallback for offline file:// execution
(function() {
  const cache = {
    subjects: null,
    subjectDetails: {}
  };

  function loadScript(src) {
    return new Promise((resolve, reject) => {
      // Check if already in DOM
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

      // 1. Try fetch if not on file:// protocol
      if (window.location.protocol !== 'file:') {
        try {
          const res = await fetch('data/subjects.json');
          if (res.ok) {
            const data = await res.json();
            cache.subjects = data;
            return data;
          }
        } catch (e) {
          console.warn('Fetch failed for subjects.json, trying fallback...', e);
        }
      }

      // 2. Check if subjects.js already loaded into window
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

      throw new Error('Unable to load subjects manifest data.');
    },

    async getSubject(subjectId) {
      if (cache.subjectDetails[subjectId]) {
        return cache.subjectDetails[subjectId];
      }

      // 1. Try fetch if not on file://
      if (window.location.protocol !== 'file:') {
        try {
          const res = await fetch(`data/${subjectId}.json`);
          if (res.ok) {
            const data = await res.json();
            cache.subjectDetails[subjectId] = data;
            return data;
          }
        } catch (e) {
          console.warn(`Fetch failed for ${subjectId}.json, trying fallback...`, e);
        }
      }

      // 2. Check if already present on window.SUBJECT_DATA
      if (window.SUBJECT_DATA && window.SUBJECT_DATA[subjectId]) {
        cache.subjectDetails[subjectId] = window.SUBJECT_DATA[subjectId];
        return cache.subjectDetails[subjectId];
      }

      // 3. Fallback: dynamically load data/<subjectId>.js
      try {
        await loadScript(`data/${subjectId}.js`);
        if (window.SUBJECT_DATA && window.SUBJECT_DATA[subjectId]) {
          cache.subjectDetails[subjectId] = window.SUBJECT_DATA[subjectId];
          return cache.subjectDetails[subjectId];
        }
      } catch (err) {
        console.error(`Offline fallback loading error for subject ${subjectId}:`, err);
      }

      throw new Error(`Unable to load data for subject "${subjectId}".`);
    },

    async getTopic(subjectId, topicId) {
      const subject = await this.getSubject(subjectId);
      if (!subject || !subject.topics) {
        return null;
      }
      const topic = subject.topics.find(t => t.id === topicId);
      return { subject, topic };
    }
  };

  window.DataLoader = DataLoader;
})();
