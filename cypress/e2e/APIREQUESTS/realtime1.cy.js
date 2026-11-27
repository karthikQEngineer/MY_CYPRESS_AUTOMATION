describe("testing Authentication and token handling",()=>
{

   
     let karthik_token=Response.body.accessToken;
    it ("checkng Authentication and token handling",()=>
    {
        cy.request({
            method:'POST',
            url:'/get/details',
            body:
            {
                'name':'karthik',
                'email':'shetty@gmail.com'
            }
        }).then ((Response)=>
        {
            expect(Response.status).to.eq(200)
            
           
        })
    })

 it ("checkng Authentication and token handling",()=>
    {
        cy.request({
            method:'GET',
            url:'/get/details',
           headers:
           {
            'authorization':'bearer '+ karthik_token
           }
        }).then ((Response)=>
        {
            expect(Response.status).to.eq(200)
            expect(Response.body).to.have.property("accessToken")
            expect(Response.body.accessToken).to.eq(karthik_token)
            
           
        })
    })

})