

describe("Stand_Up_Form_Employee",() =>{  

    it("Check Route StandUpForm",()=>{
        cy.login_employee()
        cy.visit("http://localhost:3000/SurveyFormParent")
        expect(cy.findByText(/Survey Forms/i))
    })
    
    it("Check Form Status", () =>{
            cy.login_employee()
            cy.visit("http://localhost:3000/SurveyFormParent")
            cy.get('button[name="title"]')
    })

    it("Check Responses",()=>{
        cy.login_employee()
        cy.visit("http://localhost:3000/SurveyFormParent")
        cy.get('button[name="title"]').click()
        cy.get('textarea[name="question1"]').type("test")
        cy.get('textarea[name="question2"]').type("test")
        cy.get('textarea[name="question3"]').type("test")
    })

})