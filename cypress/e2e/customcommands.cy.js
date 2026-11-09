describe("testing custom",()=>
{

it("custom",()=>
{
     cy.visit ("https://practicetestautomation.com/practice-test-login/")
cy.karthikcustom("student","Password123")


}
)

it("custom 2",()=>
{
    cy.visit("https://practice.expandtesting.com/login")
    cy.mykarthikcustom2("practice","SuperSecretPassword!")
})

})