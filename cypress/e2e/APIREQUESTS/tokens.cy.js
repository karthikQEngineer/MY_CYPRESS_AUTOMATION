describe("testing tokens",()=>
{

    let karthikauthtoken=null;
    it("testing",()=>
    {
        cy.request({
            method:'POST',
            url:'https://simple-books-api.click/api-clients/',
             failOnStatusCode: false,
            body:{
   clientName: "Hakan",
   clientEmail: Math.random().toString(8).substring(4)+"@gmail.com"
}
        }).then( (Response)=>
        {
            expect(Response.status).to.eq(201)
            karthikauthtoken=Response.body.accessToken
        })
    })


    it("getting access",()=>
    {
        cy.request({

            method:"POST",
            url:"https://simple-books-api.click/orders",
              headers: {
             'Content-Type':  'application/json',
                'Authorization':"Bearer " +karthikauthtoken

            },
            body:{
             bookId: 1,
            customerName: "Karthik"
            }
          
        }).then ((Response)=>
        {
            expect(Response.status).to.eq(201)
            expect(Response.body.created).to.eq(true)
        })
    })




    it("getting order",()=>
    {
        cy.request({

            method:"GET",
            url:"https://simple-books-api.click/orders/",
              headers: {
             'Content-Type':  'application/json',
                'Authorization':"Bearer " +karthikauthtoken

            }
            
          
        }).then ((Response)=>
        {
            expect(Response.status).to.eq(200)
            expect(Response.body).has.length(1)
        })
    })
})