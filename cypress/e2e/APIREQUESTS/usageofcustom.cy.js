describe("testing",()=>
{ 
   
    it("my testing token",()=>
    {
        cy.tokentoekntoken().then ((result)=>
        {

        
           cy.request({

            method:"POST",
            url:"https://simple-books-api.click/orders",
              headers: {
             'Content-Type':  'application/json',
                'Authorization':"Bearer " +result

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
        
    })
})