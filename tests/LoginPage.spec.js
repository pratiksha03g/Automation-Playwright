const { test, expect } = require('../fixtures/test');
const { getDemoBlazeCredentials } = require('../test-data/credentials');

test('user can log in to DemoBlaze', async ({ loginPage }) => {
  test.skip(
    !process.env.DEMOBLAZE_USERNAME || !process.env.DEMOBLAZE_PASSWORD,
    'Set DEMOBLAZE_USERNAME and DEMOBLAZE_PASSWORD to run this test.',
  );
  const credentials = getDemoBlazeCredentials();

  await loginPage.gotoLoginPage();
  await loginPage.login(credentials.username, credentials.password);

  await expect(loginPage.logoutLink).toBeVisible();
});
