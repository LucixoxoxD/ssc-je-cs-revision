# SSC JE (Computer Science & IT) Revision Portal 🚀

A high-yield, static revision web application designed for candidates preparing for the **Staff Selection Commission Junior Engineer (SSC JE) - Computer Science & Information Technology** examination.

Built with **vanilla HTML, CSS, and modern JavaScript**, this revision tool has **zero dependencies, no build steps**, and runs seamlessly whether served over HTTP or opened directly from your file system (`file://` protocol via double-clicking `index.html`).

---

## 📚 Syllabus Structure & Subjects

All 9 technical subjects are strictly structured according to the official syllabus order:

1. **Engineering Mathematics** (`data/eng-math.json`)
2. **Digital Logic** (`data/digital-logic.json`)
3. **Computer Organization & Architecture** (`data/coa.json`)
4. **Programming & Data Structures** (`data/pds.json`)
5. **Algorithms** (`data/algorithms.json`)
6. **Theory of Computation & Compiler Design** (`data/toc-cd.json`)
7. **Operating Systems** (`data/os.json`) *(Fully populated working model: **Process Management**)*
8. **Database Management Systems** (`data/dbms.json`)
9. **Computer Networks** (`data/cn.json`)

---

## ⚡ Key Features

- **Instant Global Search**: Filter topics across all 9 subjects in real-time as you type (Keyboard shortcut: `/`).
- **Standardized 8-Part Topic Template**:
  1. Title + Subject Breadcrumb
  2. Concise Plain-Language Explanation
  3. Key Points Box (Rules, formulas, definitions, state transitions, PCB attributes)
  4. Comparative Tables & Diagrams (Process vs Thread, OS Schedulers comparison)
  5. Step-by-Step Solved Numerical Examples
  6. Exam Traps & Common Pitfalls
  7. Practice Questions (MCQ) with interactive option selection, "Show Answer", and in-depth rationales
  8. Prev / Next topic navigation
- **Revision Progress Tracking**: "Mark as revised" checkboxes per topic, saved in `localStorage`, calculating live progress bars on both the subject level and overall dashboard.
- **Bookmarks System**: Star high-priority topics to review them anytime in a dedicated Bookmarks view.
- **Dark Mode**: High-contrast, sleek dark mode toggle with persistent preferences and zero flash of unstyled content (FOUC).
- **Offline Double-Click Ready**: Dual-loading architecture that uses standard `fetch()` when hosted on a web server and automatically falls back to script-tag-based JS loaders when launched directly from Windows Explorer (`file://`).
- **LaTeX Math Rendering**: Mathematical formulas rendered using KaTeX.
- **Print-Friendly Stylesheet**: `@media print` rules formatted for paper and PDF revision sheets.

---

## 💻 How to Run Locally

### Option 1: Direct File Open (Offline)
Simply double-click `index.html` in your file explorer.

### Option 2: Using Python Simple Server
```bash
python -m http.server 8080
```
Then navigate to `http://localhost:8080` in your web browser.

---

## 📂 Project Organization

```
├── index.html            # Main dashboard with 9 subject cards & live search
├── subject.html          # Subject syllabus view (?id=<subject-id>)
├── topic.html            # Topic revision view (?id=<subject-id>/<topic-id>)
├── bookmarks.html        # Bookmarked topics collection
├── css/
│   └── style.css         # Unified responsive design & print CSS
├── js/
│   ├── theme.js          # Dark/Light theme manager
│   ├── storage.js        # LocalStorage progress & bookmark tracker
│   ├── data-loader.js    # Universal fetch & script fallback data loader
│   ├── search.js         # Real-time search engine
│   └── topic-renderer.js # Topic template, MCQ engine & math rendering
└── data/
    ├── subjects.json / subjects.js
    ├── eng-math.json / eng-math.js
    ├── digital-logic.json / digital-logic.js
    ├── coa.json / coa.js
    ├── pds.json / pds.js
    ├── algorithms.json / algorithms.js
    ├── toc-cd.json / toc-cd.js
    ├── os.json / os.js
    ├── dbms.json / dbms.js
    └── cn.json / cn.js
```
