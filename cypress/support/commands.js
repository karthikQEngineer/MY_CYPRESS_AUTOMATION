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
cy.get("#username").type(userloginname)
cy.get("#password").type(userpassword)
cy.get('#submit-login').click().wait(4000)
})