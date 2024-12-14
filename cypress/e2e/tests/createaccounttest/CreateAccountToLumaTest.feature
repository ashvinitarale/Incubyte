Feature: Create account into the site with valid data
  Background: Navigate to the Website
      Given I navigate to the Website
  Scenario: Create account in the application with valid data
      When I click on Create an Account Link
      And I entered account details
          | firstname   | lastname | email  | password | confirmpassword |
          | Ashvini     | Tarale   | ashvini.tarale+test04@gmail.com | password@1234 | password@1234 |
      And Click on create an Account button
      Then Validate with success message
