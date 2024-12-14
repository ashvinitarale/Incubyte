/// <reference types="cypress" />
import { Given, When, Then, DataTable } from 'cypress-cucumber-preprocessor/steps';
import createAccountToLumaPage from '../../pages/createaccount/CreateAccountToLumaPage.cy';
import homePage from '../../pages/homepage/HomePage.cy';

Given(`I navigate to the Website`, () => {
    homePage.enterURL();
});

When(`I click on Create an Account Link`, () => {
    homePage.clickCreateAnAccountLink();
});

When(`I entered account details`, (DataTable) => {
    DataTable.hashes().forEach((element) => {
          createAccountToLumaPage.enterFirstName(element.firstname);
          createAccountToLumaPage.enterLastName(element.lastname);
          createAccountToLumaPage.enterEmail(element.email);
          createAccountToLumaPage.enterPassword(element.password);
          createAccountToLumaPage.enterConfirmPassword(element.confirmpassword);
      });
});

When(`Click on create an Account button`, () => {
    createAccountToLumaPage.clickCreateAnAccountButton();
});

Then(`Validate with success message`, () => {
    createAccountToLumaPage.verifySuccessMessage();
});