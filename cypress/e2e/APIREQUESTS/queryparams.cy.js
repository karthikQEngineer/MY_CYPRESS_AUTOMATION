describe("query params check",()=>
{
    it('checking my query params' ,()=>
    {
        cy.request({
            method:'GET',
            url:"https://reqres.in/api/users",
            qs:{page:2}

        }).then((Response)=>{


            expect(Response.status).to.eq(200)
            expect(Response.body.per_page).to.eq(6)
            expect(Response.body.data[0].id).to.eq(7)
        })
    })
})