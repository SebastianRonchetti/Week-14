const loginPage = require('../pageobjects/loginPage.page');
const storePage = require ('../pageobjects/store.page');
const cartPage = require('../pageobjects/cart.page');
const itemDetailsPage = require('../pageobjects/itemDetails.page');
const checkoutInfoPage = require('../pageobjects/checkoutInfo.page');
const checkoutResPage = require('../pageobjects/checkoutRes.page');
const thankOPage = require('../pageobjects/thankOrder.page');

describe('Problem user flow', () => {

    beforeAll(()=> {
        browser.url('https://www.saucedemo.com/')
    });

    it('Page should be refreshed', async () =>{
        await browser.refresh();
        browser.pause(800);
    });

    it('Successful login', async ()=> {
        await loginPage.login('problem_user', 'secret_sauce');
    });

    it('Check for correct image display on login', async () => {
        const imgSource = await $('#item_4_img_link > img').getAttribute('src');
        await expect(imgSource).toBe('/static/media/sl-404.168b1cce.jpg');
    });

    it('Add first element to cart', async () => {
        storePage.clickOnAddToCartBtnN(1)
        const cartItems = await $('#shopping_cart_container > a > span').getText();
        await expect(cartItems).toBe('1');
    });

    it('Add fourth element to cart', async () => {
        storePage.clickOnAddToCartBtnN(4)
        const cartItems = await $('#shopping_cart_container > a > span').getText();
        await expect(cartItems).toBe('1');
    });

    it('Open details for fourth element', async () => {
        await storePage.clickOnOpenDetails(4);
        expect (itemDetailsPage.itemName).toHaveText('ITEM NOT FOUND');
    });

    it('Return to store', async () => {
        await itemDetailsPage.clickOnReturnToStore();
    });

    it('Page should be refreshed', async () =>{
        await browser.refresh();
        browser.pause(800);
    });

    it('Add second element to cart', async () => {
        await storePage.clickOnAddToCartBtnN(2);
        const cartItems = await $('#shopping_cart_container > a > span').getText();
        await expect(cartItems).toBe('2');
    });

    it('Click on add button for third element', async () => {
        await storePage.clickOnAddToCartBtnN(3);
        const cartItems = await $('#shopping_cart_container > a > span').getText();
        await expect(cartItems).toBe('2');
    });

    it('Click on remove button for first element', async () => {
        await storePage.clickOnRemoveFromCartBtnN(1);
        const cartItems = await $('#shopping_cart_container > a > span').getText();
        await expect(cartItems).toBe('2');
    });

    it('Go to cart', async () => {
        await storePage.toCart();
        const firstCartItem = await $('#item_4_title_link > div').getText();
        await expect(firstCartItem).toBe('Sauce Labs Backpack');
    });

    it('Remove second item from cart', async () => {
        await cartPage.clickOnRemoveFromCartBtnN(2)
        const cartItems = await $('#shopping_cart_container > a > span').getText();
        await expect(cartItems).toBe('1');
    });

    it('Return to store', async () => {
        await cartPage.clickOnReturnToStore();
    });

    it('Open details for fifth item', async () => {
        await storePage.clickOnOpenDetails(5);
        await expect(itemDetailsPage.itemName).toBe('Test.allTheThings() T-Shirt (Red)');
    });

    it('Add item to cart', async () => {
        const addBtn = await $('#add-to-cart-test\.allthethings\(\)-t-shirt-\(red\)');
        await addBtn.click();
    });

    it('Go to cart', async () => {
        await itemDetailsPage.toCart();
    });

    it('Fill first step for purchase', async () => {
        await checkoutInfoPage.fillInfo('Asterisk', 'Obelisk', '12312');
        await expect(checkoutInfoPage.errorDisplay).toHaveText('Error: Last Name is required');
    });

    it('Ragequit', async () => {
        checkoutInfoPage.accountLogout();
    });
})