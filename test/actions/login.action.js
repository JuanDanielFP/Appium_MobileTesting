import LoginPage from '../pageobjects/login.page.js';

export class LoginAction {
    async enterUsername(username) {
        const fields = await $$(LoginPage.usernameInput);
        if (fields.length >= 1) {
            await fields[0].setValue(username);
        }
    }
    async enterPassword(password) {
        const fields = await $$(LoginPage.passwordInput);
        if (fields.length >= 2) {
            await fields[1].setValue(password);
        }
    }
    async tapLogin() {
        const btn = await $(LoginPage.loginButton);
        await btn.click();
    }

    async login(username, password) {
        await this.enterUsername(username);
        await this.enterPassword(password);
        await this.tapLogin();
    }
    async waitForProducts(){
        const products = await $(LoginPage.productsTitle)
        await products.waitForExist({timeout : 10000})
        return products.isDisplayed()
    }
    async isOnLoginPage(){
        const btn = await $(LoginPage.loginButton)
        await btn.waitForExist({ timeout: 10000 });
        return btn.isExisting()
    }
}

export default new LoginAction()