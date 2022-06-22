class itemDetails {
    get returnToStore() {return $('#back-to-products')};
    get itemName() {return $('div.inventory_details_name.large_size')};
    get toCartBtn() {return $('#shopping_cart_container > a')};

    async clickOnReturnToStore() {
        await this.returnToStore.click();
    };

    async toCart(){
        await this.toCartBtn.click();
    };
};

module.exports = new itemDetails()