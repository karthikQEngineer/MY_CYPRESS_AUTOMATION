describe("fixture test",()=>
{

    it("direct login", ()=>
    {
        cy.visit("https://practicetestautomation.com/practice-test-login/")
        cy.get("#username").type("student")
         cy.get("#password").type("Password123")
         cy.get("#submit").click().wait(4000)
         cy.get('.wp-block-button__link').click()
    })


    it("getting single data fro fixtures",()=>
    {
       cy.visit("https://practicetestautomation.com/practice-test-login/")
        cy.fixture('karthik').then((dummy)=>
        {
          cy.get("#username").type(dummy.username)
         cy.get("#password").type(dummy.password)
         cy.get("#submit").click().wait(4000)
         cy.get('.wp-block-button__link').click()
        })
    })


it.only("getting mulriple test data for fixtures",()=>
{
    cy.visit("https://practicetestautomation.com/practice-test-login/")
        cy.fixture('karthik1copy').then((dummy)=>

            {
                    dummy.forEach((zzzzz) => {

                        
          cy.get("#username").type(zzzzz.username)
         cy.get("#password").type(zzzzz.password)
         cy.get("#submit").click().wait(4000)
         
                        
                
            
if(zzzzz.username=='student' && zzzzz.password=='Password123')
{
    cy.get(".post-title").should ('have.text','Logged In Successfully')
    cy.get('.wp-block-button__link').click().wait(3000)
}
else{
    cy.get("#error").should('contain','invalid!')
}
            
        
 })
})

})
})