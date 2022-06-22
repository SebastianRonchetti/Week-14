class cartPage {
    get returnToShopBtn() {return $('#continue-shopping')};
    get checkoutBtn() {return $('#checkout')}

    get removeFromCartBtn1() {return $('#remove-sauce-labs-backpack')};
    get removeFromCartBtn2() {return $('#remove-sauce-labs-bike-light')};
    get removeFromCartBtn3() {return $('#remove-sauce-labs-bolt-t-shirt')};
    get removeFromCartBtn4() {return $('#remove-sauce-labs-fleece-jacket')};
    get removeFromCartBtn5() {return $('#remove-sauce-labs-onesie')};
    get removeFromCartBtn6() {return $('#remove-test\.allthethings\(\)-t-shirt-\(red\)')};

    async clickOnRemoveFromCartBtnN (number) {
        switch(number){
            case 1:
                await this.removeFromCartBtn1.click();
                break;
            case 2:
                await this.removeFromCartBtn2.click();
                break;
            case 3:
                await this.removeFromCartBtn3.click();
                break;
            case 4:
                await this.removeFromCartBtn4.click();
                break;
            case 5:
                await this.removeFromCartBtn5.click();
                break;
            case 6:
                await this.removeFromCartBtn6.click();
                break;
        };
    };

    async clickOnCheckout() {
        await this.checkoutBtn.click();
    };
};

module.exports = new cartPage();