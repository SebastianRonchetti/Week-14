class checkoutResPage {
    get finishBtn() {return $('#finish')};
    get cancelBtn() {return $('#cancel')};
    get deliveryService() {return $('#checkout_summary_container > div > div.summary_info > div:nth-child(4)')};

    async clickOnFinish() {
        await this.finishBtn.click();
    };

    async clickOnCancel() {
        await this.cancelBtn.click();
    };
};

module.exports = new checkoutResPage();