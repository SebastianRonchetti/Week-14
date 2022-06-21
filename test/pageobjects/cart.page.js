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
                this.removeFromCartBtn1.click();
                break;
            case 2:
                this.removeFromCartBtn2.click();
                break;
            case 3:
                this.removeFromCartBtn3.click();
                break;
            case 4:
                this.removeFromCartBtn4.click();
                break;
            case 5:
                this.removeFromCartBtn5.click();
                break;
            case 6:
                this.removeFromCartBtn6.click();
                break;
        };
    };

    async clickOnCheckout() {
        this.checkoutBtn.click();
    };
}