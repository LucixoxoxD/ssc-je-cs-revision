# Master Content-Generation Workflow & Quality Standards

**Exam Target:** SSC JE (Junior Engineer) & SSC Scientific Assistant (IMD) Paper-I (Computer Science & IT)  
**Target Pacing:** Objective multiple-choice examination (~36 seconds per question).  
**Revision Goal:** Rapid last-minute revision, formula scanning (2–3 min), and core understanding (3–5 min).

---

## 1. Core Rule: Complete Syllabus Coverage + Maximum Useful Brevity

* **WHAT to cover:** Strictly bounded by the topic's `syllabus` field in `/subjects.json`. Every listed syllabus point must be addressed.
* **HOW MUCH & HOW DEEPLY:** Governed by SSC Paper-I difficulty and the ~36-second-per-question environment.
* **Zero Textbook Bloat:** Explain every concept in the shortest, crispest form that enables a student to answer Paper-I questions correctly.
* **No Sacrifice of Coverage or Brevity:** Do not omit syllabus items; do not pad with academic proofs, deep derivations, or research-level depth.

---

## 2. Section-by-Section Guidelines

### A. Explanation
* Use short, scannable paragraphs and bulleted definitions.
* Define the concept first, followed immediately by its core exam-relevant property/rule.
* Keep formulas directly adjacent to the concept they describe.
* No mathematical proofs unless essential for answering Paper-I questions.

### B. Key Points
* High-yield bullet points: definitions, recognition rules, formulas, and critical distinctions.
* Focus on facts and relationships tested in SSC examinations.

### C. Tables
* Use comparison, classification, or formula-reference tables when they provide direct contrast and improve scanning speed.
* Avoid generic or redundant tables.

### D. Solved Examples
* 2–3 concise, step-by-step examples demonstrating the **fastest method** to solve typical exam questions.
* Numerical examples: 1–2 practical computational steps, fully verified arithmetic.
* Avoid derivations, proofs, or large-input algorithmic walkthroughs.

### E. Exam Traps
* 4–6 common exam pitfalls: confusing definitions, similar-looking formulas, common option traps, and boundary cases.

### F. Practice MCQs (Exactly 8 Questions)
* **The 36-Second Test:** *"Could a prepared student reasonably read and solve this in about 36 seconds?"*
* Exactly 4 options, exactly 1 unambiguous correct answer, varied answer positions (A, B, C, D).
* High-yield conceptual distinctions, direct formula applications, and straightforward computations.
* Strictly no GATE-level multi-case analysis or competitive-programming style problems.

---

## 3. Workflow Control Commands

* `CONTINUE`: Process the first pending topic in syllabus order, validate thoroughly, update JSON and fallback JS, mark `"done"` in `/subjects.json`, and STOP.
* `STATUS`: Report overall progress and first pending topic without generating content.
* `PAUSE` / `STOP`: Make no changes and halt.
* **One-Topic-Per-Run Rule:** Never process multiple topics in a single invocation. Always stop and output `WAITING FOR CONTINUE`.
