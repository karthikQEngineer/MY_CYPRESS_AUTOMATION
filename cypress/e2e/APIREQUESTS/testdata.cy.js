describe("test my website",()=>
{
   /* it("testing fixture file",()=>
    {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login").wait(4000)
        cy.get("input[placeholder='Username']").type("Admin")
        cy.get("input[placeholder='Password']").type("admin123")
            cy.get("button[type='submit']").click()
    })


  it("testing fixture file",()=>
    {
        
        cy.fixture('testdata').then((testdata)=>{
            testdata.forEach((mydata) => {
                failonstatuscode:true
                cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
                   cy.get("input[placeholder='Username']").type(mydata.myusername)
        cy.get("input[placeholder='Password']").type(mydata.mypassword)
            cy.get("button[type='submit']").click()
            cy.get('.oxd-userdropdown-name').click()
            cy.get(':nth-child(4) > .oxd-userdropdown-link').wait(2000).click()
                
            });

                   })

    })*/
        beforeEach("testing login",()=>{
cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login").wait(3000)
        })

            it("valid",()=>
            {
                
                cy.mykarthikcustom2('Admin','admin123');
                 cy.get(".oxd-userdropdown-name").click().wait(2000)
        cy.get(':nth-child(4) > .oxd-userdropdown-link').click()
            })

            it(" invalid  1",()=>
            {
                cy.mykarthikcustom2('Admin1','admin123');
                cy.get(".oxd-text.oxd-text--p.oxd-alert-content-text").should("contain",'Invalid credentials')
            })
             it(" invalid  2",()=>
             {
                cy.mykarthikcustom2('Admin','admin1234')
            cy.get(".oxd-text.oxd-text--p.oxd-alert-content-text").should("contain",'Invalid credentials')
            })

             it(" invalid  3",()=>
             {   
                cy.mykarthikcustom2('','admin123')
            cy.get(".oxd-text.oxd-text--p.oxd-alert-content-text").should("contain",'Invalid credentials')
            })

                  it(" invalid  4",()=>
             {   
                cy.mykarthikcustom2(' ',' 111')
                cy.get(".oxd-text.oxd-text--p.oxd-alert-content-text").should("contain",'Invalid credentials')
       
            })
                     
            })
     
            



 
