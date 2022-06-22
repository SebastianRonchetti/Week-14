const loginPage = require('../pageobjects/loginPage.page');
const storePage = require ('../pageobjects/store.page');
const cartPage = require('../pageobjects/cart.page');
const itemDetailsPage = require('../pageobjects/itemDetails.page');
const checkoutInfoPage = require('../pageobjects/checkoutInfo.page');
const checkoutResPage = require('../pageobjects/checkoutRes.page');
const thankOPage = require('../pageobjects/thankOrder.page');

describe('Flow for user with glitch performance', () => {
    beforeAll(()=> {
        browser.url('https://www.saucedemo.com/')
    });

    it('Page should be refreshed', async () =>{
        await browser.refresh();
        browser.pause(800);
    });

    it('Successful login', async ()=> {
        await loginPage.login('standard_user', 'secret_sauce');        
    });

    it('Check for correct image display on login', async () => {
        await browser.pause(3000);
        await $('#item_4_img_link > img').waitForExist({timeout: 6000});
        const imgSource = await $('#item_4_img_link > img').getAttribute('src');
        await expect(imgSource).toBe('/static/media/sauce-backpack-1200x1500.34e7aa42.jpg');
    });

    it('Add first element to cart', async () => {
        storePage.clickOnAddToCartBtnN(1);
        await browser.pause(3000);
        const cartItems = await $('#shopping_cart_container > a > span').getText();
        await expect(cartItems).toBe('1');
    });

    it('Add fourth element to cart', async () => {
        storePage.clickOnAddToCartBtnN(4);
        await browser.pause(3000);
        const cartItems = await $('#shopping_cart_container > a > span').getText();
        await expect(cartItems).toBe('2');
    });

    it('Add third element to cart', async () => {
        storePage.clickOnAddToCartBtnN(3);
        await browser.pause(3000);
        const cartItems = await $('#shopping_cart_container > a > span').getText();
        await expect(cartItems).toBe('3');
    });

    it('Remove first element from cart', async () => {
        storePage.clickOnRemoveFromCartBtnN(1);
        await browser.pause(3000)
        const cartItems = await $('#shopping_cart_container > a > span').getText();
        await expect(cartItems).toBe('2');
    });

    it('Alter order of displayed items to Z to A', async () => {
        $("span > select").selectByIndex(1);
    });

    it('Add fifth element to cart', async () => {
        await storePage.clickOnAddToCartBtnN(5);
        await browser.pause(3000);
        const cartItems = await $('#shopping_cart_container > a > span').getText();
        await expect(cartItems).toBe('3');
    });

    it('Go to cart', async () => {
        storePage.toCart();
    });

    it('Remove element from cart', async () => {
        cartPage.clickOnRemoveFromCartBtnN(3);
        await browser.pause(3000);
        const cartItems = await $('#shopping_cart_container > a > span').getText();
        await expect(cartItems).toBe('2');
    });

    it('Click on checkout button', async () => {
        await cartPage.clickOnCheckout();
        await browser.pause(3000);
        const bottomRobot = await $('footer > img').getAttribute('src');
        await expect(bottomRobot).toBe('/static/media/SwagBot_Footer_graphic.2e87acec.png');
    });

    it('Fill checkout info, skip name', async () => {
        await checkoutInfoPage.fillInfo('', 'Ascencia', '6666');
        await browser.pause(3000);
        await expect(checkoutInfoPage.errorDisplay).toHaveText('Error: First Name is required')
    });

    it('Page should be refreshed', async () =>{
        await browser.refresh();
        browser.pause(800);
    });

    it('Fill checkout info, skip surname', async () => {
        await checkoutInfoPage.fillInfo('Ascencia', '', '6666');
        await browser.pause(3000);
        await expect(checkoutInfoPage.errorDisplay).toHaveText('Error: Last Name is required');
    });

    it('Page should be refreshed', async () =>{
        await browser.refresh();
        browser.pause(800);
    });

    it('Fill checkout info, skip postal', async () => {
        await checkoutInfoPage.fillInfo('Ascencia', 'Immortalia', '');
        await browser.pause(3000);
        await expect(checkoutInfoPage.errorDisplay).toHaveText('Error: Postal Code is required');
    });

    it('Fill checkout info', async () => {
        checkoutInfoPage.fillInfo('Ascencia', 'Immortalia', '1212');
    });

    it('Check for correct delivery service', async () => {
        await browser.pause(3000);
        await expect(checkoutResPage.deliveryService).toHaveText('FREE PONY EXPRESS DELIVERY!');
    });

    it('Click on finish', async () => {
        await browser.pause(3000);
        checkoutResPage.clickOnFinish();
        await browser.pause(3000);
        await expect(thankOPage.cowbotImg).toBeDisplayed();
    });

    it('Return to store', async () => {
        thankOPage.clickOnBack();
        await browser.pause(3000);
        await $('#shopping_cart_container > a > span').waitForExist({timeout : 10000});
        const cartItems = await $('#shopping_cart_container > a > span').isDisplayed();
        await expect(cartItems).toBeFalsy();
    });

    it('Open details for second element', async () => {
        storePage.clickOnOpenDetails(2);
        await browser.pause(3000);
        await expect(itemDetailsPage.itemName).toHaveText('Sauce Labs Bike Light');
        await browser.pause(3000);
    });

    it('Add item to cart', async () => {
        const addBtn = await $('#add-to-cart-sauce-labs-bike-light');
        await addBtn.click();
        await browser.pause(10000);
        const cartItems = await $('#shopping_cart_container > a > span').getText();
        await expect(cartItems).toBe('1');
    });

    it('Click on cart', async () => {
        await itemDetailsPage.toCart();
        await browser.pause(3000);
    });

    it('Page should be refreshed', async () =>{
        await browser.refresh();
        browser.pause(800);
    });

    it('Go to checkout and fill info', async () => {
        await cartPage.clickOnCheckout();
        await browser.pause(3000);
    });

    it('fill info', async () => {
        await checkoutInfoPage.fillInfo('Asterix', 'Obelisk', '1234');
        await expect(checkoutResPage.deliveryService).toHaveText('FREE PONY EXPRESS DELIVERY!');
        await browser.pause(3000);
    });

    it('Return to store', async () => {
        thankOPage.clickOnBack();
        await browser.pause(3000);
        await $('#shopping_cart_container > a > span').waitForExist({timeout : 8000});
        await $('#shopping_cart_container > a > span').toHaveTextContaining('');
        //const cartItems =
        //await expect(cartItems).toBeFalsy();
    });

    it('Logout', async () => {
        await browser.pause(3000);
        storePage.accountLogout();
    });
})