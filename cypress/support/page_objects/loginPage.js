export class LoginPage {
    signIn(userName, password) {
        cy.get('#inputEmail').type(userName);
        cy.get('#inputPassword').type(password);
        cy.get('button[type="submit"]').click();
    }

    
}
    export const onLoginPage = new LoginPage()