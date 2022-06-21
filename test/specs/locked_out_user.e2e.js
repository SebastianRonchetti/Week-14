const loginPage = require('../pageobjects/loginPage.page');

describe('Locked out user flow', () => {
    beforeAll(()=> {
        browser.url('https://www.saucedemo.com/')
    });

    it('Page should be refreshed', async () =>{
        await browser.refresh();
        browser.pause(800);
    });

    it('Successful login', async ()=> {
        await loginPage.login('locked_out_user', 'secret_sauce');
        await expect(loginPage.errorDisplay).toHaveText('Epic sadface: Sorry, this user has been locked out.');
    });
})