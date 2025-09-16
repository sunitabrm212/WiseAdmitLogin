describe('XPathLocator', () => {
    it('find number of items', () => {
        cy.visit("http://www.automationpractice.pl/index.php?controller=search&orderby=position&orderway=desc&search_query=T-Shirts&submit_search=")

        cy.xpath('//ul[contains(@class,"block_content")]//li').should('have.length', 6);
    })

    it('chained xpaths', () => {
        cy.visit("http://www.automationpractice.pl/index.php?controller=search&orderby=position&orderway=desc&search_query=T-Shirts&submit_search=")

        cy.xpath('//ul[contains(@class, "block_content")]').xpath('.//li').should('have.length', 6)
    })
})