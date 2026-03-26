import { test } from '@playwright/test'
test('Dropdown', async ({ page }) => {
    await page.goto('https://letcode.in/dropdowns')
    const fruite = await page.locator('//select[@id="fruits"]')
    await fruite.selectOption({ label: "Orange" })
    const singleDropdown = await fruite.locator('option:checked').textContent()
    console.log("Single Dropdown :", singleDropdown)

    const superHeros = await page.locator('//select[@id="superheros"]')
    await superHeros.selectOption([{ label: "Aquaman" }, { value: "ca" }, { index: 3 }])
    const multiDropdown = await superHeros.locator('option:checked').allTextContents()
    console.log("Multiple Dropdown :", multiDropdown)

})
//Dropdown Methods
//label(Visible text)------------->{label:"Apple"}
//value----------------------->{value:"1"}
//index--------------------------->{index:3}