class SignInToLumaPage {
    enterEmail(email) {
        cy.get('input[name="login[username]"]').type(email);
        return this;
    }

    enterPassword(validpassword) {
        cy.get('input[name="login[password]"]').type(validpassword);
        return this;
    }

    clickSignInButton() {
        cy.get('button[name="send"').click();
        return this;
    }

    validateGreetMessage(username) {
        cy.get('span[class="logged-in"]').contains('Welcome, ' + username + '!').should('be.visible');
    }
}
const signInToLumaPage = new SignInToLumaPage();
export default signInToLumaPage;