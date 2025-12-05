# Project Overview

This repository contains automation tests for the Sign-In flow of WiseAdmit ApplyNow using Cypress and Page Object Model (POM).

The tests include:

Positive scenarios: Valid credentials

Negative scenarios: Invalid email, invalid password, empty fields, unregistered email

Field visibility and validation checks

# Prerequisites

Before running the tests, ensure you have:

Node.js (>=14) installed

npm or yarn installed

Access to the WiseAdmit ApplyNow
 application

Project Structure
wiseadmit-signin-tests/
│
├── cypress/
│   ├── fixtures/          # Test data (e.g., credentials.json)
│   ├── integration/       # Test files
│   │   └── LoginTests.cy.js
│   ├── PageObjects/       # POM files
│   │   └── LoginPage.js
│   └── support/           # Cypress support files
│
├── cypress.config.js      # Cypress configuration
├── package.json
└── README.md

# Running the Tests
1. Open Cypress Test Runner (GUI) => npx cypress open
   Steps to run a specific test:

->When Cypress Test Runner opens, select E2E Testing.

->Choose your preferred browser (e.g., Chrome).

->Navigate to the test file: cypress/integration/LoginTests.cy.js and click it to run.

->Cypress will launch the browser and execute the tests interactively, showing each step and test result in real time.

2. Run All Tests in Headless Mode => npx cypress run

# Excel link for WiseAdmit Login Test Case : [Open the spreadsheet in browser](https://docs.google.com/spreadsheets/d/1ByMFWRk3qHiujetuYpj1ZBQDjiAa_am-CK-f0AnRFtE/edit?usp=sharing)


# 1. Five Things That Could Break the Sign-In Process

Change in input field selectors – If the HTML structure of email or password fields changes, locators in automation scripts may fail.

Backend API changes – Modifications to authentication APIs could break login functionality or return different error messages.

Network/Server issues – Downtime or slow response could prevent users from signing in.

Password policy updates – Stricter validation rules may cause previously valid passwords to fail.

# 2. Five Improvements for the Website

->Provide unique IDs for each element – Makes automation more reliable and easier to maintain.

->User-friendly error messages – Make validation and error messages clearer and consistent.

->Placeholder should be provided in both Email and password field for consistency.

->Remember Me / Auto-login option – Improve user convenience by allowing users to stay logged in.

->Social login options (Google/Facebook) – Allow users to sign in using social accounts for faster login and better user experience.
