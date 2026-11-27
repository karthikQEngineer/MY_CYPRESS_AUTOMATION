describe("testing basic",()=>
{
    it("basic auth test",()=>
    {
        cy.request({
            method:'GET',
            url:"https://httpbin.org/basic-auth/testuser/testpass",
           
                auth:{
                    'user':'testuser',
                    'pass':  'testpass' 
            }
        }).then ((Response)=>
        {
            expect(Response.body.authenticated).to.eq(true)
            expect(Response.body.user).to.eq("testuser")
        })
    })


    it.only("digest auth",()=>
    {
        cy.request({
            method:'GET',
            url:"https://httpbin.org/digest-auth/auth/testuser/testpass",
            auth:
            {
                username:"testuser",
                password:"testpass",
                method:"digest"
            },    failOnStatusCode: false

        }).then ((Response)=>
        {
            expect(Response.status).to.eq(200)
            expect(Response.body.authenticated).to.eq(true)
        })
    })
})