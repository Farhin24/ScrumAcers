
describe("Stand_Up_Form_Employee",() =>{  

    it("Check Route StandUpForm",()=>{
        cy.login_employee()
        cy.visit("http://localhost:3000/StandUpFormParent")
        expect(cy.findByText(/Stand-Up Form/i))
    })
    
    it("Check Form Status", () =>{
        if(cy.findByText(/Daily Stand-Up Form/i))
    {
        it("Test StandUpForm",()=>{
            cy.login_employee()
            cy.visit("http://localhost:3000/StandUpFormParent")
            cy.get('textarea[name="q1"]').type("test")
            cy.get('textarea[name="q2"]').type("test")
            cy.get('textarea[name="q3"]').type("test")
            expect(true).to.equal(true)
        })
    }
    else
    {
        it("Test StandUpForm Submitted",()=>{
            cy.login_employee()
            cy.visit("http://localhost:3000/StandUpFormParent")
            expect(cy.findByText(/Scrum Form/i))
        })
    }
    })
    
    it("Check Reset StandUpForm",()=>{
        cy.login_employee()
        cy.visit("http://localhost:3000/StandUpFormParent")
        cy.get('textarea[name="q1"]').type("test")
        cy.get('textarea[name="q2"]').type("test")
        cy.get('textarea[name="q3"]').type("test")
        cy.findByText(/Reset/i).click()
        cy.get('textarea').should('be.empty')
    })

})