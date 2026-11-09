describe("testing hooks",()=>
{
 before (()=>
{
    cy.log("BEFORE")
})

after (()=>
{
    cy.log("AFTER")
})


beforeEach (()=>
{
    cy.log("BEFORE EACH")
})

afterEach (()=>
{
    cy.log("AFTER EACH ")
})

it("1",()=>
{
    cy.log("TEST 1")
})

it("2",()=>
{
    cy.log("TEST 2")
})

it("3",()=>
{
    cy.log("TEST 3")
})


})