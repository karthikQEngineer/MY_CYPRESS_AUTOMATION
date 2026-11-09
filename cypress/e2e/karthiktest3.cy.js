describe ("myorangetest suite",()=>
{
    it("test positive",()=>
    {
    //steps
     
cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
cy.title ().should('eq','OrangeHRM')
    })

     it("test positive",()=>
    {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.title ().should('eq','OrangeHRM11')
    })

})