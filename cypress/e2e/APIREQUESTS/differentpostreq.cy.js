describe("testing different types of request body",()=>
{
    it("first way",()=>
    {
        cy.request({
            method:'POST',
            url:'https://reqres.in/api/users',
            body:{
  name: "karthik",
  job: "leader"
}
        }).then ((Response)=>
        {
            expect(Response.status).to.eq(201)
            expect(Response.body.name).to.eq("karthik")
            //expect(Response.body._meta.context).to.eq("keyless_success")
        })
    })




    it("second way",()=>
    {
        cy.request({
            method:'POST',
            url:'https://reqres.in/api/users',
            body:{
  name: Math.random().toString(6),
  job: Math.random().toString(6)
}
        }).then ((Response)=>
        {
            expect(Response.status).to.eq(201)
            expect(Response.body.name).to.eq(name)
            //expect(Response.body._meta.context).to.eq("keyless_success")
        })
    })

    
})