
import mylogin from "../PAGEOBJECTMODELS/mylogin"
console.log("Imported mylogin:", mylogin);

describe("testing POM pattern", ()=>
{
    it.skip ("testing my page object model",()=>
    {
        cy.visit("https://practicetestautomation.com/practice-test-login/")
        cy.get("#username").type("student")
        cy.get("#password").type("Password123")
        cy.get("#submit").click()
    })



     it("testing my page object model",()=>
    {
        cy.visit("https://practicetestautomation.com/practice-test-login/")


               const karthiklogin=new mylogin();
               karthiklogin.setmyusername("student")
                karthiklogin.setmypassword("Password123")
                karthiklogin.setmysubmit()

               
})
})