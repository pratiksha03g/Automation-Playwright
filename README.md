# Playwright Automation

A comprehensive test automation framework built with Playwright for web application testing.

## Overview

This project contains automated test scripts for various testing scenarios including API tests, UI interactions, assertions, and more. It's designed to provide robust and reliable end-to-end testing capabilities across multiple browsers.

## Project Structure

```
tests/
├── APITests.spec.js           # API endpoint testing
├── Assertions.spec.js          # Assertion examples
├── Checkboxes.spec.js          # Checkbox interaction tests
├── CheckboxesNew.spec.js       # Advanced checkbox tests
├── example.spec.js             # Example test cases
├── GroupinTest.spec.js         # Grouping functionality tests
├── Homepagetest.spec.js        # Homepage tests
├── Hooks1.spec.js              # Test hooks examples
├── InputBox.spec.js            # Input field tests
├── LocatingMultipleElements.spec.js  # Element location tests
├── Locators.spec.js            # Locator strategies
├── Locators_builtin.spec.js    # Built-in locators
├── MouseHover.spec.js          # Mouse hover actions
├── mytest.spec.js              # Custom tests
├── Pomtest.spec.js             # Page Object Model tests
├── Projense_sub.spec.js        # Project-specific tests
├── ProjLogin.spec.js           # Login functionality tests
├── screenshot2test.spec.js     # Screenshot capture tests
├── Screenshots.spec.js         # Screenshot handling
├── SoftAssertions.spec.js      # Soft assertion examples
├── tracing.spec.js             # Trace recording tests
├── talenzap_admin_tests/       # Admin interface tests
│   ├── Login.spec.js
│   ├── Competitions_explore.spec.js
│   ├── Create_competitions.spec.js
│   ├── Create_subcat.spec.js
│   ├── Mobile_login.spec.js
│   └── cat.spec.js
└── tests-examples/
    └── demo-todo-app.spec.js   # Demo application tests
```

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

## Installation

1. Clone the repository:
```bash
git clone https://github.com/pratiksha03g/Playwright-Automation.git
cd Playwright-Automation
```

2. Install dependencies:
```bash
npm install
```

## Configuration

The project uses a `playwright.config.js` file for configuration. Key settings include:
- Browser selection (Chromium, Firefox, WebKit)
- Test timeout settings
- Retry logic
- Reporter configuration
- Trace and screenshot settings

## Running Tests

### Run all tests:
```bash
npm test
```

### Run specific test file:
```bash
npx playwright test tests/APITests.spec.js
```

### Run tests in UI mode:
```bash
npx playwright test --ui
```

### Run tests with headed browsers:
```bash
npx playwright test --headed
```

### Run tests with trace:
```bash
npx playwright test --trace on
```

## Viewing Reports

After running tests, view the HTML report:
```bash
npx playwright show-report
```

The report includes:
- Test results and status
- Screenshot artifacts
- Trace recordings
- Detailed error information

## Test Categories

### API Testing
- `APITests.spec.js` - Comprehensive API endpoint testing

### UI Interaction Tests
- `Checkboxes.spec.js`, `CheckboxesNew.spec.js` - Checkbox interactions
- `InputBox.spec.js` - Input field handling
- `MouseHover.spec.js` - Mouse hover functionality
- `Locators.spec.js` - Element location and selection

### Assertion Tests
- `Assertions.spec.js` - Various assertion strategies
- `SoftAssertions.spec.js` - Soft assertion examples

### Admin Interface Tests
- Located in `tests/talenzap_admin_tests/`
- Includes login, competition management, and category creation

### Advanced Features
- `Hooks1.spec.js` - Setup and teardown hooks
- `tracing.spec.js` - Trace recording and playback
- `Screenshots.spec.js` - Screenshot capture strategies
- `Pomtest.spec.js` - Page Object Model pattern examples

## Page Object Model

The project implements the Page Object Model pattern for maintainable and scalable tests. See `Pomtest.spec.js` for examples of this pattern in action.

## Features

- ✅ Multi-browser testing (Chrome, Firefox, Safari)
- ✅ API testing capabilities
- ✅ Screenshot and trace recording
- ✅ Soft and hard assertions
- ✅ Test hooks and fixtures
- ✅ Mobile testing support
- ✅ Comprehensive HTML reports

## Best Practices

1. **Use Page Object Model** - Encapsulate page elements and actions
2. **Organize tests logically** - Group related tests in separate files
3. **Use descriptive test names** - Make test purpose clear
4. **Implement proper waits** - Use Playwright's built-in wait strategies
5. **Handle errors gracefully** - Use try-catch and soft assertions where appropriate
6. **Clean up after tests** - Use hooks for setup and teardown

## Troubleshooting

### Authentication Issues
If you encounter authentication errors when pushing to GitHub:
- Ensure you have valid GitHub credentials
- Use SSH keys or Personal Access Tokens for authentication
- Check that your remote URL is correctly configured

### Test Failures
- Check the HTML report for detailed error information
- Review screenshots and traces in the `playwright-report/` directory
- Verify that the application under test is accessible
- Check test-specific configurations in the spec files

## Contributing

1. Create a new branch for your changes
2. Write or update tests as needed
3. Run the full test suite to ensure no regressions
4. Commit your changes with descriptive messages
5. Push to the repository and create a pull request

## License

This project is available under the MIT License.

## Support

For issues, questions, or contributions, please reach out or create an issue in the repository.

---

**Last Updated:** 2026-08-18
