const { login } = require('../pageobjects/loginPage.page');
const loginPage = require('../pageobjects/loginPage.page');
const storePage = require ('../pageobjects/store.page');
const cartPage = require('../pageobjects/cart.page');
const checkoutInfoPage = require('../pageobjects/checkoutInfo.page');
const checkoutResPage = require('../pageobjects/checkoutRes.page');
const thankOPage = require('../pageobjects/thankOrder.page');

describe ('Standard-user flow', ()=> {

    beforeAll(()=> {
        browser.url('https://www.saucedemo.com/')
    });

    it('Successful login', async ()=> {
        await loginPage.login('standard_user', 'secret_sauce');
    });

    it('Check for correct image display on login', async () => {
        const imgSource = await $('#item_4_img_link > img').getAttribute('src');
        await expect(imgSource).toBe('/static/media/sauce-backpack-1200x1500.34e7aa42.jpg');
    });

    it('Add first element to cart', async () => {
        storePage.clickOnAddToCartBtnN(1)
        const cartItems = await $('#shopping_cart_container > a > span').getText();
        await expect(cartItems).toBe('1');
    });

    it('Add fourth element to cart', async () => {
        storePage.clickOnAddToCartBtnN(4)
        const cartItems = await $('#shopping_cart_container > a > span').getText();
        await expect(cartItems).toBe('2');
    });

    it('Add third element to cart', async () => {
        storePage.clickOnAddToCartBtnN(3)
        const cartItems = await $('#shopping_cart_container > a > span').getText();
        await expect(cartItems).toBe('3');
    });

    it('Remove first element from cart', async () => {
        storePage.clickOnRemoveFromCartBtnN(1)
        const cartItems = await $('#shopping_cart_container > a > span').getText();
        await expect(cartItems).toBe('2');
    });

    it('Alter order of displayed items to Z to A', async () => {
        $("span > select").selectByIndex(1);
    });

    it('Add fifth element to cart', async () => {
        storePage.clickOnAddToCartBtnN(5)
        const cartItems = await $('#shopping_cart_container > a > span').getText();
        await expect(cartItems).toBe('3');
    });

    it('Go to cart', async () => {
        storePage.toCart();
    });

    it('Check display of logo', async () => {
        const logoSource = await $('#app_logo').getAttribute('src');
        await expect(logoSource).toBe('/static/media/logo3x.096bf4a7.svg')
    });

    it('Remove element from cart', async () => {
        cartPage.clickOnRemoveFromCartBtnN(3);
        const cartItems = await $('#shopping_cart_container > a > span').getText();
        await expect(cartItems).toBe('2');
    });

    it('Click on checkout button', async () => {
        cartPage.clickOnChecout();
        const bottomRobot = await $('footer > img').getAttribute('src');
        await expect(bottomRobot).toBe('/static/media/SwagBot_Footer_graphic.2e87acec.png');
    });

    it('Fill checkout info, skip name', async () => {
        checkoutInfoPage.fillInfo('', 'Ascencia', '6666');
        await expect(checkoutInfoPage.errorAlert).toHaveText('Error: First Name is required')
    });

    it('Fill checkout info, skip surname', async () => {
        checkoutInfoPage.fillInfo('Ascencia', '', '6666');
        await expect(checkoutInfoPage.errorAlert).toHaveText('Error: Last Name is required');
    });

    it('Fill checkout info, skip postal', async () => {
        checkoutInfoPage.fillInfo('Ascencia', 'Immortalia', '');
        await expect(checkoutInfoPage.errorAlert).toHaveText('Error: Postal Code is required');
    });

    it('Fill checkout info', async () => {
        checkoutInfoPage.fillInfo('Ascencia', 'Immortalia', '1212');
    });

    it('Check for correct delivery service', async () => {
        await expect(checkoutResPage.deliveryService).toHaveText('FREE PONY EXPRESS DELIVERY!');
    });

    it('Click on finish', async () => {
        checkoutResPage.clickOnFinish();
        await expect(thankOPage.cowbotImg).toBeDisplayed();
    });

    it('Logout', async () => {
        storePage.accountLogout();
    });
})