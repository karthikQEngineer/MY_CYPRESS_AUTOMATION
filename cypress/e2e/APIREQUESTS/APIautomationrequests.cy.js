describe('testing api requests',()=>
{
    it("get request check",()=>
    {
        cy.request("GET","https://reqres.in/api/users?page=2").wait(4000)
        .its('status')
    .should('eq',200)  
 })
 it("post request chech",()=>
 {
     cy.request(
            {
                method:'POST',
                url:'https://reqres.in/api/users',
                body:{
                        name: "morpheus",
                        job: "leader"
                    }
                 }).wait(4000)
                 .its('status')
                 .should('eq',201)  
     
 })

 it("put request check",()=>
{

    cy.request({

        method:'PUT',
        url:'https://reqres.in/api/users/2',
        body:{
  name: "morphe1111us",
  job: "zion resident"

    }}).its('status').should('eq',200)


})

it("delete request check", ()=>
{
    cy.request({
        method:'DELETE',
        url:'https://reqres.in/api/users/2'
    }).its('status').should('eq',204)
})

})