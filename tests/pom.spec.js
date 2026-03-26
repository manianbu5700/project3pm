import { test } from '@playwright/test'
import { LoginPage } from '../page/LoginPage'

test('Page object Model', async ({ page }) => {
    const loginpage = new LoginPage(page)
    await loginpage.visitUrl()
    await loginpage.enterUsername('Manianbu5700')
    await loginpage.enterPassword('Mani_12345@')
    await loginpage.clickButton()


})