// Import the Login Page Object Model
import Login from "../PageObjects/LoginPage.js";

describe("Login Test", () => {
    // Create a new instance of the Login page object
    const ln = new Login();

    // Runs before each test case
    beforeEach(() => {
        cy.visit("https://www.wiseadmit.io/applynow"); // Visit the ApplyNow login page
    })

    // Test 1: Verify the URL of the login page
    it("has URL", () => {

        cy.url().should('eq', 'https://www.wiseadmit.io/applynow');

    })

    // Test 2: Verify the page title
    it("Title exist or not", () => {

        cy.title().should('eq',"ApplyNow | WiseAdmit" );

    })

    // Test 3: Check visibility of email and password fields
    it("Check email and password password field visibility", () => {

        cy.fixture('credentials').then((data) => {
            ln.verifyEmailVisibility();
            ln.verifyPasswordVisibility(data.email);
        });

    })

    // Test 4: Login with valid credentials
    it('Validate login with valid email and password', () => {

        cy.fixture('credentials').then((data) => {

            ln.setEmail(data.email)
            ln.clickLogin();
            ln.setPassword(data.password)
            ln.clickLogin();
            ln.verifyLogin();

        })

    })

    // Test 5: Verify login button is disabled when fields are empty
    it("Validate login button is disabled when email or password are empty", () => {

    // Without typing anything
    ln.verifyLoginButtonDisabled();

    });

    // Test 6: Verify validation message when password is empty
    it("Error validation message when password field is emtpy", () => {
        cy.fixture('credentials').then((data) => {
        
            ln.verifyEmailVisibility();
            ln.verifyPasswordVisibility(data.email);
        });
    })

    //Test 7: Verify invalid email format validation
    it("Validate invalid message appears or not when random text is entered", () => {
        ln.setEmail("abc123");
        ln.clickLogin();
        ln.verifyInvalidEmailError();
    })

    // Test 8: Login with unregistered email
    it("Validate validation message when unregistered email is entered", () => {
        cy.fixture('credentials').then((data) => {

        ln.setEmail(data.unregisteredEmail);
        ln.clickLogin();
        ln.verifyFailedToGetStudentError();

        })
        
    })

    // Test 9: Login with valid email but invalid password
    it("Validate login with valid email and invalid password", () => {

        cy.fixture('credentials').then((data) => {

            ln.setEmail(data.email);
            ln.clickLogin();
            ln.setPassword("abc123");
            ln.clickLogin();
            ln.verifyInvalidCredentials();

        })

    })

    // Test 10: Login with invalid email and valid password
    it("Validate login with invalid email and valid password", () => {

    cy.fixture('credentials').then((data) => {

        ln.setEmail(data.email);
        ln.clickLogin();
        ln.clearEmail();
        ln.setEmail("sunita@gmail.com")
        ln.setPassword("Sunita123@");
        ln.clickLogin();
        ln.verifyUserNotFound();

    })    

    })



})