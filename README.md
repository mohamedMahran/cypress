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
7. Finally i added two following extra checks related to the login scenario which should be verified
  
      *7.1* verify error message on the notification header
  
      *7.2* verify error message disappeared after few seconds
# Install 
  1. Install all the packages -> npm install
# Run tests
  1. Run tests against chrome browser, Please run the below command 
       
                ->  npx cypress open --browser chrome --config integrationFolder=CYPRESS ASSIGMENTS/cypress/integration/loginTests.spec.js

  2. if you want to change the browser, please change the browser to edge or firefox on the above mentiond command
        
  3. if you want to run tests headless with genreating mocha report please run the following command
        
                -> ./node_modules/.bin/cypress run --reporter mochawesome

# Reports
1. Created by mochawesome package  

![image](https://user-images.githubusercontent.com/20645322/153772159-cef177a8-5ba8-475b-8acc-d9db46b775ff.png)
  

# To Build and Run Docker file
If you want to use docker then build the docker image

*1.* docker build -t cypress/included:9.4.1 .

*2.* docker run --ipc=host -t cypress/included:9.4.1 .


