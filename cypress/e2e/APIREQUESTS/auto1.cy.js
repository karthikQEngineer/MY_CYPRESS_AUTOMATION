describe("testing api",()=>
{
    it("testing individual",()=>
    {
        cy.request({
            method:'GET',
            url:"https://jsonplaceholder.typicode.com/posts/1"
        }).its('status')
        .should('eq',200)

    })
})