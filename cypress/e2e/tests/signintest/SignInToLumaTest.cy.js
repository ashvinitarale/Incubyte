/// <reference types="cypress" />
import { Given, When, Then, DataTable } from 'cypress-cucumber-preprocessor/steps';
import homePage from '../../pages/homepage/HomePage.cy';
import signInToLumaPage from '../../pages/signin/SignInToLumaPage.cy';

Given(`I navigate to the Website`, () => {
    homePage.enterURL();
});

When(`I click on Sign In Link`, () => {
    homePage.clickSignInLink();
});

When(`I entered valid credential`, (DataTable) => {
    DataTable.hashes().forEach((element) => {
        signInToLumaPage.enterEmail(element.email);
        signInToLumaPage.enterPassword(element.validpassword);
    });
});    

When(`Click on sign in button`, () => {
    signInToLumaPage.clickSignInButton();
});

Then(`Validate the greet welcome after login contains user name`, (DataTable) => {
    DataTable.hashes().forEach((element) => {
        signInToLumaPage.validateGreetMessage(element.username);
    });    
});