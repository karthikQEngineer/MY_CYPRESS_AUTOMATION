describe("chcking radio and checkbox",()=>
{
    it("checking radio",() =>
    {


        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.get("#male").check().should('be.visible')
    }
)


it("checking checkbox",() =>
    {


        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.get("#male").check().should('be.visible')
        //cy.get("#sunday").check().should('be.visible')
        //cy.get("#tuesday").check().should('be.visible')
        //cy.xpath("//body/div[@class='content']/div[@class='content-outer']/div[@class='fauxborder-left content-fauxborder-left']/div[@class='content-inner']/div[@class='main-outer']/div[@class='fauxborder-left main-fauxborder-left']/div[@class='region-inner main-inner']/div[@class='columns fauxcolumns']/div[@class='columns-inner']/div[@class='column-center-outer']/div[@class='column-center-inner']/div[@id='main']/div[@id='Blog1']/div[@class='blog-posts hfeed']/div[@class='date-outer']/div[@class='date-posts']/div[@class='post-outer']/div[@class='post hentry uncustomized-post-template']/div[@id='post-body-1307673142697428135']/div[4]")
   //.check().should('be.visible')
   cy.get("input.form-check-input[type='checkbox']").check().should('be.visible')
    cy.get("input.form-check-input[type='checkbox']").first().uncheck()

   cy.get("input.form-check-input[type='checkbox']").last().uncheck()
    }
)
    
})