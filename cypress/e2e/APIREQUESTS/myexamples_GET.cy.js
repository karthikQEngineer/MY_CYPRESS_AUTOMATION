describe (" testing api",()=>
{
    it ("get request check",()=>
    {
        cy.request({
            method:'GET',
            url:'https://reqres.in/api/users/2'
        }).then ((Response)=>
        {   
            expect(Response.status).to.eq(200)
            expect(Response.body.data.id).to.eq(2)
            expect(Response.body.support.url).to.eq("https://reqres.in/go/clerk")
             expect(Response.body._meta.docs_url).to.eq("https://reqres.in/docs")
            expect(Response.body._meta.docs_url).to.contains ("reqres") 
            expect(Response.duration).to.lessThan(2000)

            expect(Response.headers).to.have.property("content-type").and.to.eq("application/json; charset=utf-8") 
             expect(Response.headers).to.have.property("content-type").and.include("application/json") 
            expect(Response.headers).to.have.property("x-reqres-docs").and.to.eq("https://reqres.in" )
          })
    })


    it("testing negative flow", ()=>
    {
        cy.request({
            method:'GET',
            url:'https://dummyjson.com/users/53553',
            failOnStatusCode: false
        }).then((Response)=>
        {
            expect( Response.status).to.eq(404)
            expect(Response.body.message).to.include('53553')
        })
    })
})