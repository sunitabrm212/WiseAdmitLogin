describe('Assertions demo', () => {
    
    it("Implicit assertion", () => {
        
        // cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

        // cy.url().should('include', 'orangehrmlive.com');

        // cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

        // cy.url().should('contain', 'orangehrm')

        // cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        // cy.url().should('include', 'orangehrmlive.com')

        // .should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        // .should('contain', 'orangehrm')

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.url().should('include', 'orangehrmlive.com')

        .and('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        .and('contain', 'orangehrm')

    })

    it("Title", () => {

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.title().should('include', "Orange")

        .should('eq', "OrangeHRM")

        .should('contain', "HRM")

    })

    it("Logo image", () => {

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.get('.orangehrm-login-branding > img').should('be.visible')
        
        .and('exist')

    })

    it("Number of links", () => {

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.xpath('//a').should('have.length', 5)
    })

    it("Valid username", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.get("[name = 'username']").type("Admin")

        cy.get("[name = 'username']").should('have.value', "Admin")
    })
 
})