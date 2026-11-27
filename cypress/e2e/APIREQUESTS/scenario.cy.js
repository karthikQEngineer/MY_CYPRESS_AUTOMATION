describe("testing api",()=>
{
    it("checking results",()=>
    {
        cy.request({
            method:'GET',
            url:"https://simple-books-api.click/api-clients/"
        }).then ((Response)=>
        {
            expect(Response.status).to.eq(200)
            expect(Response.body.name).to.eq("karthik")
            expect(Response.body.id).to.eq(2)
            expect(Response.headers).to.have.property("Content-Type").and.to.eq("application/json")
            expect(Response.duration).to.be.lessThan(3000)
        })
    })

    it("checking negative",()=>
    {
        cy.request({
            method:'POST',
            url:"/api/login",
            body:
            {
                "username":'karthik',
                "password":"1234"
            },
            failonstatuscode:false
        }).then ((Response)=>
        {
            expect(Response.status).to.eq(200)

            expect(Response.body.username).to.eq("karthik")
            expect(Response.body.password).to.eq("1234")
            expect(Response.body.id).to.eq(2)
           expect(Response.body).to.have.property("error")
           expect(Response.body.error).to.include("Invalid credentials")
        })
    })


    describe("testing token",()=>
    {


         it("create  token",()=>
        {
            cy.request({
                method:'POST',
                url:"/api/login",
                
            }).then ((Response)=>
            {
                expect(Response.status).to.eq(200)
                 let newtoken=Response.body.accessToken
            })
        })
       
        it("using token",()=>
        {
            cy.request({
                method:'GET',
                url:"/api/profile",
                auth:'Bearer '+newtoken

            }).then ((Response)=>
            {
                expect(Response.status).to.eq(200)
            })
        })
    })

})


//my custom command in commands.js
cypress.commands.add("reusecommand",()=>
{
  return cy.request({
    method: "GET",
    url: "/api/users",
    headers: {
        Authorization: "Bearer " + token
    }
 }).then((response) => {
    expect(response.status).to.eq(200);
    return response.body.accessToken
 });


})
//my spec file 
describe("reusing the token",()=>
{
    it(" testing other file with the access token",()=>
    {
        cy.reusecommand().then ((response1)=>
        {
           expect(response1.body).to.exist
           expect(response1.body.id).to.eq(1)
        })
    })
})


Cypress.Commands.add("validtoken",()=>{


cy.request({
    method:'POST',
    url:'/app/login',
    body:{
        'username':'karthik',
        'password':'12345'
    }
}).then((response)=>
{
    expect(response.status).to.eq(200)
  return   cy.env("shettytoken",response.body.accessToken)
})
})