# QA Dojo Practice - Playwright Test Framework

This repository contains automated tests using Playwright Test Framework for various practice scenarios and applications.

## 🚀 Quick Start

### Prerequisites

- Node.js (Latest LTS version recommended)
- npm/yarn package manager

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd qa-dojo-practice-pw
```

2. Install dependencies:

```bash
npm install
```

3. Install Playwright browsers:

```bash
npx playwright install
```

## 🧪 Running Tests

### Run all tests

```bash
npx playwright test
```

### Run specific test file

```bash
npx playwright test <filename>
```

### Run tests in UI mode

```bash
npx playwright test --ui
```

### View latest HTML report

```bash
npx playwright show-report
```

## 📁 Project Structure

```
├── tests/                  # Test files directory
│   ├── auth.spec.ts       # Authentication tests
│   ├── order.spec.ts      # Order flow tests
│   └── ...
├── playwright-report/     # Test execution reports
├── test-results/         # Test artifacts
├── playwright.config.ts  # Playwright configuration
└── package.json         # Project dependencies and scripts
```

## 🔧 Configuration

The project uses Playwright's default configuration with some customizations:

- Timeout: 10 seconds
- Reporter: HTML
- Browser: Chromium (default)
- Retries: 1 (local) / 2 (CI)
- Parallel execution: Disabled

## 🎯 Test Scenarios

The test suite covers:

- API Testing
- UI Testing
- Authentication flows
- Shopping cart functionality
- Form submissions
- API integrations

## 📝 Test Writing Guidelines

1. Use descriptive test names following the pattern:

   ```typescript
   test("MQA-[ID] [feature] should [expected behavior]");
   ```

2. Organization:

   - Group related tests using `test.describe`
   - Use tags for test categorization (e.g., @smoke, @regression)

3. Naming Conventions:
   - PascalCase for class names
   - camelCase for variables and functions
   - UPPER_CASE for constants

## 🛠️ Available Applications Under Test

1. Coffee Cart App (https://coffee-cart.app/)
2. Automation Testing Store (https://teststore.automationtesting.co.uk)
3. Demo Learn WebdriverIO (https://demo.learnwebdriverio.com)

## 👥 Contributing

1. Create a new branch for your feature
2. Write tests following the project guidelines
3. Submit a pull request with a clear description of changes

## 🔍 Debugging

- Use `await page.pause()` for debugging in UI mode
- Enable traces with `trace: "on-first-retry"`
- Check HTML reports in `playwright-report` directory

## Version Information

- Playwright Version: ^1.52.0
- Project Version: 10.41

## License

ISC License

## Author

Pavlo Safonov
