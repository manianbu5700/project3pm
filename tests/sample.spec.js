import { test, expect } from '@playwright/test'
test('Visit Flipkart', async ({ page }) => {
    await page.goto('https://www.flipkart.com/')
    await expect(page).toHaveURL('https://www.flipkart.com/')
    const title = await page.title()
    console.log(title)

})

