class itemDetails {
    get returnToStore() {return $('#back-to-products')};
    get itemName() {return $('div.inventory_details_name.large_size')};
    get toCartBtn() {return $('#shopping_cart_container > a')};

    async clickOnReturnToStore() {
        this.returnToStore.click();
    };

    async toCart(){
        this.toCartBtn.click();
    };
}