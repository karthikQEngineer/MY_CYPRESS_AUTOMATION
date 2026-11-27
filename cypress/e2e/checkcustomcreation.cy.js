describe("checking custom",()=>
{
    it("testing custom",()=>
    {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get("input[placeholder='Username']").type("Admin")
        cy.get("input[placeholder='Password']").type("admin123").wait(3000)
        cy.get("button[type='submit']").click()

        cy.get(".oxd-userdropdown-name").click().wait(2000)
        cy.get(':nth-child(4) > .oxd-userdropdown-link').click()
    })

    it.only ("check check",()=>
    {
        cy.orangelogin();
    })
})