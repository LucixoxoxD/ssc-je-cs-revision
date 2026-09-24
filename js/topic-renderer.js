// Topic Page Renderer: Handles topic template rendering, MCQs, math formatting, and revision tracking
(function() {
  function formatTextWithCode(text) {
    if (!text) return '';
    // Format fenced code blocks ```c ... ```
    let formatted = text.replace(/```([a-z]*)\n([\s\S]*?)```/g, (match, lang, code) => {
      return `<pre><code class="language-${lang || 'c'}">${escapeHtml(code.trim())}</code></pre>`;
    });
    // Format inline code `...`
    formatted = formatted.replace(/`([^`]+)`/g, (match, code) => {
      return `<code>${escapeHtml(code)}</code>`;
    });
    return formatted;
  }

  function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  function renderMath(element) {
    if (!element) return;

    const applyKaTeX = () => {
      if (typeof window.renderMathInElement === 'function') {
        try {
          window.renderMathInElement(element, {
            delimiters: [
              { left: '$$', right: '$$', display: true },
              { left: '$', right: '$', display: false },
              { left: '\\(', right: '\\)', display: false },
              { left: '\\[', right: '\\]', display: true }
            ],
            throwOnError: false,
            ignoredTags: ["script", "noscript", "style", "textarea", "pre", "code", "annotation", "annotation-xml"]
          });
        } catch (err) {
          console.warn('KaTeX rendering error:', err);
        }
      }
    };

    if (typeof window.renderMathInElement === 'function') {
      applyKaTeX();
    } else {
      // Deterministic readiness: listen to script load and fallback polling
      const autoRenderScript = document.querySelector('script[src*="auto-render"]');
      if (autoRenderScript) {
        autoRenderScript.addEventListener('load', applyKaTeX, { once: true });
      }
      let retries = 0;
      const interval = setInterval(() => {
        retries++;
        if (typeof window.renderMathInElement === 'function') {
          clearInterval(interval);
          applyKaTeX();
        } else if (retries >= 40) {
          clearInterval(interval);
        }
      }, 50);
    }
  }

  const TopicRenderer = {
    render(container, subject, topic) {
      if (!topic) {
        container.innerHTML = `
          <div class="coming-soon-container">
            <div class="coming-soon-icon">⚠️</div>
            <h1 class="coming-soon-title">Topic Not Found</h1>
            <p class="coming-soon-desc">The requested topic could not be located in the syllabus.</p>
            <a href="index.html" class="nav-btn">Return to Home</a>
          </div>
        `;
        return;
      }

      // Check if topic is marked "coming_soon"
      if (topic.status === 'coming_soon' || !topic.explanation) {
        const topicIndex = subject.topics.findIndex(t => t.id === topic.id);
        const prevTopic = topicIndex > 0 ? subject.topics[topicIndex - 1] : null;
        const nextTopic = topicIndex < subject.topics.length - 1 ? subject.topics[topicIndex + 1] : null;

        container.innerHTML = `
          <div class="breadcrumb-nav">
            <ul class="breadcrumb-list">
              <li class="breadcrumb-item"><a href="index.html">🏠 Home</a></li>
              <li class="breadcrumb-separator">/</li>
              <li class="breadcrumb-item"><a href="subject.html?id=${subject.id}">${subject.title}</a></li>
              <li class="breadcrumb-separator">/</li>
              <li class="breadcrumb-current">${topic.title}</li>
            </ul>
          </div>

          <div class="coming-soon-container">
            <div class="coming-soon-icon">⏳</div>
            <h1 class="coming-soon-title">${topic.title}</h1>
            <p class="coming-soon-desc">
              Detailed revision notes, step-by-step solved examples, and practice MCQs for this topic are currently being compiled according to the SSC JE syllabus.
            </p>
            <div style="display: flex; gap: 0.75rem; justify-content: center; flex-wrap: wrap;">
              <a href="subject.html?id=${subject.id}" class="nav-btn">Back to ${subject.title}</a>
              <a href="index.html" class="nav-btn">View All Subjects</a>
            </div>
          </div>

          <div class="topic-nav-footer">
            ${prevTopic ? `<a href="topic.html?id=${subject.id}/${prevTopic.id}" class="btn-topic-nav">← ${prevTopic.title}</a>` : `<span class="btn-topic-nav disabled">← Previous Topic</span>`}
            ${nextTopic ? `<a href="topic.html?id=${subject.id}/${nextTopic.id}" class="btn-topic-nav">${nextTopic.title} →</a>` : `<span class="btn-topic-nav disabled">Next Topic →</span>`}
          </div>
        `;
        return;
      }

      const isRevised = window.StorageManager.isRevised(subject.id, topic.id);
      const isBookmarked = window.StorageManager.isBookmarked(subject.id, topic.id);

      // Find prev and next topics in syllabus order
      const topicIndex = subject.topics.findIndex(t => t.id === topic.id);
      const prevTopic = topicIndex > 0 ? subject.topics[topicIndex - 1] : null;
      const nextTopic = topicIndex < subject.topics.length - 1 ? subject.topics[topicIndex + 1] : null;

      // Construct HTML
      let html = `
        <!-- Breadcrumb Navigation -->
        <nav class="breadcrumb-nav" aria-label="Breadcrumb">
          <ul class="breadcrumb-list">
            <li class="breadcrumb-item"><a href="index.html">🏠 Home</a></li>
            <li class="breadcrumb-separator">/</li>
            <li class="breadcrumb-item"><a href="subject.html?id=${subject.id}">${subject.title}</a></li>
            <li class="breadcrumb-separator">/</li>
            <li class="breadcrumb-current">${topic.title}</li>
          </ul>
        </nav>

        <!-- Action Toolbar -->
        <div class="topic-action-toolbar">
          <div class="toolbar-left">
            <a href="subject.html?id=${subject.id}" class="btn-toolbar" title="Back to Subject">
              <span>←</span>
              <span>${subject.title}</span>
            </a>
          </div>
          <div class="toolbar-right">
            <button id="btn-toggle-revised" class="btn-toolbar ${isRevised ? 'revised-active' : ''}" aria-pressed="${isRevised}">
              <span id="revised-status-icon">${isRevised ? '✓' : '○'}</span>
              <span id="revised-status-text">${isRevised ? 'Marked as Revised' : 'Mark as Revised'}</span>
            </button>
            <button id="btn-toggle-bookmark" class="btn-toolbar ${isBookmarked ? 'bookmark-active' : ''}" aria-label="Bookmark this topic">
              <span id="bookmark-status-icon">${isBookmarked ? '★' : '☆'}</span>
              <span id="bookmark-status-text">${isBookmarked ? 'Bookmarked' : 'Bookmark'}</span>
            </button>
            <button id="btn-print-topic" class="btn-toolbar" title="Print this revision note">
              <span>🖨️</span>
              <span>Print</span>
            </button>
          </div>
        </div>

        <!-- 1. Title + Subject Breadcrumb -->
        <header class="topic-header-block">
          <span class="status-badge ready" style="margin-bottom: 0.5rem;">
            ● Ready for Revision
          </span>
          <h1 class="topic-main-title">${topic.title}</h1>
        </header>

        <!-- 2. Explanation (Short, Plain Language) -->
        <section class="topic-section">
          <h2 class="topic-section-title">
            <span class="section-icon">📖</span> Explanation
          </h2>
          <div class="topic-explanation-text">
            <p>${formatTextWithCode(topic.explanation)}</p>
          </div>
        </section>

        <!-- 3. Key Points Box (Highlighted: formulas, rules, definitions) -->
        ${topic.keyPoints && topic.keyPoints.length > 0 ? `
          <section class="topic-section">
            <div class="key-points-card">
              <h2 class="topic-section-title">
                <span class="section-icon">⚡</span> Key Points & Rules
              </h2>
              <ul class="key-points-list">
                ${topic.keyPoints.map(kp => `<li class="key-point-item">${formatTextWithCode(kp)}</li>`).join('')}
              </ul>
            </div>
          </section>
        ` : ''}

        <!-- 4. Diagram / Table Section (Optional) -->
        ${topic.tables && topic.tables.length > 0 ? `
          <section class="topic-section">
            <h2 class="topic-section-title">
              <span class="section-icon">📊</span> Comparative Tables & References
            </h2>
            ${topic.tables.map(tbl => `
              <div class="table-scroll-wrapper">
                <table class="topic-data-table">
                  ${tbl.caption ? `<caption>${tbl.caption}</caption>` : ''}
                  <thead>
                    <tr>
                      ${tbl.headers.map(h => `<th>${h}</th>`).join('')}
                    </tr>
                  </thead>
                  <tbody>
                    ${tbl.rows.map(row => `
                      <tr>
                        ${row.map(col => `<td>${formatTextWithCode(col)}</td>`).join('')}
                      </tr>
                    `).join('')}
                  </tbody>
                </table>
              </div>
            `).join('')}
          </section>
        ` : ''}

        <!-- 5. Solved Examples (Numbered, Step by Step) -->
        ${topic.examples && topic.examples.length > 0 ? `
          <section class="topic-section">
            <h2 class="topic-section-title">
              <span class="section-icon">📝</span> Solved Examples (Step-by-Step)
            </h2>
            <div class="examples-grid">
              ${topic.examples.map((ex, idx) => `
                <div class="example-card">
                  <div class="example-header">
                    <span class="example-number-badge">Example ${idx + 1}</span>
                  </div>
                  <div class="example-question">
                    ${formatTextWithCode(ex.question)}
                  </div>
                  <div class="example-steps-box">
                    ${ex.steps.map(s => `<div class="example-step-line">${formatTextWithCode(s)}</div>`).join('')}
                  </div>
                  <div class="example-final-answer">
                    <span>💡 <strong>Final Answer:</strong></span>
                    <span>${formatTextWithCode(ex.answer)}</span>
                  </div>
                </div>
              `).join('')}
            </div>
          </section>
        ` : ''}

        <!-- 6. Exam Traps / Remember This -->
        ${topic.traps && topic.traps.length > 0 ? `
          <section class="topic-section">
            <div class="traps-card">
              <h2 class="topic-section-title">
                <span class="section-icon">⚠️</span> Exam Traps & Common Mistakes
              </h2>
              <ul class="traps-list">
                ${topic.traps.map(tr => `<li class="trap-item">${formatTextWithCode(tr)}</li>`).join('')}
              </ul>
            </div>
          </section>
        ` : ''}

        <!-- 7. Practice Questions (MCQ) with Show Answer & Explanations -->
        ${topic.practice && topic.practice.length > 0 ? `
          <section class="topic-section">
            <h2 class="topic-section-title">
              <span class="section-icon">🎯</span> Practice Questions (SSC JE Pattern)
            </h2>
            <div class="practice-container">
              ${topic.practice.map((item, qIdx) => `
                <div class="mcq-card" data-qindex="${qIdx}" data-answer="${item.answer}">
                  <div class="mcq-header">
                    <span class="mcq-badge">Question ${qIdx + 1} of ${topic.practice.length}</span>
                  </div>
                  <div class="mcq-question-text">
                    ${formatTextWithCode(item.q)}
                  </div>
                  <div class="mcq-options-grid">
                    ${item.options.map((opt, optIdx) => {
                      const prefix = String.fromCharCode(65 + optIdx); // A, B, C, D
                      return `
                        <button class="mcq-option-btn" data-optindex="${optIdx}" type="button">
                          <span class="option-prefix">${prefix}</span>
                          <span class="option-content">${formatTextWithCode(opt)}</span>
                        </button>
                      `;
                    }).join('')}
                  </div>
                  <div class="mcq-action-row">
                    <button class="btn-show-answer" type="button">
                      <span>👁️</span> Show Answer
                    </button>
                  </div>
                  <div class="mcq-explanation-box">
                    <div class="explanation-title">Explanation & Rationale:</div>
                    <div class="explanation-text">${formatTextWithCode(item.why)}</div>
                  </div>
                </div>
              `).join('')}
            </div>
          </section>
        ` : ''}

        <!-- 8. Prev / Next Topic Buttons -->
        <footer class="topic-nav-footer">
          ${prevTopic ? `
            <a href="topic.html?id=${subject.id}/${prevTopic.id}" class="btn-topic-nav">
              <span>← Previous Topic</span>
              <span style="font-size: 0.85rem; color: var(--text-muted); font-weight: 500;">(${prevTopic.title})</span>
            </a>
          ` : `
            <span class="btn-topic-nav disabled">← First Topic</span>
          `}
          ${nextTopic ? `
            <a href="topic.html?id=${subject.id}/${nextTopic.id}" class="btn-topic-nav">
              <span>Next Topic →</span>
              <span style="font-size: 0.85rem; color: var(--text-muted); font-weight: 500;">(${nextTopic.title})</span>
            </a>
          ` : `
            <span class="btn-topic-nav disabled">Last Topic in Syllabus →</span>
          `}
        </footer>
      `;

      container.innerHTML = html;

      // Setup Event Listeners
      setupTopicInteractions(subject, topic);

      // Render math formulas
      renderMath(container);
    }
  };

  function setupTopicInteractions(subject, topic) {
    // 1. Revision Checkbox / Button
    const revisedBtn = document.getElementById('btn-toggle-revised');
    const revisedIcon = document.getElementById('revised-status-icon');
    const revisedText = document.getElementById('revised-status-text');

    if (revisedBtn) {
      revisedBtn.addEventListener('click', () => {
        const isNowRevised = window.StorageManager.toggleRevised(subject.id, topic.id);
        revisedBtn.classList.toggle('revised-active', isNowRevised);
        revisedBtn.setAttribute('aria-pressed', isNowRevised);
        revisedIcon.textContent = isNowRevised ? '✓' : '○';
        revisedText.textContent = isNowRevised ? 'Marked as Revised' : 'Mark as Revised';
      });
    }

    // 2. Bookmark Button
    const bookmarkBtn = document.getElementById('btn-toggle-bookmark');
    const bookmarkIcon = document.getElementById('bookmark-status-icon');
    const bookmarkText = document.getElementById('bookmark-status-text');

    if (bookmarkBtn) {
      bookmarkBtn.addEventListener('click', () => {
        const isSaved = window.StorageManager.toggleBookmark({
          subjectId: subject.id,
          topicId: topic.id,
          title: topic.title,
          subjectTitle: subject.title,
          icon: subject.icon
        });
        bookmarkBtn.classList.toggle('bookmark-active', isSaved);
        bookmarkIcon.textContent = isSaved ? '★' : '☆';
        bookmarkText.textContent = isSaved ? 'Bookmarked' : 'Bookmark';
        updateHeaderBookmarkCount();
      });
    }

    // 3. Print Button
    const printBtn = document.getElementById('btn-print-topic');
    if (printBtn) {
      printBtn.addEventListener('click', () => {
        // Automatically expand all explanations before printing
        document.querySelectorAll('.mcq-explanation-box').forEach(b => b.classList.add('visible'));
        window.print();
      });
    }

    // 4. MCQs Interactive Handling
    const mcqCards = document.querySelectorAll('.mcq-card');
    mcqCards.forEach(card => {
      const correctIdx = parseInt(card.dataset.answer, 10);
      const options = card.querySelectorAll('.mcq-option-btn');
      const showAnswerBtn = card.querySelector('.btn-show-answer');
      const explanationBox = card.querySelector('.mcq-explanation-box');
      let selectedIdx = null;

      options.forEach(optBtn => {
        optBtn.addEventListener('click', () => {
          options.forEach(b => b.classList.remove('selected'));
          optBtn.classList.add('selected');
          selectedIdx = parseInt(optBtn.dataset.optindex, 10);
        });
      });

      showAnswerBtn.addEventListener('click', () => {
        // Highlight correct option in emerald
        options.forEach(optBtn => {
          const idx = parseInt(optBtn.dataset.optindex, 10);
          if (idx === correctIdx) {
            optBtn.classList.add('is-correct');
          } else if (idx === selectedIdx && idx !== correctIdx) {
            optBtn.classList.add('is-wrong');
          }
        });
        // Reveal explanation box
        explanationBox.classList.add('visible');
        if (explanationBox && !explanationBox.querySelector('.katex')) {
          renderMath(explanationBox);
        }
      });
    });
  }

  function updateHeaderBookmarkCount() {
    const counter = document.getElementById('nav-bookmark-count');
    if (counter && window.StorageManager) {
      const count = window.StorageManager.getBookmarks().length;
      counter.textContent = count;
      counter.style.display = count > 0 ? 'inline-flex' : 'none';
    }
  }

  window.TopicRenderer = TopicRenderer;
  window.updateHeaderBookmarkCount = updateHeaderBookmarkCount;
})();
