describe("explicit",()=>
{
    it("checking explicit", ()=>
    {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get('[name="username"]').type('Admin')
        cy.get('[name="password"]').type('admin123')
        cy.get('.oxd-button').click()

        let myexpectedname="John Doe";

        cy.get('.oxd-userdropdown-name').then ((x)=>
        {

            //BDD
            let myactualname=x.text();
            expect(myactualname).to.equal(myexpectedname)
            expect(myactualname).to.not.equal(myexpectedname)

            //TDD
            assert.equal(myactualname,myexpectedname)


        })

    })
})