///<reference types="Cypress" />

import { Given, Then, And, When } from "cypress-cucumber-preprocessor/steps";
import '../../support/commands' 


Given("Customer Adds a New PetDetails with {string} and {string} by sending http POST method with requestBody", function (newPetid, newPetName) {
    cy.addPetDetails(newPetid, newPetName).then((response) => {
      expect(response).to.eq(200)
    }) 
  })
   
Then("Customer asserts the Newly Added PetDetails by verifying {string} and {string} from the POST Response", function (newPetid, newPetName) {  
    cy.assertPetDetails(newPetid, newPetName).then((response) => {
    })
  })

Given("Customer sends a http GET method to Fetch the PetDetails by using {string} and asserts the http GET success response", function (petId) {
    cy.fetchPetDetails(petId).then((response) => {
      expect(response).to.eq(200)
    }) 
  })

And("asserts the Pet Details from the http GET response of {string} and {string}", function (petId, petName) {  
    cy.assertPetDetails(petId, petName).then((response) => {
    })
  })
 
Given("Customer sends a http PUT method to Update the PetDetails of {string} To Update to {string}", function (existingPetId, updatedPetName) {
    cy.updatePetDetails(existingPetId, updatedPetName).then((response) => {
      expect(response).to.eq(200)
    }) 
  })

And("asserts the Pet Details from the http PUT method response of {string} To {string}", function (existingPetId, updatedPetName) {  
    cy.assertPetDetails(existingPetId, updatedPetName).then((response) => {
    })
  })
 
Given("Customer sends a http DELETE method to Delete the Existing Pet details by using {string}", function (existingPetId) {
    cy.deletePetDetails(existingPetId).then((response) => {
      expect(response).to.eq(200)
    }) 
  })
    
Then("asserts the Pet Details Error Message {string} by Sending http GET method for the Deleted {string}", function (petDeleteErrorMsgResponse, deletedPetId) {  
    cy.deletedPetDetailsErrorMessage(petDeleteErrorMsgResponse, deletedPetId).then((response) => {
        expect(response).to.eq(404)
    })
  })