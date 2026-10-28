# Backend Engineering Projects: Learning by Building

## Objective

Build 8 practical projects to develop strong programming fundamentals and backend engineering skills through hands-on implementation.

**Core principle: Projects, not tutorials.**

I will write the code myself rather than vibe-code or blindly copy solutions. I can use documentation, search engines, and AI to understand concepts and debug errors, but I must understand and be able to explain every meaningful part of my implementation.

---

## Project Roadmap

### 01. CLI Expense Tracker
**Priority: Start Here**

**Goal:** Learn programming logic, file handling, data structures, input validation, and edge-case handling.

**Requirements:**
- [ ] Add an expense with amount, category, date, and description.
- [ ] List all recorded expenses.
- [ ] Edit and delete expenses by ID.
- [ ] Filter expenses by category and date range.
- [ ] Calculate total expenses and category-wise spending.
- [ ] Store data in a local JSON file.
- [ ] Handle invalid inputs, missing files, malformed JSON, and empty datasets.
- [ ] Prevent accidental data loss when saving changes.

**Learning outcomes:**
- Functions, loops, conditionals, and collections.
- File I/O and JSON serialization.
- Input validation and error handling.
- Basic data modelling and CRUD operations.

**Completion criteria:** The application works entirely through the CLI, preserves data between executions, and handles invalid inputs without crashing.

### 02. Log Analyzer

**Goal:** Learn file processing, parsing, timestamps, filtering, and pattern detection.

**Requirements:**
- [ ] Read and parse structured log files.
- [ ] Identify log levels such as INFO, WARNING, and ERROR.
- [ ] Count errors by type and frequency.
- [ ] Filter logs by date and time range.
- [ ] Identify the most frequent errors.
- [ ] Generate a summary report.
- [ ] Handle malformed lines, empty files, and missing files.

**Learning outcomes:**
- String processing and pattern matching.
- File iteration and data aggregation.
- Timestamp parsing and date handling.
- Efficient processing of large files.

**Completion criteria:** Given a log file, the program generates an accurate report and handles malformed records gracefully.

### 03. Todo App with Deadlines

**Goal:** Learn CRUD operations, HTTP APIs, database persistence, and application state.

**Requirements:**
- [ ] Create, view, update, and delete tasks.
- [ ] Assign deadlines and priorities.
- [ ] Mark tasks as completed or pending.
- [ ] Identify overdue tasks.
- [ ] Filter and sort tasks.
- [ ] Persist tasks in a database.
- [ ] Validate incoming data.
- [ ] Return appropriate errors for invalid requests.

**Learning outcomes:**
- REST API design.
- HTTP methods and status codes.
- Backend routing and request validation.
- Relational database fundamentals.
- Separation of application logic and data access.

**Completion criteria:** A working application exposes a documented API, persists data across restarts, and passes tests for its main operations.

### 04. URL Shortener

**Goal:** Understand routing, unique identifiers, redirects, persistence, and HTTP semantics.

**Requirements:**
- [ ] Accept a valid long URL.
- [ ] Generate a unique short identifier.
- [ ] Redirect short URLs to their original destinations.
- [ ] Persist URL mappings in a database.
- [ ] Track click counts.
- [ ] Support link expiration.
- [ ] Handle unknown identifiers and invalid URLs.
- [ ] Prevent collisions between generated identifiers.

**Learning outcomes:**
- HTTP redirects and status codes.
- Database constraints and unique identifiers.
- API design and persistence.
- Basic input validation and abuse prevention.

**Completion criteria:** Short links remain functional after application restarts, collisions are handled safely, and invalid or expired links return appropriate responses.

### 05. Password Manager

**Goal:** Learn secure data storage, hashing, encryption, and basic threat modelling.

**Requirements:**
- [ ] Create a local credential vault.
- [ ] Protect access using a master password.
- [ ] Add, retrieve, update, and delete credentials.
- [ ] Store encrypted credentials rather than plaintext.
- [ ] Use a password-based key derivation function.
- [ ] Use authenticated encryption for stored secrets.
- [ ] Never log master passwords or stored credentials.
- [ ] Handle incorrect master passwords and corrupted vault data.
- [ ] Document the application's security limitations.

**Learning outcomes:**
- File handling and secure persistence.
- Hashing versus encryption.
- Key derivation and key management.
- Secure handling of sensitive data.
- Basic threat modelling.

**Security rules:**
- Hashing is appropriate for verifying passwords, not for recovering stored credentials.
- Use established cryptographic libraries and authenticated encryption rather than inventing cryptographic algorithms.
- Never store the master password in plaintext.
- Do not use this project to store real credentials until its security limitations have been reviewed.

**Completion criteria:** The vault encrypts stored secrets, verifies access securely, and documents its threat model and limitations.

### 06. Web Scraper

**Goal:** Learn HTTP requests, HTML parsing, rate limiting, retries, and structured data extraction.

**Requirements:**
- [ ] Fetch pages from a permitted website.
- [ ] Extract selected fields from HTML.
- [ ] Convert extracted data into structured records.
- [ ] Save results to CSV or JSON.
- [ ] Handle network errors and timeouts.
- [ ] Implement retries with appropriate backoff.
- [ ] Respect rate limits and website crawling policies.
- [ ] Avoid duplicate records.
- [ ] Handle missing fields and unexpected HTML structures.

**Learning outcomes:**
- HTTP requests and response handling.
- HTML parsing and data extraction.
- Timeouts, retries, and backoff.
- Rate limiting and responsible automation.
- Data cleaning and serialization.

