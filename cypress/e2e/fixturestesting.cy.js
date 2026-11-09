describe ("testing fixtures",()=>
{
    it ("   my fixtures",()=>
    {
        cy.visit("https://opensourice-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get("input[placeholder='Username']").type ("Admin")
        cy.get("input[placeholder='Password']").type ("admin123")
        cy.get("button[type='submit']").click()
    })


     it("    fixtures section",()=>
    {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.fixture('fixtureexample').then((abc)=>{


             cy.get("input[placeholder='Username']").type (abc.username)
        cy.get("input[placeholder='Password']").type (abc.password)
        cy.get("button[type='submit']").click()
    })

        })
       
        it.only("multiple logins",()=>
        {
             cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
             cy.fixture('fixtureexamplecopy').then((abc)=>{
                abc.forEach((xyz)=>
                {
                    cy.get("input[placeholder='Username']").type (xyz.username)
        cy.get("input[placeholder='Password']").type (xyz.password)
        cy.get("button[type='submit']").click()

                    if(xyz.username=='Admin' && xyz.password=="admin123")
{
cy.log("correct username and password")
cy.get('.oxd-userdropdown-tab').click()
cy.get(':nth-child(4) > .oxd-userdropdown-link').click().wait(4000)
}
else
{
    cy.get('.oxd-alert-content > .oxd-text').should('have.text','Invalid credentials')
    cy.log("incorrect username and passowrd")
}


                }
            )

                
             })
        })


})