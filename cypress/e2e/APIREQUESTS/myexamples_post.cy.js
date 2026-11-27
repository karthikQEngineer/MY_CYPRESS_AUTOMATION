describe ("testing post",()=>
{let karthiktoken=null
    it("creating  my token",()=>
    {
        cy.request({
            method:'POST',
            url:'https://simple-books-api.click/api-clients/',
            body:  {
               "clientName": "Cypress Tester",
                "clientEmail": Math.random().toString(4).substring(6) +"@gmail.com"
            }
        }).then ((Response)=>
        {
            expect(Response.status).to.eq(201)
            expect(Response.duration).to.be.lessThan(2000)
            expect(Response.body).to.have.property('accessToken')
             karthiktoken= Response.body.accessToken
            cy.log("karthik's access token is ", karthiktoken)
        })
    })

    it("getting the access token to chain",()=>
    {
        cy.request(
            {
                method:'GET',
                url:'https://simple-books-api.click/orders',
                headers:{
                    authorization:'Bearer '+ karthiktoken
                }
            }
        ).then ((Response)=>
        [
            expect(Response.status).to.eq(200)
        ])
    })
})