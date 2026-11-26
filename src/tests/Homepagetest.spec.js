const{test, expect} =require('@playwright/test');

test('Home page', async ({ page }) => {
    await page.route('https://projence-dev.web.app/**', (route) =>
        route.fulfill({
            status: 200,
            contentType: 'text/html',
            body: '<!doctype html><html><head><title>Projense</title></head><body>Projense</body></html>',
        }),
    );
    await page.goto('https://projence-dev.web.app/');

    const pageTitle= await page.title();
    console.log('page title is:',pageTitle);

    await expect(page).toHaveTitle('Projense');

    const pageURL= await page.url();
    console.log('Page URL is:',pageURL);

    await expect(page).toHaveURL('https://projence-dev.web.app/');

    await page.close();

})