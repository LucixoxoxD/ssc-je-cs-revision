// Storage manager for SSC JE Revision: Progress tracking and Bookmarks
(function() {
  const REVISED_KEY = 'ssc_je_revised_topics';
  const BOOKMARKS_KEY = 'ssc_je_bookmarks';

  const Storage = {
    // ----------------- REVISION PROGRESS -----------------
    getRevisedMap() {
      try {
        const raw = localStorage.getItem(REVISED_KEY);
        return raw ? JSON.parse(raw) : {};
      } catch (e) {
        console.error('Failed to parse revised topics from localStorage', e);
        return {};
      }
    },

    isRevised(subjectId, topicId) {
      const key = `${subjectId}/${topicId}`;
      const map = this.getRevisedMap();
      return !!map[key];
    },

    setRevised(subjectId, topicId, status) {
      const key = `${subjectId}/${topicId}`;
      const map = this.getRevisedMap();
      if (status) {
        map[key] = {
          revisedAt: Date.now(),
          subjectId,
          topicId
        };
      } else {
        delete map[key];
      }
      try {
        localStorage.setItem(REVISED_KEY, JSON.stringify(map));
      } catch (e) {
        console.error('Failed to save revised topics to localStorage', e);
      }
      window.dispatchEvent(new CustomEvent('progress-changed', {
        detail: { subjectId, topicId, key, status }
      }));
      return status;
    },

    toggleRevised(subjectId, topicId) {
      const current = this.isRevised(subjectId, topicId);
      return this.setRevised(subjectId, topicId, !current);
    },

    getSubjectProgress(subjectId, topics = []) {
      if (!topics || topics.length === 0) {
        return { revised: 0, total: 0, percent: 0 };
      }
      const map = this.getRevisedMap();
      let revised = 0;
      topics.forEach(t => {
        if (map[`${subjectId}/${t.id}`]) {
          revised++;
        }
      });
      const percent = Math.round((revised / topics.length) * 100);
      return { revised, total: topics.length, percent };
    },

    getOverallProgress(subjects = []) {
      let totalTopics = 0;
      let revisedTopics = 0;
      const map = this.getRevisedMap();

      subjects.forEach(sub => {
        if (sub.topics && Array.isArray(sub.topics)) {
          totalTopics += sub.topics.length;
          sub.topics.forEach(t => {
            if (map[`${sub.id}/${t.id}`]) {
              revisedTopics++;
            }
          });
        }
      });

      const percent = totalTopics > 0 ? Math.round((revisedTopics / totalTopics) * 100) : 0;
      return { revised: revisedTopics, total: totalTopics, percent };
    },

    // ----------------- BOOKMARKS -----------------
    getBookmarks() {
      try {
        const raw = localStorage.getItem(BOOKMARKS_KEY);
        return raw ? JSON.parse(raw) : [];
      } catch (e) {
        console.error('Failed to parse bookmarks from localStorage', e);
        return [];
      }
    },

    isBookmarked(subjectId, topicId) {
      const key = `${subjectId}/${topicId}`;
      const bookmarks = this.getBookmarks();
      return bookmarks.some(b => b.id === key);
    },

    toggleBookmark(meta) {
      // meta: { subjectId, topicId, title, subjectTitle, icon }
      const key = `${meta.subjectId}/${meta.topicId}`;
      let bookmarks = this.getBookmarks();
      const index = bookmarks.findIndex(b => b.id === key);
      let isSaved = false;

      if (index >= 0) {
        bookmarks.splice(index, 1);
        isSaved = false;
      } else {
        bookmarks.unshift({
          id: key,
          subjectId: meta.subjectId,
          topicId: meta.topicId,
          title: meta.title || meta.topicId,
          subjectTitle: meta.subjectTitle || meta.subjectId,
          icon: meta.icon || '📌',
          savedAt: Date.now()
        });
        isSaved = true;
      }

      try {
        localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(bookmarks));
      } catch (e) {
        console.error('Failed to save bookmarks to localStorage', e);
      }

      window.dispatchEvent(new CustomEvent('bookmarks-changed', {
        detail: { key, isSaved, bookmarks }
      }));
      return isSaved;
    },

    removeBookmark(key) {
      let bookmarks = this.getBookmarks();
      bookmarks = bookmarks.filter(b => b.id !== key);
      try {
        localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(bookmarks));
      } catch (e) {
        console.error('Failed to save bookmarks to localStorage', e);
      }
      window.dispatchEvent(new CustomEvent('bookmarks-changed', {
        detail: { key, isSaved: false, bookmarks }
      }));
    }
  };

  window.StorageManager = Storage;
})();
