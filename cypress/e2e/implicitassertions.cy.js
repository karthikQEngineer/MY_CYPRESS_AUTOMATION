describe("implicit assertions checking",()=>
{
    it("using url with should ",()=>
    {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
       cy.url().should('include',"orangehrmlive.com")
        cy.url().should("eq","https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.url().should('contain',"orangehrmlive")
    })

it("using only should ",()=>
    {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
       cy.url().should('include',"orangehrmlive.com")
        .should("eq","https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        .should('contain',"orangehrmlive")
    })


    it("using only and ",()=>
    {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
       cy.url().should('include',"orangehrmlive.com")
        .and("eq","https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        .and ('contain',"orangehrmlive")
        .and('not.contain',"1234")
        .and("not.contain", "orangehrmlive11")
    })
    
it("image",()=>
{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.title().should('include','Orange')
        cy.get('.orangehrm-login-branding > img').should('be.visible')
}
)
})