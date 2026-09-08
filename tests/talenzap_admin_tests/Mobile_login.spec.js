const { test, expect } = require('@playwright/test');

test('login with phone number', async ({ page }) => {
  await page.setContent(`
    <button id="phone-login">Login with Phone call</button>
    <input id="phone" placeholder="Enter your phone number" hidden />
    <input id="code" aria-label="Verification code" hidden />
    <button id="submit" hidden>Submit</button>
    <p id="status"></p>
    <script>
      document.querySelector('#phone-login').onclick = () => {
        document.querySelector('#phone').hidden = false;
      };
      document.querySelector('#phone').onchange = () => {
        document.querySelector('#code').hidden = false;
        document.querySelector('#submit').hidden = false;
      };
      document.querySelector('#submit').onclick = () => {
        document.querySelector('#status').textContent = 'Logged in';
      };
    </script>
  `);

  await page.getByRole('button', { name: 'Login with Phone call' }).click();
  const phoneInput = page.getByPlaceholder('Enter your phone number');
  await phoneInput.fill('1234567890');
  await phoneInput.dispatchEvent('change');
  await page.getByRole('textbox', { name: 'Verification code' }).fill('1234');
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.getByText('Logged in')).toBeVisible();
});
