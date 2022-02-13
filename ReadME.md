# Bynder Ui tests

Bynder ui tests written using Cypress end to end testing framework

# Install and run tests

Install all the packages `npm install`

- To open Cypress dashboard:

`npx cypress open [environment] [options]`
# Project Structure 
Cypress
     fixture
        -> testdata.json
     integration
        -> loginTests.spec.js
     plugins
     support
     -> page_objects
            adminBar.js
            loginPage.js
     videos

# Using Docker

If you want to use docker then build the docker image

`docker build --tag bynder-ui-tests:latest .`

`docker run --ipc=host -t bynder-ui-tests .