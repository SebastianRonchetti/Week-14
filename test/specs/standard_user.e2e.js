const loginPage = require('../pageobjects/loginPage.page')

describe ('Standard-user flow', ()=> {

    beforeAll(()=> {
        browser.url('https://www.saucedemo.com/')
    });

    it('login step', async ()=> {
        await loginPage.userNameInput.setValue('standard_user');
        await loginPage.passwordInput.setValue('secret_sauce');
        await loginPage.loginButton.click();
    });
})