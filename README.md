# bynder tests 
1. All following bynder UP tests have been developed by Javascripts and Cypress IO 

2. Verification area
 *2.1* verify the redircation to the login page 
 *2.2* verify error message while the user login with invalid credentials 
 *2.3* verify the redirection to the home page when the user enters valid credentials 

3. The testscenarios should be written in BDD Gherkin

4. Actions has been automated in our project
 *4.1* hover
 *4.2* signIn 
 *4.3* logout
5. Adding random function to generate random user name and password to validate the invalid login scenario 

6. Also, I added POM ( Page object modal ) into our project to make the project more reusable and manitainable 

# To Build and Run Docker file

*1.* docker build -t cypress/included:9.4.1 .

*2.* docker run --ipc=host -t cypress/included:9.4.1 .


