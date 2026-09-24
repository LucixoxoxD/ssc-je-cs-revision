// Real-Time Search across all subjects and topics for SSC JE Portal
(function() {
  function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  function highlightMatch(text, query) {
    if (!query) return text;
    const regex = new RegExp(`(${escapeRegExp(query)})`, 'gi');
    return text.replace(regex, '<mark class="highlight-match">$1</mark>');
  }

  function initSearch(subjects) {
    const searchInput = document.getElementById('global-search-input');
    const clearBtn = document.getElementById('search-clear-btn');
    const statsBar = document.getElementById('search-stats-bar');
    const resultsContainer = document.getElementById('search-results-list');
    const subjectsGrid = document.getElementById('subjects-grid');
    const subjectsTitle = document.getElementById('subjects-section-title');

    if (!searchInput || !resultsContainer || !subjectsGrid) return;

    // Flatten all topics for quick search
    const allTopics = [];
    subjects.forEach(sub => {
      if (sub.topics && Array.isArray(sub.topics)) {
        sub.topics.forEach(top => {
          allTopics.push({
            subjectId: sub.id,
            subjectTitle: sub.title,
            subjectIcon: sub.icon,
            topicId: top.id,
            topicTitle: top.title,
            status: top.status || 'coming_soon'
          });
        });
      }
    });

    function performSearch() {
      const query = searchInput.value.trim().toLowerCase();

      if (query.length > 0) {
        clearBtn.style.display = 'inline-flex';
      } else {
        clearBtn.style.display = 'none';
      }

      if (!query) {
        // Reset to normal view
        resultsContainer.style.display = 'none';
        resultsContainer.innerHTML = '';
        statsBar.style.display = 'none';
        subjectsGrid.style.display = 'grid';
        if (subjectsTitle) subjectsTitle.style.display = 'flex';
        return;
      }

      // Filter matching topics
      const matches = allTopics.filter(t => {
        return t.topicTitle.toLowerCase().includes(query) ||
               t.subjectTitle.toLowerCase().includes(query);
      });

      // Update UI
      subjectsGrid.style.display = 'none';
      if (subjectsTitle) subjectsTitle.style.display = 'none';
      resultsContainer.style.display = 'flex';
      statsBar.style.display = 'flex';

      const uniqueSubjects = new Set(matches.map(m => m.subjectId)).size;
      statsBar.innerHTML = `
        <span>Found <strong>${matches.length}</strong> matching topic${matches.length === 1 ? '' : 's'} in <strong>${uniqueSubjects}</strong> subject${uniqueSubjects === 1 ? '' : 's'}</span>
        <button class="nav-btn" style="padding: 0.2rem 0.5rem; font-size: 0.8rem;" id="btn-clear-search-link">Reset</button>
      `;

      const resetLink = document.getElementById('btn-clear-search-link');
      if (resetLink) {
        resetLink.addEventListener('click', () => {
          searchInput.value = '';
          performSearch();
          searchInput.focus();
        });
      }

      if (matches.length === 0) {
        resultsContainer.innerHTML = `
          <div class="empty-state-box" style="padding: 2.5rem 1rem;">
            <div class="empty-state-icon">🔍</div>
            <div class="empty-state-title">No matching topics found</div>
            <p class="empty-state-desc">Try searching for keywords like "process", "scheduling", "matrix", "pipeline", or "sql".</p>
          </div>
        `;
        return;
      }

      const revisedMap = window.StorageManager ? window.StorageManager.getRevisedMap() : {};

      resultsContainer.innerHTML = matches.map(m => {
        const isRevised = !!revisedMap[`${m.subjectId}/${m.topicId}`];
        const isReady = m.status === 'ready';
        const targetUrl = isReady ? `topic.html?id=${m.subjectId}/${m.topicId}` : `subject.html?id=${m.subjectId}`;

        return `
          <a href="${targetUrl}" class="search-result-card" aria-label="Open ${m.topicTitle}">
            <div class="search-result-info">
              <div class="search-result-subject">
                ${m.subjectIcon} ${highlightMatch(m.subjectTitle, query)}
              </div>
              <div class="search-result-title">
                ${highlightMatch(m.topicTitle, query)}
                ${isRevised ? '<span title="Marked as Revised" style="color: var(--accent-emerald); font-size: 0.9rem; margin-left: 0.35rem;">✓</span>' : ''}
              </div>
            </div>
            <div>
              <span class="status-badge ${isReady ? 'ready' : 'coming-soon'}">
                ${isReady ? '● Ready to Revise' : 'Coming Soon'}
              </span>
            </div>
          </a>
        `;
      }).join('');
    }

    searchInput.addEventListener('input', performSearch);

    clearBtn.addEventListener('click', () => {
      searchInput.value = '';
      performSearch();
      searchInput.focus();
    });

    // Keyboard shortcut '/' or 'Ctrl+K'
    document.addEventListener('keydown', (e) => {
      if (e.key === '/' && document.activeElement !== searchInput && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
        e.preventDefault();
        searchInput.focus();
        searchInput.select();
      }
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        searchInput.focus();
        searchInput.select();
      }
      if (e.key === 'Escape' && document.activeElement === searchInput) {
        searchInput.value = '';
        performSearch();
        searchInput.blur();
      }
    });
  }

  window.SearchManager = {
    init: initSearch
  };
})();
