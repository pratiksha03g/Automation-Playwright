const { test, expect } = require('@playwright/test');

test('search and manage a category', async ({ page }) => {
  await page.setContent(`
    <input placeholder="Search" />
    <a href="#category">Dance123 Enabled Clarity is</a>
    <section id="category" hidden>
      <button>Add a category</button>
      <input placeholder="Enter category name" />
      <textarea placeholder="Enter a description"></textarea>
      <button>Create category</button>
      <p id="status"></p>
    </section>
    <script>
      document.querySelector('a').onclick = event => {
        event.preventDefault();
        document.querySelector('section').hidden = false;
      };
      document.querySelector('section button:last-of-type').onclick = () => {
        document.querySelector('#status').textContent = 'Category created';
      };
    </script>
  `);

  await page.getByPlaceholder('Search').fill('dance');
  await page.getByRole('link', { name: 'Dance123 Enabled Clarity is' }).click();
  await page.getByRole('button', { name: 'Add a category' }).click();
  await page.getByPlaceholder('Enter category name').fill('Dance style');
  await page.getByPlaceholder('Enter a description').fill('Dance competition');
  await page.getByRole('button', { name: 'Create category' }).click();
  await expect(page.getByText('Category created')).toBeVisible();
});
