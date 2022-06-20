class checkoutInfo {
    //getters
    get nameInput() {return $('#first-name')};
    get lastNameInput() {return $('#last-name')};
    get zipInput() {return $('#postal-code')};
    get contButton() {return $('#continue')};
    get cancelButton() {return $('#cancel')};
    get errorDisplay() {return $('div.error-message-container.error > h3')};

    //setters
    async inputName(name) {
        this.nameInput.setValue(name);
    };

    async inputSurname(surname) {
        this.lastNameInput.setValue(surname);
    };

    async inputPostal(postal) {
        this.zipInput.setValue(postal);
    }

    async clickContinue() {
        this.contButton.click();
    }
    
    async clickCancel() {
        this.cancelButton.click();
    }

    //Methods

    async fillInfo(name, surname, postal) {
        this.inputName(name);
        this.inputSurname(surname);
        this.inputPostal(postal);
        this.clickContinue();
    };

    async cancelTransaction() {
        this.clickCancel();
    }
}