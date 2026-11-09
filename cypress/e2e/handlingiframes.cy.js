describe('handling iframes',()=>
{
    it.skip('iframesssss',()=>
    {
        cy.visit("https://the-internet.herokuapp.com/frames")
        cy.get("a[href='/iframe']").wait(4000).click().wait(4000)
        const myiframe=cy.get("#mce_0_ifr")
        .its('0.contentDocument.body')
        .then(cy.wrap)
        myiframe.clear().type("my name is karthik")
    })


    it.only('custom iframe ',()=>
    {
        cy.visit("https://the-internet.herokuapp.com/frames")
        cy.get("a[href='/iframe']").wait(4000).click().wait(4000)

      cy.myowniframe('#mce_0_ifr').clear().type("my name is karthik")
    })
}
)