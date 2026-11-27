describe("testing json",()=>
{
    it("path finding",()=>
    {
        cy.request(
            {
                method:'GET',
                url:"https://fakestoreapi.com/products"

            }).then ((Response)=>
            {
                expect(Response.status).to.eq(200)

                expect(Response.body[0].title).to.eq("Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops")
                expect(Response.body[1].rating.count).to.eq(259)
           
            })
        
    })
})