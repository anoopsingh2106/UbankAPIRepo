# Introduction 
* API project is used to Perform Add, Fetch, Update and Delete Actions on petstore.swagger.io website

# Prerequisites
1. Install dependencies for the allure reporting as below
 *  To install allure commandline run this command- `npm install allure-commandline --save-dev`
 *  To install allure plugin run this command- `npm install @shelex/cypress-allure-plugin --save-dev`
 *  To Install Cucumber plugin run this command- `npm install cypress-cucumber-preprocessor --save-dev`

# Installation
1. Installation process, including dependancies. 
    * NodeJs and Npm (most recent LTS version) download it from https://nodejs.org/en/
    * run from command line or terminal in the local repo: `npm install` 
2. Running example test
    * from cmd/bash run: `npm run cypress:open`
    * cypress Test Runner will open and you will be able to inspect and run test cases from there.

# Framework structure
* integration -> All tests go here under the respective feature folders.
* bddfeatures -> BDD cucumber feature files for the test scenarios are present along with the StepDefinition files.
* fixtures -> All test data go here under the respective feature folders.
* support -> All support files like cypress commands, pageObjects etc go here under the respective feature folder.

# Test Execution
* To run the test locally execute this command - `npm test`
* The above command will run the tests and also generate the allure report file. Allure report file will get opened automatically after test execution. 

# GitHub Repository
https://github.com/anoopsingh2106/UbankAPIRepo



