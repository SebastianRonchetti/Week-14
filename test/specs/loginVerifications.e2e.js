const { login } = require('../pageobjects/loginPage.page');
const loginPage = require('../pageobjects/loginPage.page')

describe('Series of invalid inputs for login and correct display of elements', () => {
    beforeAll(()=> {
        browser.url('https://www.saucedemo.com/')
    });

    it('Failed Login, bad credentials', async () => {
        await loginPage.login('uasuduad', 'dasdad');
        await expect(loginPage.errorDisplay).toHaveText('Epic sadface: Username and password do not match any user in this service');
        await loginPage.cleanInputs();
    });

    it('Failed login, wrong password', async () => {
        await loginPage.login('standard_user', 'dasdasd');
        await expect(loginPage.errorDisplay).toHaveText('Epic sadface: Username and password do not match any user in this service')
        await loginPage.cleanInputs();
    });

    it('Failed login, empty username', async () => {
        await loginPage.login('', 'secret_sauce');
        await expect(loginPage.errorDisplay).toHaveText('Epic sadface: Username is required');
        await loginPage.cleanInputs();
    });

    it('Failed login, empty password', async () => {
        await loginPage.login('standard_user', null);
        await expect(loginPage.errorDisplay).toHaveText('Epic sadface: Password is required');
        await loginPage.cleanInputs();
    });

    it('Failed login, both fields empty', async () => {
        await loginPage.login(null, null);
        await expect(loginPage.errorDisplay).toHaveText('Epic sadface: Username is required');
        await loginPage.cleanInputs();
    })

    it('Correct display of login logo', async () => {
        await expect(loginPage.loginLogo).toBeDisplayed();
    });

    it('Correct display of bot image', async () => {
        await expect(loginPage.botDisplay).toBeDisplayed();
    });
});