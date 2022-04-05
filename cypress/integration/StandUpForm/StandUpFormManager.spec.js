describe("Stand_Up_Form_Employee",() =>{  

    it("Check Route StandUpForm",()=>{
        cy.login_manager()
        cy.visit("http://localhost:3000/StandUpFormParent")
        expect(cy.findByText(/Daily Stand-Up Form Reviews/i))
    })
    
    it("Open Review", () =>{
        if(cy.findByText(/Daily Stand-Up Form/i))
    {
        it("Test StandUpForm",()=>{
            cy.login_manager()
            cy.visit("http://localhost:3000/StandUpFormParent")
            cy.get('button').click()
        })
    }
    else
    {
        it("Close Review",()=>{
            cy.login_employee()
            cy.visit("http://localhost:3000/StandUpFormParent")
            cy.get('button').click()
            cy.get('button').click()
        })
    }
    })

})