describe('handling alerts and popups',()=>
{
    it('alerts check',()=>
    {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsAlert()']").click()

       // cy.on('window:alert',(alertt)=>{

          //  expect(alertt).to.contains('I am a JS Alert')
       // })
        cy.on('window:confirm',()=>true);
    })
}
)