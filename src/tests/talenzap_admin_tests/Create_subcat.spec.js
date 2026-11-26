const { test, expect } = require('@playwright/test');

test('edit and add subcategories', async ({ page }) => {
  await page.setContent(`
    <section>
      <button id="edit">Edit category</button>
      <input placeholder="Enter sub category name" />
      <button id="add">Add sub category</button>
      <ul id="items"></ul>
      <button id="back">Go back</button>
    </section>
    <script>
      document.querySelector('#edit').onclick = () => document.querySelector('input').value = 'Hip-Hop1';
      document.querySelector('#add').onclick = () => {
        const item = document.createElement('li');
        item.textContent = document.querySelector('input').value;
        document.querySelector('#items').append(item);
      };
    </script>
  `);

  const subcategoryInput = page.getByPlaceholder('Enter sub category name');
  await page.getByRole('button', { name: 'Edit category' }).click();
  await expect(subcategoryInput).toHaveValue('Hip-Hop1');
  await subcategoryInput.fill('Salsa');
  await page.getByRole('button', { name: 'Add sub category' }).click();
  await expect(page.locator('#items li')).toHaveText('Salsa');
  await page.getByRole('button', { name: 'Go back' }).click();
});
