describe("testing baseurl",()=>
{

   let karthik_token;
     
    it ("checkng baseurl",()=>
    {
        cy.request({
            method:'POST',
            url:"/products",
            body:
            {
                'name':'karthik', 
                'email':'shetty@gmail.com'
            }
        }).then ((Response)=>
        {
            expect(Response.status).to.eq(201)
             
           
        })
    })
})