class checkoutInfo {
    //getters
    
    get hamburguerBtn() {return $('#react-burger-menu-btn')};
    get logoutBtn() {return $('#react-burger-menu-btn')};
    get nameInput() {return $('#first-name')};
    get lastNameInput() {return $('#last-name')};
    get zipInput() {return $('#postal-code')};
    get contButton() {return $('#continue')};
    get cancelButton() {return $('#cancel')};
    get errorDisplay() {return $('div.error-message-container.error > h3')};

    //setters
    async inputName(name) {
        await this.nameInput.setValue(name);
    };

    async inputSurname(surname) {
        await this.lastNameInput.setValue(surname);
    };

    async inputPostal(postal) {
        await this.zipInput.setValue(postal);
    }

    async clickContinue() {
        await this.contButton.click();
    }
    
    async clickCancel() {
        await this.cancelButton.click();
    }

    async cleanFields() {
        await this.nameInput.clearValue();
        await this.lastNameInput.clearValue();
        await this.zipInput.clearValue();
    }

    //Methods

    async fillInfo(name, surname, postal) {
        await this.inputName(name);
        await this.inputSurname(surname);
        await this.inputPostal(postal);
        await this.clickContinue();
    };

    async cancelTransaction() {
        await this.clickCancel();
    };

    async accountLogout(){
        await this.hamburguerBtn.click();
        await this.logoutBtn.click()
    };
};

module.exports = new checkoutInfo();