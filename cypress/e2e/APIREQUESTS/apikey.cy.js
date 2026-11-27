   describe("testing api key",()=>
{


   it("api key test",()=>
    {
        cy.request(
            {
                method:'GET',
                url:'https://demo.totalshiftleft.ai/auth/me',
                headers:
                {
                    'x-api-key':'demo-key-sandbox-2026'
                }

            }
        ).then ((Response)=>
        {
            expect(Response.status).to.eq(200)
            expect(Response.body.success).to.eq(true)
            expect(Response.body.data.method).to.eq("apikey")
})
    })
})