describe("testing dropdown",()=>
{
 it ("country dropdown",()=>
{

    cy.visit("https://testautomationpractice.blogspot.com/")
    cy.get("#country").select('India').should("have.value",'india')
}
    )



    it ("country dropdown with search option",()=>
{

    cy.visit("https://vinothqaacademy.com/drop-down/").wait(5000)
    cy.get("#select2-simpleDropdown-container").click()
    cy.get("input[aria-label='Search']").type("Singapore").type('{enter}')
    cy.get('#select2-simpleDropdown-container')
    .should('have.text','Singapore')
}   
    )

    it ("country dropdown with search option",()=>
{

    cy.visit("https://www.wikipedia.org/").wait(4000)
    cy.get("#searchInput").type("bengaluru")
    cy.get('[href="https://en.wikipedia.org/wiki/Bengaluru"] > .suggestion-text > .suggestion-title').click()

})

  it ("country dropdown with search option",()=>
{

    cy.visit("https://www.google.com/")
    cy.get("#ti6dpd").type('insta')
  cy.get('div.ClJ9Yb').each(($el, index, $list ) =>{
  
    if($el.text()== 'instamatch')
  {
        cy.wrap($el).click()
    
  }
}

)
}
)



})




