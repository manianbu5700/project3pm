// @ts-check
import { test, expect } from '@playwright/test'
test('Login Adactin page', async ({ page }) => {
  await page.goto('https://adactinhotelapp.com/')
  await page.locator('//input[@id="username"]').fill('keerthana')
  await page.locator('//input[@id="password"]').fill('keerthana12345')
  await page.locator('//input[@type="Submit"]').click()

})
//xpath
//Relative xpath
//id----------------->//input[@id="username"]
//name---------------->//input[@name="username"]
//class--------------->(//input[@class="login_input"])[1]
//text()------------>//button[text()="Log in"]
//attribute and value--->//input[@type="text"]