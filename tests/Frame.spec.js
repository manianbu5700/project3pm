import { test } from '@playwright/test'
test('Frame Handling', async ({ page }) => {
    await page.goto('https://demo.automationtesting.in/Frames.html')
    const singleFrame = await page.frameLocator('//iframe[@id="singleframe"]')
    await singleFrame.locator('//input[@type="text"]').fill('abc')
    await page.locator('(//a[@class="analystic"])[2]').click()
    const multiFrame = await page.frameLocator('//iframe[@src="MultipleFrames.html"]')
    const frame = await multiFrame.frameLocator('//iframe[@src="SingleFrame.html"]')
    await frame.locator('//input[@type="text"]').fill('abc')

})