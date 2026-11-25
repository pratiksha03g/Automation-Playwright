import { expect, test } from '../../../src/fixtures/baseFixture';

test.describe('Login', () => {
  test('logs in with the configured account', async ({ loginPage, testData }) => {
    test.skip(
      !testData.login.username || !testData.login.password,
      'Set DEMOBLAZE_USERNAME and DEMOBLAZE_PASSWORD to run this test.',
    );

    await loginPage.open();
    await loginPage.login(testData.login.username, testData.login.password);
    await expect(loginPage.logoutLink).toBeVisible();
  });
});
