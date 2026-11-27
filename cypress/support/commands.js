// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
/// <reference types="cypress" />
/// <reference types="@cypress/xpath" />

//const cypress = require("cypress")

//const cypress = require("cypress")

Cypress.Commands.add("myowniframe",(iframe)=>{
 return cy.get(iframe)
        .its('0.contentDocument.body')
        .then(cy.wrap)  
})

Cypress.Commands.add("karthikcustom", (abc,def)=>
{
              cy.get("#username").type(abc)
         cy.get("#password").type(def)
         cy.get("#submit").click().wait(4000)
         cy.get('.wp-block-button__link').click()
   

})

Cypress.Commands.add("mykarthikcustom2",( userloginname,userpassword)=>
{
 cy.get("input[placeholder='Username']").type(userloginname)
        cy.get("input[placeholder='Password']").type(userpassword)
            cy.get("button[type='submit']").click()
           
})


Cypress.Commands.add('orangelogin',()=>
{
     cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get("input[placeholder='Username']").type("Admin")
        cy.get("input[placeholder='Password']").type("admin123").wait(3000)
        cy.get("button[type='submit']").click()

       
})

Cypress.Commands.add("customapi",()=>
{
    cy.request({
            method:'GET',
            url:'https://reqres.in/api/users/2'

        })
})


Cypress.Commands.add("tokentoekntoken",()=>
{
    return cy.request({
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
            return  Response.body.accessToken
        })
})



Cypress.Commands.add("chatcheck",(user,pass )=>
{
       cy.get("input[placeholder='Username']").type(user)
        cy.get("input[placeholder='Password']").type(pass)
        cy.get("button[type='submit']").click()  
})