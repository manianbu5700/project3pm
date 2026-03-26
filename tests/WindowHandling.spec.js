import { test } from '@playwright/test'
test('windowHandling', async ({ browser }) => {
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto('https://www.amazon.in/')
    await page.locator('//input[@id="twotabsearchtextbox"]').fill('iphone 17 pro')
    // await page.keyboard.press('Enter')
    await page.locator('//input[@type="submit"]').click()
    // await page.pause()
    const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        await page.click('//h2[text()="Results"]//ancestor::div[@data-cel-widget="search_result_1"]//following-sibling::div[@data-asin="B0FQG1VB5Y"]//descendant::h2[contains(@aria-label,"iPhone 17 Pro 1 TB: 15.93 cm (6.3″)")]')

    ])
    //const arr=[12,13,14,15]
    //const [a]=arr
    await newPage.waitForLoadState()
    const title = await newPage.title()
    console.log(title)



})

//Dynamic xpath

//ancestor
//parent
//child
//following-sibling
//preceding-sibling
//descendant