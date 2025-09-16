describe("Login Functionality", () => {

    beforeEach(() => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    })

    it("Logo is visible in the login page", () => {

        cy.get('.orangehrm-login-branding > img').should('be.visible');

    })

    it("Check that the username and password field exist", () => {

        cy.get('input[name = "username"]').should('exist')
        cy.get('input[name = "password"]').should('exist')

    })

    it("Check that the login button is enable", () => {

        cy.get('button[type = "submit"]').should('be.enabled');

    })

    it("Check that entering valid credentials redirects user to dashboard", () => {
        
        cy.get('input[name = "username"]').type("Admin")
        cy.get('input[name = "password"]').type("admin123")
        cy.get('button[type = "submit"]').click()
        cy.url().should('eq', "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")

    })

    it("Check that entering invalid username and password displays error message", () => {

        cy.get('input[name = "username"]').type("Sunita")
        cy.get('input[name = "password"]').type("Sunita123")
        cy.get('button[type = "submit"]').click()
        cy.get('.oxd-alert-content > .oxd-text').should('have.text', "Invalid credentials")

    })

})