**Completion criteria:** The scraper extracts accurate data, handles transient failures, and does not overwhelm the target website.

### 07. Simple Recommender

**Goal:** Understand recommendation logic through similarity rules without relying on machine learning frameworks.

**Requirements:**
- [ ] Create a small dataset of movies, books, or music.
- [ ] Represent items using relevant attributes or tags.
- [ ] Calculate similarity between items.
- [ ] Rank items based on similarity.
- [ ] Recommend items based on a selected item or user preference.
- [ ] Handle missing attributes and ties.
- [ ] Explain why each recommendation was generated.
- [ ] Document limitations such as cold-start problems.

**Learning outcomes:**
- Data representation and feature selection.
- Similarity metrics and ranking.
- Basic recommendation algorithms.
- Algorithmic complexity.
- Evaluation of deterministic recommendation rules.

**Completion criteria:** The recommender produces consistent, explainable recommendations from a defined dataset, with no unexplained machine learning dependency.

### 08. Email Automation Script

**Goal:** Learn SMTP, scheduling, configuration management, retries, and secrets handling.

**Requirements:**
- [ ] Send emails using an SMTP service.
- [ ] Support configurable recipients and message content.
- [ ] Generate and send a scheduled report.
- [ ] Keep credentials outside the source code.
- [ ] Handle authentication failures and network errors.
- [ ] Log delivery attempts without exposing secrets.
- [ ] Implement retry limits.
- [ ] Prevent duplicate sends where practical.
- [ ] Document setup and configuration.

**Learning outcomes:**
- SMTP and email delivery.
- Scheduling and background execution.
- Environment variables and configuration.
- Retry strategies and failure handling.
- Logging and operational reliability.

**Completion criteria:** The script sends scheduled reports, handles delivery failures predictably, and protects its credentials.

---

## Implementation Rules

These rules apply to every project.

### 1. Understand the Problem Before Coding
- [ ] Write the requirements in my own words.
- [ ] Define the expected inputs and outputs.
- [ ] Identify invalid inputs and failure scenarios.
- [ ] Break the problem into smaller functions or modules.

### 2. Design Before Implementation
- [ ] Sketch the program flow.
- [ ] Define the data structures.
- [ ] Identify the responsibilities of each module.
- [ ] Define API endpoints and database schemas where applicable.

### 3. Implement Independently
- [ ] Write the initial implementation myself.
- [ ] Build one feature at a time.
- [ ] Consult official documentation when necessary.
- [ ] Use AI to explain concepts or help interpret errors, not to generate entire features that I have not understood.
- [ ] Avoid blindly copying code from tutorials or repositories.

### 4. Test and Debug
- [ ] Test normal use cases.
- [ ] Test invalid inputs and boundary conditions.
- [ ] Test missing files, corrupted data, and network failures where applicable.
- [ ] Read error messages and stack traces.
- [ ] Form a hypothesis before changing code.
- [ ] Write automated tests for important logic.

### 5. Document Decisions
- [ ] Explain the architecture and major functions.
- [ ] Document setup and execution instructions.
- [ ] Record important design decisions and their trade-offs.
- [ ] Explain known limitations and possible improvements.

### 6. Rebuild from Memory
- [ ] Reimplement the core functionality without copying my original code.
- [ ] Explain how the application works.
- [ ] Explain why I chose the data structures and algorithms.
- [ ] Identify what I would change for a production application.

---

## Project Quality Milestones

Each project should progress through these stages.

### V1: Functional
- [ ] Core requirements implemented.
- [ ] Main use cases work correctly.
- [ ] Basic input validation is present.

### V2: Robust
- [ ] Edge cases handled.
- [ ] Automated tests added.
- [ ] Errors handled predictably.
- [ ] Data integrity protected.

### V3: Production-Minded
- [ ] Appropriate logging implemented.
- [ ] Security considerations addressed.
- [ ] Configuration separated from source code.
- [ ] Documentation completed.
- [ ] Important design trade-offs recorded.

### V4: Deployable
- [ ] Application can be set up reproducibly.
- [ ] Environment and dependencies documented.
- [ ] Deployment completed where appropriate.
- [ ] A usable demonstration is available.

**Rule:** Complete V1 and V2 before investing time in production infrastructure. Not every project needs every milestone immediately.

---

## Suggested Technology Progression

Use one primary language consistently rather than switching languages for novelty.

**Recommended starting stack:**
- Language: JavaScript
- Runtime: Node.js
- API framework: Express, introduced when needed
- Data storage: JSON files initially, followed by PostgreSQL for database-backed projects
- Testing: Node.js built-in test runner or another suitable test framework
- Version control: Git and GitHub

Introduce each tool when the project requires it. Do not add frameworks, databases, containers, or deployment platforms merely to make a project look more sophisticated.

---

## Definition of Done

A project is complete only when:

- [ ] The requirements are implemented.
- [ ] I understand the code I wrote.
- [ ] Normal and failure scenarios have been tested.
- [ ] The README explains how to run the project.
- [ ] Important design decisions are documented.
- [ ] The repository has a clean commit history.
- [ ] I can explain the implementation without relying on AI.
- [ ] I can rebuild the core functionality from memory.

---

## Final Principle

**The objective is not to collect eight GitHub repositories. The objective is to become capable of designing, implementing, debugging, testing, and explaining software independently.**

A smaller project that I understand deeply is more valuable than a sophisticated application I cannot explain in an interview.
