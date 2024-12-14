class CreateAccountToLumaPage {

    enterAccountDetails(firstname, lastname, email, password, confirmpassword) {
        cy.get('input[id="firstname"]').type(firstname);
        cy.get('input[id="lastname"]').type(lastname);
        cy.get('input[id="email_address"]').type(email);
        cy.get('input[id="password"]').type(password);
        cy.get('#password-confirmation').type(confirmpassword);
        return this;
    }

    enterFirstName(firstname) {
        cy.get('input[id="firstname"]').type(firstname);
        return this;
    }

    enterLastName(lastname) {
        cy.get('input[id="lastname"]').type(lastname);
        return this;
    }

    enterEmail(email) {
        cy.get('input[id="email_address"]').type(email);
        return this;
    }

    enterPassword(password) {
        cy.get('input[id="password"]').type(password);
        return this;
    }

    enterConfirmPassword(confirmpassword) {
        cy.get('#password-confirmation').type(confirmpassword);
        return this;
    }

    clickCreateAnAccountButton() {
        cy.get('button[title="Create an Account"').click();
        return this;
    }

    verifySuccessMessage() {
        cy.get('.message-success > div').contains('Thank you for registering with Main Website Store.').should('be.visible');
    }

}
const createAccountToLumaPage = new CreateAccountToLumaPage();
export default createAccountToLumaPage;