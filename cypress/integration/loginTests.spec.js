///<reference types='cypress' />

import { onLoginPage } from "../support/page_objects/loginPage.js"
import { onNavBar } from "../support/page_objects/adminBar.js";
describe('Our Test scenarios scripts', () => {
    describe('Given I navigated to bynder', () => {
        let userDetails;
        before(function () {
            cy.visit('/');
            cy.fixture('testdata.json').then(function (user) {
                userDetails = user
            })
        })

        it('When I login with valid username and password', () => {
            onLoginPage.signIn(userDetails.username, userDetails.password)
        })

        it('Then I verify that redirected to the dashboard page', () => {
            cy.url().should('include', '/account/dashboard')

        })
        it('When I click on the profile dropdown to log out', () => {

            onNavBar.hoverOnProfileDropDown()
            onNavBar.logOut()

        })
        it('Then I verify that redirected to the login page', () => {
            cy.url().should('include', '/login')

        })
        it('When I login with non-exsting username and password', () => {
            let r = (Math.random() + 1).toString(36).substring(7);
            cy.reload()
            onLoginPage.signIn(r, r)

        })
        it('Then I verify that error message has displayed', () => {
            //cy.get('.cbox_messagebox').should('have.text', 'You have entered an incorrect username or password.')
            cy.contains('.cbox_messagebox', 'You have entered an incorrect username or password.') 
        })
        it('And I verify that error message on the notification header',()=>{
            cy.contains('div.notification h1', 'You have entered an incorrect username or password.'); 
        });
        it('And I verify that verify error message disappeared after few seconds',()=>
        {
            /* wait for 25 seconds to ensure that the notification has disappeared */
            cy.get("div.notification h1").should('be.visible');
            cy.wait(25000);
            cy.get("div.notification h1").should('not.be.visible');
        });
    })
})