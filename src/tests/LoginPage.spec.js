const { test, expect } = require('../fixtures/test');
const {
  getDemoBlazeCredentials,
  hasDemoBlazeCredentials,
} = require('../testdata/credentials');

test('user can log in to DemoBlaze', async ({ loginPage }) => {
  test.skip(
    !hasDemoBlazeCredentials(),
    'Set DemoBlaze credentials in .env to run this test.',
  );
  const credentials = getDemoBlazeCredentials();

  await loginPage.gotoLoginPage();
  await loginPage.login(credentials.username, credentials.password);

  await expect(loginPage.logoutLink).toBeVisible();
});
