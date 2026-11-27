describe
("basic auth",()=>
{
    it("testing basic auth", ()=>
    {
        cy.request(
            {
                method:'GET',
                url:'https://httpbin.org/basic-auth/testuser/testpass',
                auth:{
                    user:"testuser",
                    pass:"testpass"
                }

            }
        ).then ((Response)=>
        {
            expect(Response.status).to.eq(200)
            expect(Response.body.authenticated).to.eq(true)
            expect(Response.body.user).to.eq("testuser")
            expect(Response.body.authorized).to.eq(true)

        })
    })



     it("testing digest  auth", ()=>
    {
        cy.request(
            {
                method:'GET',
                url:'https://httpbin.org/digest-auth/auth/testuser/testpass',
                auth:{
                    username:"testuser",
                    password:"testpass",
                    method:'digest'
                },
                failOnStatusCode: false

            }
                

        ).then ((Response)=>
        {
            expect(Response.status).to.eq(200)
            expect(Response.body.authenticated).to.eq(true)
            expect(Response.body.user).to.eq("testuser")
            //expect(Response.body.authorized).to.eq(true)

        })
    })


    it("api key test",()=>
    {
        cy.request(
            {
                method:'GET'
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