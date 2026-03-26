export class LoginPage {
    constructor(page) {
        this.page = page;
        this.username = page.locator('//input[@id="username"]')
        this.password = page.locator('//input[@name="password"]')
        this.button = page.locator('//input[@name="login"]')


    }
    async visitUrl() {
        await this.page.goto('https://adactinhotelapp.com/')
    }
    async enterUsername(uname) {
        await this.username.fill(uname)
    }
    async enterPassword(pass) {
        await this.password.fill(pass)
    }
    async clickButton() {
        await this.button.click()
    }
}