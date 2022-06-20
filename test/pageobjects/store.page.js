class storePage {
    get hamburguerBtn() {return $('#react-burger-menu-btn')};
    get logoutBtn() {return $('#react-burger-menu-btn')};
    get toCartBtn() {return $('#shopping_cart_container > a')};

    get addToCartBtn1() {return $('#add-to-cart-sauce-labs-backpack')};
    get addToCartBtn2() {return $('#add-to-cart-sauce-labs-bike-light')};
    get addToCartBtn3() {return $('#add-to-cart-sauce-labs-bolt-t-shirt')};
    get addToCartBtn4() {return $('#add-to-cart-sauce-labs-fleece-jacket')};
    get addToCartBtn5() {return $('#add-to-cart-sauce-labs-onesie')};
    get addToCartBtn6() {return $('#add-to-cart-test\.allthethings\(\)-t-shirt-\(red\)')};

    get removeFromCartBtn1() {return $('#remove-sauce-labs-backpack')};
    get removeFromCartBtn2() {return $('#remove-sauce-labs-bike-light')};
    get removeFromCartBtn3() {return $('#remove-sauce-labs-bolt-t-shirt')};
    get removeFromCartBtn4() {return $('#remove-sauce-labs-fleece-jacket')};
    get removeFromCartBtn5() {return $('#remove-sauce-labs-onesie')};
    get removeFromCartBtn6() {return $('#remove-test\.allthethings\(\)-t-shirt-\(red\)')};

    async clickOnAddToCartBtnN (number) {
        switch(number){
            case 1:
                this.addToCartBtn1.click();
                break;
            case 2:
                this.addToCartBtn2.click();
                break;
            case 3:
                this.addToCartBtn3.click();
                break;
            case 4:
                this.addToCartBtn4.click();
                break;
            case 5:
                this.addToCartBtn5.click();
                break;
            case 6:
                this.addToCartBtn6.click();
                break;
        };
    };

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

    async accountLogout(){
        this.hamburguerBtn.click();
        browser.pause(3000);
        this.logoutBtn.click()
    };

    async toCart(){
        this.toCartBtn.click();
    };
};