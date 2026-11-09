describe('my css path finder',()=>
{
    it('testing search',()=>
    {
        cy.visit("https://www.tickbig.com/")
        cy.get(".Nav-module__p2V2BW__link.Nav-module__p2V2BW__megaBtn").click()
        cy.get("a[data-label='Sign Up']").click()
       // cy.get('.text-decoration-none').click().contains("afaff")
    //cy.get("section[class='content fdc active-content'] p[class='signup-type-header']").contains('Account Type')
        cy.get(".signup_nav-signin").click()
        cy.get("input[placeholder='Email']").click().type("karthik.jn96@gmail.com")
        cy.xpath("//input[@placeholder='Password']").click().type("Team2027@@")
        cy.get("button[type='submit']").click()
    })
    /*it("2",()=>
    {
        cy.visit("https://www.tickbig.com/")
        cy.get(".hh5__word.ambo-name").contains("Agent Ambo")
    
    })*/
})