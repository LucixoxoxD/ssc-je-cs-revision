// Topic Page Renderer: Modern Exam Revision Dashboard for SSC JE / IMD Scientific Assistant Paper-I
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

  // Format explanation text into structured, scannable concept blocks
  function formatExplanation(text) {
    if (!text) return '';
    
    // Split by numbered subheadings: **1. Title**, **2. Title**, etc.
    const sections = text.split(/(?=\*\*\d+\.\s+[^*]+\*\*)/g);
    
    if (sections.length <= 1) {
      return `<div class="concept-card"><div class="concept-body">${formatParagraphs(text)}</div></div>`;
    }

    return sections.map((sec) => {
      sec = sec.trim();
      if (!sec) return '';
      const match = sec.match(/^\*\*(\d+)\.\s+([^*]+)\*\*\s*([\s\S]*)$/);
      if (match) {
        const num = match[1];
        const title = match[2].trim();
        const content = match[3].trim();
        return `
          <div class="concept-card">
            <div class="concept-header">
              <span class="concept-num-badge">${num}</span>
              <h3 class="concept-title">${title}</h3>
            </div>
            <div class="concept-body">
              ${formatParagraphs(content)}
            </div>
          </div>
        `;
      } else {
        return `<div class="concept-card"><div class="concept-body">${formatParagraphs(sec)}</div></div>`;
      }
    }).join('');
  }

  function formatParagraphs(text) {
    if (!text) return '';
    const lines = text.split('\n');
    let result = [];
    let inList = false;

    for (let line of lines) {
      line = line.trim();
      if (!line) {
        if (inList) {
          result.push('</ul>');
          inList = false;
        }
        continue;
      }
      if (line.startsWith('- ') || line.startsWith('* ')) {
        if (!inList) {
          result.push('<ul class="concept-list">');
          inList = true;
        }
        const itemText = line.substring(2).trim();
        result.push(`<li>${formatTextWithCode(itemText)}</li>`);
      } else {
        if (inList) {
          result.push('</ul>');
          inList = false;
        }
        result.push(`<p class="concept-p">${formatTextWithCode(line)}</p>`);
      }
    }
    if (inList) {
      result.push('</ul>');
    }
    return result.join('');
  }

  function getOneLineSummary(topic) {
    if (topic.syllabus) {
      return `<strong>Syllabus Scope:</strong> ${topic.syllabus}`;
    }
    if (topic.explanation) {
      const firstSentence = topic.explanation.split('.')[0] + '.';
      return formatTextWithCode(firstSentence);
    }
    return `Core high-yield revision points and exam-tested formulas for SSC JE / IMD Paper-I.`;
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

      // Check if topic is pending or lacks content
      if (topic.status === 'pending' || topic.status === 'coming_soon' || !topic.explanation) {
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
            ${topic.syllabus ? `
              <div style="max-width: 680px; margin: 1.25rem auto 1.5rem; padding: 1.1rem 1.25rem; background: var(--bg-surface-elevated); border: 1px solid var(--border-subtle); border-radius: 8px; text-align: left;">
                <div style="font-size: 0.75rem; font-weight: 700; text-transform: uppercase; color: var(--primary); letter-spacing: 0.05em; margin-bottom: 0.4rem;">
                  Official Syllabus Scope
                </div>
                <p style="font-size: 0.925rem; line-height: 1.55; color: var(--text-secondary); margin: 0;">
                  ${escapeHtml(topic.syllabus)}
                </p>
              </div>
            ` : ''}
            <p class="coming-soon-desc">
              Detailed revision notes, step-by-step solved examples, and practice MCQs for this topic are currently being compiled according to the official syllabus.
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

      // Extract Quick Revision summary data
      const mustKnowItems = (topic.keyPoints || []).slice(0, 2);
      const formulaItems = (topic.keyPoints || []).filter(kp => kp.includes('$')).slice(0, 2);
      const topTrapsItems = (topic.traps || []).slice(0, 2);

      let html = `
        <!-- 1. COMPACT HERO SECTION (Approx 160-200px) -->
        <header class="topic-hero-card">
          <div class="hero-top-row">
            <nav class="breadcrumb-nav" aria-label="Breadcrumb">
              <ul class="breadcrumb-list">
                <li class="breadcrumb-item"><a href="index.html">🏠 Home</a></li>
                <li class="breadcrumb-separator">/</li>
                <li class="breadcrumb-item"><a href="subject.html?id=${subject.id}">${subject.title}</a></li>
                <li class="breadcrumb-separator">/</li>
                <li class="breadcrumb-current">${topic.title}</li>
              </ul>
            </nav>

            <div class="hero-quick-nav">
              ${prevTopic ? `<a href="topic.html?id=${subject.id}/${prevTopic.id}" class="hero-nav-arrow" title="Previous: ${prevTopic.title}">‹ Prev</a>` : `<span class="hero-nav-arrow disabled">‹ Prev</span>`}
              <span class="hero-nav-counter">${topicIndex + 1} / ${subject.topics.length}</span>
              ${nextTopic ? `<a href="topic.html?id=${subject.id}/${nextTopic.id}" class="hero-nav-arrow" title="Next: ${nextTopic.title}">Next ›</a>` : `<span class="hero-nav-arrow disabled">Next ›</span>`}
            </div>
          </div>

          <div class="hero-main-row">
            <div class="hero-title-area">
              <div class="hero-badge-strip">
                <span class="status-badge ready">● Ready to Revise</span>
                <span class="subject-tag-badge">${subject.icon || '📚'} ${subject.title}</span>
                <span id="hero-revised-pill" class="revised-pill ${isRevised ? 'active' : ''}">${isRevised ? '✓ Revised' : '○ Unrevised'}</span>
              </div>
              <h1 class="topic-main-title">${topic.title}</h1>
              <p class="topic-summary-line">
                ${getOneLineSummary(topic)}
              </p>
            </div>

            <div class="hero-action-area">
              <button id="btn-toggle-revised" class="btn-hero-action ${isRevised ? 'revised-active' : ''}" aria-pressed="${isRevised}">
                <span id="revised-status-icon">${isRevised ? '✓' : '○'}</span>
                <span id="revised-status-text">${isRevised ? 'Revised' : 'Mark Revised'}</span>
              </button>
              <button id="btn-toggle-bookmark" class="btn-hero-action ${isBookmarked ? 'bookmark-active' : ''}" aria-label="Bookmark this topic">
                <span id="bookmark-status-icon">${isBookmarked ? '★' : '☆'}</span>
                <span id="bookmark-status-text">${isBookmarked ? 'Saved' : 'Bookmark'}</span>
              </button>
              <button id="btn-print-topic" class="btn-hero-action btn-icon-only" title="Print this revision note">
                <span>🖨️</span>
              </button>
              <a href="subject.html?id=${subject.id}" class="btn-hero-action btn-icon-only" title="Back to ${subject.title} Syllabus">
                <span>←</span>
              </a>
            </div>
          </div>
        </header>

        <!-- 2. STICKY TOP REVISION BAR (Scrolls & highlights active section) -->
        <nav class="sticky-revision-bar" id="revision-sticky-bar" aria-label="Revision Section Navigation">
          <div class="sticky-bar-inner">
            <div class="nav-links-scroll" id="sticky-nav-scroll">
              <a href="#section-overview" class="revision-nav-link active" data-target="section-overview">
                <span class="nav-link-icon">📖</span>
                <span>Overview</span>
              </a>
              <a href="#section-keypoints" class="revision-nav-link" data-target="section-keypoints">
                <span class="nav-link-icon">⚡</span>
                <span>Key Points</span>
              </a>
              ${topic.tables && topic.tables.length > 0 ? `
                <a href="#section-tables" class="revision-nav-link" data-target="section-tables">
                  <span class="nav-link-icon">📊</span>
                  <span>Tables (${topic.tables.length})</span>
                </a>
              ` : ''}
              ${topic.examples && topic.examples.length > 0 ? `
                <a href="#section-examples" class="revision-nav-link" data-target="section-examples">
                  <span class="nav-link-icon">📝</span>
                  <span>Examples (${topic.examples.length})</span>
                </a>
              ` : ''}
              ${topic.traps && topic.traps.length > 0 ? `
                <a href="#section-traps" class="revision-nav-link" data-target="section-traps">
                  <span class="nav-link-icon">⚠️</span>
                  <span>Traps (${topic.traps.length})</span>
                </a>
              ` : ''}
              ${topic.practice && topic.practice.length > 0 ? `
                <a href="#section-mcqs" class="revision-nav-link" data-target="section-mcqs">
                  <span class="nav-link-icon">🎯</span>
                  <span>Practice (${topic.practice.length})</span>
                </a>
              ` : ''}
            </div>
            <div class="sticky-bar-quick-actions">
              <button class="sticky-action-pill ${isRevised ? 'active' : ''}" id="sticky-quick-revised" title="Toggle revised status">
                <span id="sticky-revised-icon">${isRevised ? '✓ Revised' : '○ Mark'}</span>
              </button>
            </div>
          </div>
        </nav>

        <!-- 3. QUICK REVISION DASHBOARD STRIP (4 Small High-Yield Cards) -->
        <section class="quick-revision-strip" id="quick-revision-panel" aria-label="Quick Revision Dashboard">
          <div class="quick-card quick-card-time">
            <div class="quick-card-header">
              <span class="quick-card-icon">⏱️</span>
              <span class="quick-card-label">Target Pace</span>
            </div>
            <div class="quick-card-highlight">3–5 Min Revision</div>
            <div class="quick-card-subtext">~36s per Question Environment</div>
          </div>

          <div class="quick-card quick-card-mustknow">
            <div class="quick-card-header">
              <span class="quick-card-icon">⚡</span>
              <span class="quick-card-label">Must Know</span>
              <a href="#section-keypoints" class="quick-card-link">View all →</a>
            </div>
            <div class="quick-card-content">
              ${mustKnowItems.length > 0 ? formatTextWithCode(mustKnowItems[0]) : 'Core syllabus formulas & rules.'}
            </div>
          </div>

          <div class="quick-card quick-card-formula">
            <div class="quick-card-header">
              <span class="quick-card-icon">📐</span>
              <span class="quick-card-label">Formula Box</span>
              <a href="#section-keypoints" class="quick-card-link">Formulas →</a>
            </div>
            <div class="quick-card-content">
              ${formulaItems.length > 0 ? formatTextWithCode(formulaItems[0]) : 'Exam formulas rendered with KaTeX.'}
            </div>
          </div>

          <div class="quick-card quick-card-traps">
            <div class="quick-card-header">
              <span class="quick-card-icon">⚠️</span>
              <span class="quick-card-label">Exam Traps</span>
              <a href="#section-traps" class="quick-card-link">All traps →</a>
            </div>
            <div class="quick-card-content">
              ${topTrapsItems.length > 0 ? formatTextWithCode(topTrapsItems[0]) : 'Top pitfalls to avoid.'}
            </div>
          </div>
        </section>

        <!-- 4. TWO-COLUMN DASHBOARD GRID (Desktop) / STREAMLINED STACK (Mobile) -->
        <div class="topic-dashboard-grid">
          <!-- MAIN CONTENT COLUMN (Left on desktop: Detailed Notes, Tables, Examples, MCQs) -->
          <div class="topic-main-column">
            
            <!-- SECTION 1: Detailed Concepts / Explanation -->
            <section class="topic-section" id="section-overview">
              <div class="section-header-row">
                <h2 class="topic-section-title">
                  <span class="section-icon">📖</span> Detailed Concepts & Notes
                </h2>
                <button class="btn-section-toggle" id="btn-toggle-explanation" type="button" aria-expanded="true">
                  <span class="toggle-icon">▾</span>
                  <span class="toggle-text">Collapse Notes</span>
                </button>
              </div>
              <div class="topic-explanation-text" id="explanation-body">
                ${formatExplanation(topic.explanation)}
              </div>
            </section>

            <!-- SECTION 3: Comparative Tables -->
            ${topic.tables && topic.tables.length > 0 ? `
              <section class="topic-section" id="section-tables">
                <div class="section-header-row">
                  <h2 class="topic-section-title">
                    <span class="section-icon">📊</span> Comparative Tables & References
                  </h2>
                </div>
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

            <!-- SECTION 4: Solved Examples -->
            ${topic.examples && topic.examples.length > 0 ? `
              <section class="topic-section" id="section-examples">
                <div class="section-header-row">
                  <h2 class="topic-section-title">
                    <span class="section-icon">📝</span> Solved Examples (~36s Pace)
                  </h2>
                </div>
                <div class="examples-grid">
                  ${topic.examples.map((ex, idx) => `
                    <div class="example-card">
                      <div class="example-header">
                        <span class="example-number-badge">Example ${idx + 1}</span>
                        <span class="example-pace-tag">Step-by-Step</span>
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

            <!-- SECTION 6: Practice MCQs (Dedicated Exam Mode) -->
            ${topic.practice && topic.practice.length > 0 ? `
              <section class="topic-section" id="section-mcqs">
                <div class="section-header-row">
                  <h2 class="topic-section-title">
                    <span class="section-icon">🎯</span> Practice MCQs (SSC JE / IMD Pattern)
                  </h2>
                  <span class="exam-tracker-badge" id="mcq-tracker-badge">0 / ${topic.practice.length} Attempted</span>
                </div>
                <div class="practice-container">
                  ${topic.practice.map((item, qIdx) => `
                    <div class="mcq-card" data-qindex="${qIdx}" data-answer="${item.answer}">
                      <div class="mcq-header">
                        <span class="mcq-badge">Question ${qIdx + 1} of ${topic.practice.length}</span>
                        <span class="mcq-pace-tag">~36s Target</span>
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
                      <div class="mcq-explanation-box mcq-explanation">
                        <div class="explanation-title">Explanation & Solution:</div>
                        <div class="explanation-text">${formatTextWithCode(item.why)}</div>
                      </div>
                    </div>
                  `).join('')}
                </div>
              </section>
            ` : ''}

          </div>

          <!-- SIDE STUDY COLUMN (Right on desktop: Sticky Reference Cards) -->
          <aside class="topic-side-column">
            
            <!-- SECTION 2: Key Points & Formulas -->
            ${topic.keyPoints && topic.keyPoints.length > 0 ? `
              <section class="topic-section" id="section-keypoints">
                <div class="key-points-card">
                  <div class="card-title-bar">
                    <h2 class="topic-section-title">
                      <span class="section-icon">⚡</span> Key Points & Rules
                    </h2>
                    <span class="badge-count">${topic.keyPoints.length}</span>
                  </div>
                  <ul class="key-points-list">
                    ${topic.keyPoints.map(kp => `<li class="key-point-item">${formatTextWithCode(kp)}</li>`).join('')}
                  </ul>
                </div>
              </section>
            ` : ''}

            <!-- SECTION 5: Exam Traps & Common Mistakes -->
            ${topic.traps && topic.traps.length > 0 ? `
              <section class="topic-section" id="section-traps">
                <div class="traps-card">
                  <div class="card-title-bar">
                    <h2 class="topic-section-title">
                      <span class="section-icon">⚠️</span> Exam Traps & Pitfalls
                    </h2>
                    <span class="badge-count">${topic.traps.length}</span>
                  </div>
                  <ul class="traps-list">
                    ${topic.traps.map(tr => `<li class="trap-item">${formatTextWithCode(tr)}</li>`).join('')}
                  </ul>
                </div>
              </section>
            ` : ''}

          </aside>
        </div>

        <!-- 5. PREV / NEXT COMPREHENSIVE BOTTOM NAVIGATION -->
        <footer class="topic-nav-footer">
          ${prevTopic ? `
            <a href="topic.html?id=${subject.id}/${prevTopic.id}" class="btn-topic-nav">
              <span class="nav-dir-label">← Previous Topic</span>
              <span class="nav-topic-name">${prevTopic.title}</span>
            </a>
          ` : `
            <span class="btn-topic-nav disabled">
              <span class="nav-dir-label">← First Topic</span>
              <span class="nav-topic-name">Start of Syllabus</span>
            </span>
          `}
          ${nextTopic ? `
            <a href="topic.html?id=${subject.id}/${nextTopic.id}" class="btn-topic-nav next-nav">
              <span class="nav-dir-label">Next Topic →</span>
              <span class="nav-topic-name">${nextTopic.title}</span>
            </a>
          ` : `
            <span class="btn-topic-nav disabled next-nav">
              <span class="nav-dir-label">Completed →</span>
              <span class="nav-topic-name">End of Syllabus</span>
            </span>
          `}
        </footer>

        <!-- 6. FLOATING BACK TO TOP BUTTON -->
        <button id="btn-back-to-top" class="back-to-top-btn" type="button" aria-label="Back to top">
          <span>↑</span>
          <span>Top</span>
        </button>
      `;

      container.innerHTML = html;

      // Setup Event Listeners and Interactive Features
      setupTopicInteractions(subject, topic);

      // Render math formulas deterministically
      renderMath(container);
    }
  };

  function setupTopicInteractions(subject, topic) {
    // 1. Revision Toggle Buttons (Hero & Sticky Bar)
    const revisedBtn = document.getElementById('btn-toggle-revised');
    const revisedIcon = document.getElementById('revised-status-icon');
    const revisedText = document.getElementById('revised-status-text');
    const heroPill = document.getElementById('hero-revised-pill');
    const stickyPill = document.getElementById('sticky-quick-revised');
    const stickyIcon = document.getElementById('sticky-revised-icon');

    function updateRevisedUI(isNowRevised) {
      if (revisedBtn) {
        revisedBtn.classList.toggle('revised-active', isNowRevised);
        revisedBtn.setAttribute('aria-pressed', isNowRevised);
      }
      if (revisedIcon) revisedIcon.textContent = isNowRevised ? '✓' : '○';
      if (revisedText) revisedText.textContent = isNowRevised ? 'Revised' : 'Mark Revised';
      if (heroPill) {
        heroPill.classList.toggle('active', isNowRevised);
        heroPill.textContent = isNowRevised ? '✓ Revised' : '○ Unrevised';
      }
      if (stickyPill) {
        stickyPill.classList.toggle('active', isNowRevised);
      }
      if (stickyIcon) {
        stickyIcon.textContent = isNowRevised ? '✓ Revised' : '○ Mark';
      }
    }

    if (revisedBtn) {
      revisedBtn.addEventListener('click', () => {
        const isNowRevised = window.StorageManager.toggleRevised(subject.id, topic.id);
        updateRevisedUI(isNowRevised);
      });
    }

    if (stickyPill) {
      stickyPill.addEventListener('click', () => {
        const isNowRevised = window.StorageManager.toggleRevised(subject.id, topic.id);
        updateRevisedUI(isNowRevised);
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
        if (bookmarkIcon) bookmarkIcon.textContent = isSaved ? '★' : '☆';
        if (bookmarkText) bookmarkText.textContent = isSaved ? 'Saved' : 'Bookmark';
        updateHeaderBookmarkCount();
      });
    }

    // 3. Print Button
    const printBtn = document.getElementById('btn-print-topic');
    if (printBtn) {
      printBtn.addEventListener('click', () => {
        // Expand explanation and MCQs before printing
        const expBody = document.getElementById('explanation-body');
        if (expBody) expBody.style.display = 'block';
        document.querySelectorAll('.mcq-explanation-box').forEach(b => b.classList.add('visible'));
        window.print();
      });
    }

    // 4. Collapse / Expand Detailed Notes
    const toggleExpBtn = document.getElementById('btn-toggle-explanation');
    const expBody = document.getElementById('explanation-body');
    if (toggleExpBtn && expBody) {
      toggleExpBtn.addEventListener('click', () => {
        const isExpanded = toggleExpBtn.getAttribute('aria-expanded') === 'true';
        if (isExpanded) {
          expBody.style.display = 'none';
          toggleExpBtn.setAttribute('aria-expanded', 'false');
          toggleExpBtn.querySelector('.toggle-icon').textContent = '▸';
          toggleExpBtn.querySelector('.toggle-text').textContent = 'Expand Notes';
        } else {
          expBody.style.display = 'block';
          toggleExpBtn.setAttribute('aria-expanded', 'true');
          toggleExpBtn.querySelector('.toggle-icon').textContent = '▾';
          toggleExpBtn.querySelector('.toggle-text').textContent = 'Collapse Notes';
        }
      });
    }

    // 5. Sticky Nav Bar Scroll Spy & Click Navigation
    const navLinks = document.querySelectorAll('.revision-nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('data-target');
        const targetEl = document.getElementById(targetId);
        if (targetEl) {
          navLinks.forEach(l => l.classList.remove('active'));
          link.classList.add('active');
          targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });

    // IntersectionObserver for Scroll Spy
    const sectionsToObserve = [
      'section-overview',
      'section-keypoints',
      'section-tables',
      'section-examples',
      'section-traps',
      'section-mcqs'
    ].map(id => document.getElementById(id)).filter(Boolean);

    if ('IntersectionObserver' in window && sectionsToObserve.length > 0) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            navLinks.forEach(link => {
              if (link.getAttribute('data-target') === id) {
                navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
                // Scroll nav link into view in mobile horizontal bar
                link.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
              }
            });
          }
        });
      }, {
        rootMargin: '-80px 0px -55% 0px',
        threshold: 0.1
      });

      sectionsToObserve.forEach(s => observer.observe(s));
    }

    // 6. Floating Back to Top Button
    const backToTopBtn = document.getElementById('btn-back-to-top');
    if (backToTopBtn) {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
          backToTopBtn.classList.add('visible');
        } else {
          backToTopBtn.classList.remove('visible');
        }
      }, { passive: true });

      backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    // 7. Interactive Practice MCQs Handling
    const mcqCards = document.querySelectorAll('.mcq-card');
    const trackerBadge = document.getElementById('mcq-tracker-badge');
    let attemptedQuestions = new Set();

    mcqCards.forEach(card => {
      const qIndex = card.dataset.qindex;
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
          attemptedQuestions.add(qIndex);
          if (trackerBadge) {
            trackerBadge.textContent = `${attemptedQuestions.size} / ${mcqCards.length} Attempted`;
          }
        });
      });

      showAnswerBtn.addEventListener('click', () => {
        options.forEach(optBtn => {
          const idx = parseInt(optBtn.dataset.optindex, 10);
          if (idx === correctIdx) {
            optBtn.classList.add('is-correct');
          } else if (idx === selectedIdx && idx !== correctIdx) {
            optBtn.classList.add('is-wrong');
          }
        });

        explanationBox.classList.add('visible');
        explanationBox.style.display = 'block';

        attemptedQuestions.add(qIndex);
        if (trackerBadge) {
          trackerBadge.textContent = `${attemptedQuestions.size} / ${mcqCards.length} Attempted`;
        }

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
