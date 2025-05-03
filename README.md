# 🧪 SwagLabs Automation Testing with Cypress

This project automates end-to-end UI testing for the [SwagLabs demo website](https://www.saucedemo.com/) using **[Cypress](https://www.cypress.io/)**, a fast and reliable front-end testing tool built for modern web applications.

Cypress provides rich debugging, real-time reloading, and powerful assertions—making it ideal for robust test automation in JavaScript environments.

---

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Running Tests](#running-tests)
- [Reports & Screenshots](#reports--screenshots)
- [Environment Variables](#environment-variables)
- [CI/CD Integration](#cicd-integration)
- [Screenshots](#screenshots)
- [Author](#author)

---

## ✨ Features

- ✅ UI test automation with Cypress
- 🧪 Mocha & Chai syntax for assertions
- 🔁 Retry-ability and time-travel debugging
- 📷 Screenshots and video recording on test failures
- 📊 HTML reporting (via Mochawesome or built-in)
- 🌐 Headless and headed test runs
- ⚙️ Easy integration with CI tools like Jenkins or GitHub Actions

---

## 🛠️ Tech Stack

| Tool         | Description                                |
|--------------|--------------------------------------------|
| Cypress      | End-to-end JavaScript testing framework    |
| Mocha        | Test framework (default in Cypress)        |
| Chai         | Assertion library                          |
| Node.js      | Runtime environment                        |
| npm          | Package manager                            |
| Mochawesome  | Custom HTML reporting (optional)           |
| GitHub/Jenkins | CI/CD support                            |

---

## 📁 Project Structure

<pre>
cypress-automation/
├── cypress/
│   ├── fixtures/            # Test data in JSON format
│   ├── integration/         # Test cases
│   │   └──Scenario.js    # Example test
│   ├── support/PageObjects/            # Commands and config overrides
│   │   ├── commands.js
│   │   └── index.js
├── cypress.config.js        # Cypress config (v10+)
├── package.json             # Project metadata and dependencies
├── README.md                # Project documentation
└── mochawesome-report/      # Test reports 
</pre>

---

## ⚙️ Installation

1. **Clone the repository**
```bash
git clone https://github.com/OmarAly07/Cypress_SwagLabs.git
cd swaglabs-cypress
