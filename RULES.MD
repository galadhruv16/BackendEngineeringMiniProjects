

One rule: you write the code, you debug it, and you understand every meaningful line. Documentation, search engines, and AI for explaining errors are still fair game. Refusing all help would be a rather inefficient way to prove a point.

## 1. The order I recommend

01\. CLI Expense Tracker

Start here

Learn variables, functions, collections, file handling, input validation, and edge cases.

Deliverable: add, list, edit, delete, and summarize expenses, with data persisting between runs.

02\. Log Analyzer

Learn file parsing, timestamps, filtering, aggregation, and malformed input handling.

Deliverable: summarize errors by type, time window, and frequency.

03\. Todo App with Deadlines

Learn CRUD, HTTP APIs, database persistence, validation, and application state.

Deliverable: tasks with due dates, completion status, filters, and overdue detection.

04\. URL Shortener

Learn routing, unique ID generation, redirects, persistence, and HTTP semantics.

Deliverable: short links, expiration, duplicate handling, and click statistics.

05\. Password Manager

Learn secure storage, password hashing, encryption, file permissions, and threat modelling.

Deliverable: a local vault with a master password and protected credential storage.

06\. Web Scraper

Learn HTTP requests, HTML parsing, retries, timeouts, rate limits, and respectful crawling.

Deliverable: extract structured data from a permitted website and save it to CSV or JSON.

07\. Simple Recommender

Learn feature representation, similarity metrics, ranking, and cold-start limitations.

Deliverable: recommend movies, books, or music based on item similarity.

08\. Email Automation Script

Learn SMTP, scheduling, configuration management, retries, and secrets handling.

Deliverable: send scheduled reports with failure logging and duplicate-send protection.

## 2. The rules for not vibe-coding

For every project, follow this workflow.

1. Write the requirements yourself. Define what the application must do and what it must reject.
2. Design before implementation. Sketch the functions, data structures, API endpoints, or database schema.
3. Implement one feature at a time. Don't generate the entire application and then attempt to understand the wreckage.
4. Test your assumptions. Include invalid inputs, missing files, duplicate records, boundary conditions, and failures.
5. Debug independently. Read the stack trace, identify the failing operation, and form a hypothesis before searching for help.
6. Document your decisions. Explain why you chose a data structure, storage mechanism, or API design.
7. Rebuild from memory. After finishing, recreate the core functionality without following your original implementation.

AI can explain a concept or help interpret an error. Avoid asking it to write the feature you are supposed to be learning.

## 3. How to make these projects valuable for backend jobs

A project isn't automatically impressive because it exists on GitHub. A recruiter or interviewer will care whether you understand the implementation and its failure modes.

Use these milestones:

| Milestone             | What you should demonstrate                         |
| --------------------- | --------------------------------------------------- |
| V1: Functional        | Core requirements work correctly                    |
| V2: Robust            | Validation, errors, edge cases, and tests           |
| V3: Production-minded | Logging, security, configuration, and documentation |
| V4: Deployable        | Reproducible setup, deployment, and a usable demo   |

You don't need V4 for every project immediately. Get V1 and V2 right before adding infrastructure for the sake of collecting fashionable technologies.

For your backend goal, I'd use JavaScript with Node.js if that's the stack you want to pursue professionally. Use plain JavaScript first, then introduce Express, a relational database such as PostgreSQL, automated tests, and deployment as the projects demand them. Don't force every tool into every project.

One important security correction: a password manager cannot safely store credentials by merely hashing them. Hashing is appropriate for verifying passwords, but stored credentials must be recoverable, so they require authenticated encryption with a properly managed key. Treat that project as a security exercise, not a vault for your actual passwords until you've addressed the threat model properly.

## 4. Your first project: CLI Expense Tracker

Start small. No framework, no frontend, no database server.

Your first version should support:

- Add an expense with amount, category, date, and description.
- List expenses and filter them by category or date.
- Delete an expense by ID.
- Calculate total spending and category-wise totals.
- Persist expenses to a local JSON file.
- Handle invalid amounts, malformed files, missing records, and empty datasets.

Once it works, add unit tests and make sure corrupted data doesn't silently destroy existing records.

Your immediate next step: create a Git repository, write a README containing the requirements and acceptance criteria, and implement the first command yourself. Don't open a tutorial that hands you the finished solution.

## Related Topics You Should Explore Next

- Data structures and algorithmic problem-solving through real application requirements.
- HTTP, REST API design, and status-code semantics.
- SQL, relational modelling, and database transactions.
- Unit testing, integration testing, and test-driven development.
- Git workflows, Linux fundamentals, and application deployment.
