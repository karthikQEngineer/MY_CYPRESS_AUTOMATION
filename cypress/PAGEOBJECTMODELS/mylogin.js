class mylogin{
    setmyusername(username){
 cy.get("#username").type(username)
    }


    setmypassword(password){
      cy.get("#password").type(password)  
    }

    setmysubmit(){
         cy.get("#submit").click()
    }
}


export default mylogin;

