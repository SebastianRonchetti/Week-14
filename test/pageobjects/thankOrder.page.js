class thankOrderPage {
    get cowbotImg() {return $('#checkout_complete_container > img')};
    get toStoreBtn() {return $('#back-to-products')};

    async clickOnBack() {
        await this.toStoreBtn.click();
    };
};

module.exports = new thankOrderPage();