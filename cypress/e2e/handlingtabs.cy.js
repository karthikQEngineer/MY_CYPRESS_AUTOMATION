describe("handling tabs",()=>
{
    it("opeing new window", ()=>
    {
        cy.visit("https://the-internet.herokuapp.com/windows")
        cy.get("a[href='/windows/new']").invoke("removeAttr",'target').click()
    })
})