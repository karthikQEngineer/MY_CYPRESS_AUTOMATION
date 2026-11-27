describe("check custom api",()=>
{
    it ("testing mine",()=>
    {
        cy.request({
            method:'GET',
            url:'https://reqres.in/api/users/2'

        }).then ((Response)=>
        {
            expect(Response.status).to.eq(200)
            expect(Response.body.data.id).to.eq(2)
        })
    })



     it.only ("testing custommmmm",()=>
    {
       cy.customapi().then ((Response)=>
        {
            expect(Response.status).to.eq(200)
            expect(Response.body.data.id).to.eq(2)
        })
    })

})