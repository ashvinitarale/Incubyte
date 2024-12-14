class HomePage {

    enterURL() {
        cy.visit("https://magento.softwaretestingboard.com/");
    }
    
    clickCreateAnAccountLink() {
        cy.get('a').contains("Create an Account").click({force: true});
        return this;
    }

    clickSignInLink() {
        cy.get('a').contains("Sign In").click({force: true});
        return this;
    }

}
const homePage = new HomePage();
export default homePage;