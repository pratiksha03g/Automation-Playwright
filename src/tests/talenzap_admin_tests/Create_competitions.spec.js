const { test, expect } = require('@playwright/test');

test('create a competition draft', async ({ page }) => {
  await page.setContent(`
    <button id="add">Add Competition</button>
    <form hidden>
      <input placeholder="Enter a title" />
      <textarea placeholder="Enter a description"></textarea>
      <input placeholder="Minimum participants" type="number" />
      <input placeholder="Maximum participants" type="number" />
      <button type="submit">Save as draft</button>
    </form>
    <p id="status"></p>
    <script>
      document.querySelector('#add').onclick = () => document.querySelector('form').hidden = false;
      document.querySelector('form').onsubmit = event => {
        event.preventDefault();
        document.querySelector('#status').textContent = 'Draft saved';
      };
    </script>
  `);

  await page.getByRole('button', { name: 'Add Competition' }).click();
  await page.getByPlaceholder('Enter a title').fill('Beat Challenge');
  await page.getByPlaceholder('Enter a description').fill('Show off your moves.');
  await page.getByPlaceholder('Minimum participants').fill('1');
  await page.getByPlaceholder('Maximum participants').fill('100');
  await page.getByRole('button', { name: 'Save as draft' }).click();
  await expect(page.getByText('Draft saved')).toBeVisible();
});
