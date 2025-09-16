describe('Home page', () => {
    it('Verify - positive case', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.title().should('eq', 'OrangeHRM');
    })

    it('Verify - negative case', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.title().should('eq', 'OrangeHRM123')
    })
})