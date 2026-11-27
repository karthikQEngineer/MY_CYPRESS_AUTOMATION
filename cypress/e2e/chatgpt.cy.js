describe("checking",()=>
{
    it("testing",()=>
    {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get("input[placeholder='Username']").type("Admin")
        cy.get("input[placeholder='Password']").type("admin123")
        cy.get("button[type='submit']").click()
    })

  it("checking custom",()=>
    {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.chatcheck("Admin","admin123")
    })

    it("checking fixtures",()=>
    {
       
        cy.fixture("chat").then((myresponse)=>
        {
             cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
             cy.get("input[placeholder='Username']").type(myresponse.mypassword)
        cy.get("input[placeholder='Password']").type(myresponse.myusernam)
        cy.get("button[type='submit']").click()

        })
    })

    it.only("checking custom and fixture together ",()=>
    {
        cy.fixture("chat").then ((answer)=>
        {
 cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.chatcheck(answer.myusernam,answer.mypassword)
        })
       
    })
})