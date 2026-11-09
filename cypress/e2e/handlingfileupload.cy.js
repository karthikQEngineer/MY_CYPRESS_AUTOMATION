import 'cypress-file-upload'

describe ("testing file uplaod ",()=>
{
    it("testing single file ",()=>
    {
        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get("#file-upload").attachFile('Capture1.PNG')
        cy.get("#file-submit").click()

    })

    
    it("changing file name ",()=>
    {
        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get("#file-upload").attachFile({filePath:'Capture1.PNG',fileName:"karthik.png"})
        cy.get("#file-submit").click()

    })
 it("drag-n-drop ",()=>
    {
        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get('#drag-drop-upload').attachFile('Capture1.PNG',{subjectType:"drag-n-drop"})
        

    })

    it.only("testing ultiple  file ",()=>
    {
        cy.visit("http://davidwalsh.name/demo/multiple-file-upload.php")
        cy.get("#filesToUpload").attachFile(['Capture1.PNG','dummy.jpg'])
        

    })

})