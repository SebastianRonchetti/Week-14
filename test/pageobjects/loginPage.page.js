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
        await this.setUserName(userName);
        await this.setPassword(Password);
        await this.loginButton.doubleClick();
    }

    async cleanInputs(){
        await this.userNameInput.clearValue();
        await this.passwordInput.clearValue();
    }
}

module.exports = new loginPage();