describe('handling alerts and popups',()=>
{
    it('alerts check',()=>
    {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsAlert()']").wait(3000).click()

       // cy.on('window:alert',(alertt)=>{

          //  expect(alertt).to.contains('I am a JS Alert')
       // })
        cy.on('window:confirm',()=>true);

        cy.get("button[onclick='jsConfirm()']").click()
        cy.on('window:confirm',()=>false )

        cy.get("button[onclick='jsPrompt()']").click()
    cy.on('window:confirm',()=>true);
    
    
    })
}
)