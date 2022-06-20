class loginPage {
    //getters
    get userNameInput() {return $(`#user-name`)};
    get passwordInput() {return $(`#password`)};
    get loginButton() {return $(`#login-button`)};
    get errorDisplay() {return $(`.error-message-container.error`)};
    get loginLogo() {return $(`#root > div > div.login_logo`)};
    get botDisplay() {return $(`#root > div > div.login_wrapper > div.login_wrapper-inner > div.bot_column`)};

    //setters
    async setUserName (userName) 
    {
        await this.userNameInput.setValue(userName);
    }
    async setPassword (Password) 
    {
        await this.passwordInput.setValue(Password);
    }
    //methods
    async login (userName, Password)
    {
        this.setUserName(userName);
        browser.pause(6000);
        this.setPassword(Password);
        browser.pause(6000);
        this.loginButton.click();
        browser.pause(6000);
    }

    async cleanInputs(){
        this.setUserName('');
        this.setPassword('');
    }
}

module.exports = new loginPage();