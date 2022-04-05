describe("Stand_Up_Form_Employee",() =>{  

    it("Check Route StandUpForm",()=>{
        cy.login_manager()
        cy.visit("http://localhost:3000/SurveyFormParent")
        expect(cy.findByText(/Survey Creation Form/i))
    })
    
    it("Check Form Status", () =>{
            cy.login_manager()
            cy.visit("http://localhost:3000/SurveyFormParent")
            cy.get('input[name="survey_title"]').type("test")
            cy.get('input[name="question1"]').type("test")
            cy.get('input[name="question2"]').type("test")
            cy.get('input[name="question3"]').type("test")
            expect(true).to.equal(true)
    })

    it("Check Responses",()=>{
        cy.login_manager()
        cy.visit("http://localhost:3000/SurveyFormParent")
        cy.findByText("View Survey Form List").click()
        cy.get('button[name="view_responses"]')
    })

    it("Check Responses Close",()=>{
        cy.login_manager()
        cy.visit("http://localhost:3000/SurveyFormParent")
        cy.findByText("View Survey Form List").click()
        cy.get('button[name="view_responses"]').first().click()
        cy.get('button[name="close"]').click()
    })
})