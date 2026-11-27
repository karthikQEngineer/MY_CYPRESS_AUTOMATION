

/*describe("testing the request body",()=>
{
    
  

        it.only("testing my custom",()=>
        {
           cy.reuse().then ((Response)=>
        {
            expect(Response.status).is.eq(201)
            expect(Response.body.userId).is.eq(363)
        })
        })
})*/


describe("Custom command debugging", () => {
    it("checks Cypress execution", () => {
        cy.log("Test started");

        cy.request({
            method: "GET",
            url: "https://jsonplaceholder.typicode.com/posts/1"
        }).then((response) => {
            expect(response.status).to.eq(200);
            cy.log("API request completed");
        });
    });
});
