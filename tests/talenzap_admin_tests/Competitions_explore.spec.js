const { test, expect } = require('@playwright/test');

test('explore and filter competitions', async ({ page }) => {
  await page.setContent(`
    <nav><a href="#competitions">Competitions</a></nav>
    <main id="competitions" hidden>
      <button role="tab">All</button>
      <button role="tab">Draft</button>
      <button role="tab">Active</button>
      <button role="tab">Upcoming</button>
      <button role="tab">Ended</button>
      <input placeholder="Search for Competition Name" />
      <button id="filter">Filter</button>
      <label>Dance styles <input type="checkbox" /></label>
      <button id="clear">Clear filters</button>
    </main>
    <script>
      document.querySelector('a').addEventListener('click', event => {
        event.preventDefault();
        document.querySelector('main').hidden = false;
      });
    </script>
  `);

  await page.getByRole('link', { name: 'Competitions' }).click();
  for (const tabName of ['Draft', 'Active', 'Upcoming', 'Ended', 'All']) {
    await page.getByRole('tab', { name: tabName }).click();
  }
  await page.getByPlaceholder('Search for Competition Name').fill('Music');
  await page.locator('#filter').click();
  await page.getByText('Dance styles').click();
  await page.getByRole('button', { name: 'Clear filters' }).click();
  await expect(page.getByPlaceholder('Search for Competition Name')).toHaveValue('Music');
});
