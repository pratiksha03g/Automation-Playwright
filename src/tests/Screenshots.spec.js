import { test } from '@playwright/test';

test('screenshot test', async ({ page }) => {
  await page.setContent(`
    <!doctype html>
    <html>
      <head><title>Demo Store</title></head>
      <body><h1>Product catalog</h1><p>Example products.</p></body>
    </html>
  `);
  await page.screenshot({path:'tests/screenshots/'+Date.now()+'HomePage.png'});

});

test('Full page screenshot', async ({ page }) => {
    await page.setContent(`
      <!doctype html>
      <html>
        <head><title>Demo Store</title></head>
        <body><h1>Product catalog</h1><p>Example products.</p></body>
      </html>
    `);
    await page.screenshot({path:'tests/screenshots/'+Date.now()+'FullPage.png',fullPage:true});

  });

  test('Element screenshot', async ({ page }) => {
    await page.setContent(`
      <main id="screenshot-target">
        <h1>Product details</h1>
        <p>Example product content.</p>
      </main>
    `);
    await page.locator('#screenshot-target').screenshot({ path: 'tests/screenshots/'+Date.now()+'Content.png' });
  
  
  
  });