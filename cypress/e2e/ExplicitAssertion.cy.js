describe("Explicit demo", () => {
    
    it("Explicit assertion", () => {

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.get('[name = "username"]').type("Admin")
        cy.get('[name = "password"]').type("admin123")
        cy.get('[type = "submit"]').click()

        let expName = "manda user"

        cy.get(".oxd-userdropdown-name").then((x) => {
            
            let actName = x.text()

            // expect(actName).to.not.equal(expName)

            //BDD
            expect(actName).to.equal(expName)

            //TDD
            assert.equal(actName, expName)

        })

    })

})