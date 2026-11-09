describe("screenshotss",()=>
{
    it("my screenshot",()=>
    {
        cy.visit("https://the-internet.herokuapp.com/login")
        cy.get("#username").type("tomsmith")
        cy.get("#password").type("SuperSecretPassword!")
        cy.screenshot()
cy.wait(4000)
        cy.get(".fa.fa-2x.fa-sign-in").click()
    })

})