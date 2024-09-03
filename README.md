# ** Magento Test Automation Setup and Test Execution**

This repository contains Playwright-based end-to-end tests for the Magento demo store.

## **Requirements**

- **Node.js** (>=14.x)
- **npm** (comes with Node.js)
- **playwright**

## **Clone the Repository**

 **Clone the Repository**
   ```bash
   git clone https://github.com/your-repo/magento-playwright-tests.git
   cd magento-playwright-tests
   ```
 **Install Node.js and npm**

Ensure you have Node.js and npm installed. If not, download and install them from Node.js official website.
 Check if Node.js is installed
```bash
node -v
```
# Check if npm is installed
```bash
npm -v
```
 # Initialize Your Project

If you haven't already initialized a Node.js project, do so in your project directory:

# Initialize a new Node.js project
```bash
npm init -y
```
This will create a package.json file in your project directory.

Install Playwright and its required dependencies:

# Installing Playwright
```bash
npm init playwright@latest
```
**Run the install command and select the following to get started:**

Choose between TypeScript or JavaScript (default is TypeScript)
Name of your Tests folder (default is tests or e2e if you already have a tests folder in your project)
Add a GitHub Actions workflow to easily run tests on CI
Install Playwright browsers (default is true)

# Install Playwright browsers
```bash
npx playwright install
```
 Create Playwright Configuration

(Optional) You can create a Playwright configuration file if you need to customize the settings:

# Create a Playwright config file
```bash
npx playwright init
```
This will generate a playwright.config.ts file where you can configure your testing environment.

# Run all tests
```bash
npx playwright test
```
# Run a  test file
```bash
npx playwright test E2ETest.spec.ts
```
# Running with npm test file
```bash
npm test E2ETest.spec.ts
```  
