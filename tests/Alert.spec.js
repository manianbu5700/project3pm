import { test } from '@playwright/test'
test('Alert', async ({ page }) => {
    await page.goto('https://demo.automationtesting.in/Alerts.html')
    await page.on('dialog', async (dialog) => {
        await console.log('Simple Alert :', dialog.message())
        await dialog.accept()
    })
    await page.locator('//button[@class="btn btn-danger"]').click()

    await page.locator('(//a[@class="analystic"])[2]').click()
    // await page.once('dialog', async (dialog) => {
    //     await console.log('Confirm Alert :', dialog.message())
    //     await dialog.dismiss()

    // })
    await page.locator('//button[@class="btn btn-primary"]').click()

    await page.locator('(//a[@class="analystic"])[3]').click()
    // await page.once('dialog', async (dialog) => {
    //     await console.log('Promp Alert :', dialog.message())
    //     await dialog.accept('abc')
    // })
    await page.locator('//button[@class="btn btn-info"]').click()

})