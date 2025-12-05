class Login{

    email = "input[placeholder = 'Email Address']";
    password = "input[type = 'password']";
    loginBtn = "button[type = 'submit']";
    successMsg = "div#notistack-snackbar";
    requiredError = "p.MuiFormHelperText-root.Mui-error";

    invalidCredentials = ' p.MuiTypography-root.MuiTypography-body2.css-ibcsg7';

    //  To type a value in the email input field
    setEmail(email){
        cy.get(this.email).type(email);
    }
    // Type a value into the password input field
    setPassword(password){
        cy.get(this.password).type(password);
    }
    // Click the login button
    clickLogin(){
        cy.get(this.loginBtn).click();
    }
    // Clear the email input field
    clearEmail() {
    cy.get(this.email).clear();
    }

    // Verify that the email field is visible on the page
    verifyEmailVisibility(){
        cy.get(this.email).should('be.visible');
    }

    // Verify that the password field is visible

    verifyPasswordVisibility(email){
        cy.get(this.email).type(email);// Type email to trigger the password field
        this.clickLogin();// Click login to check password visibility
        cy.get(this.password).should('be.visible');
    }

    // Verify successful login by checking URL and check toast message
    verifyLogin(){
        cy.url().should("include", "/dashboard");
        cy.get(this.successMsg).should('be.visible').and('contain.text', 'Sign in successful');
    }

    // Verify that login button is disabled (used for empty fields)
    verifyLoginButtonDisabled() {
    cy.get(this.loginBtn).should('be.disabled');
    }

    // Verify "Required" error for password field when empty
    verifyPasswordRequiredFieldError(emailValue){
        this.setEmail(emailValue);
        this.clickLogin();
        cy.get(this.requiredError).should("be.visible").and("contain.text", "Required");
    }

    // Verify error message for invalid email format
    verifyInvalidEmailError() {
        cy.get(this.requiredError).contains("Invalid Email").should("be.visible");
    }

    // Verify "Failed to get student" error (used for unregistered email)
    verifyFailedToGetStudentError() {
        
        cy.contains('p', 'Failed to get student').should('be.visible');

    }

    // Verify "Invalid Credentials" error when password is invalid
    verifyInvalidCredentials(){
        cy.contains('p', 'Invalid Credentials', { timeout: 6000 }).should('be.visible');
    }

    // Verify "User not found" error message
    verifyUserNotFound(){
        cy.contains('p', 'User not found', { timeout: 6000 }).should('be.visible');
    }


}

export default Login;