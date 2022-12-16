// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

///<reference types="Cypress" />

import petStoreInputData from '../fixtures/petStoreInputData.json'

Cypress.Commands.add('fetchPetDetails' , (petId) => {
    cy.request({
        method : 'GET',
        url : Cypress.env('petGetEndpoint') + petId,
        headers: { 'api-key': Cypress.env('special-key'),
                   'content-type': 'application/json' }   
      }).then((fetchPetDetailsResponse)=> {
        return fetchPetDetailsResponse.status 
      }) 
})

    Cypress.Commands.add('assertPetDetails' , (petId, petName) => {
        cy.request({
            method : 'GET',
            url : Cypress.env('petGetEndpoint') + petId,
            headers: { 'api-key': Cypress.env('special-key'),
                       'content-type': 'application/json' }   
          }).then((assertPetDetailsResponse)=> {
            const assertPetDetailsResponseLogs =  assertPetDetailsResponse.body;
            console.log("assertPetDetailsResponseLogs" + assertPetDetailsResponseLogs);
            cy.writeFile('cypress/fixtures/apiResponseLogs/apiResponse_FetchPetDetails.json', assertPetDetailsResponseLogs);
            expect(assertPetDetailsResponse.body.id).to.be.equal(Number(petId))
            expect(assertPetDetailsResponse.body.name).to.be.equal(petName)
            expect(assertPetDetailsResponse.status).to.eq(200) 
          })    
    })
    
    Cypress.Commands.add('addPetDetails', (newPetid, newPetName) => {
            const addPetDetailsRequestBody = petStoreInputData.addPetDetails
            addPetDetailsRequestBody.id = newPetid
            addPetDetailsRequestBody.category.id = newPetid
            addPetDetailsRequestBody.tags[0].id = newPetid
            addPetDetailsRequestBody.name = newPetName
            addPetDetailsRequestBody.category.name = newPetName
            addPetDetailsRequestBody.tags[0].name = newPetName
            cy.request({
              method : 'POST',
              url : Cypress.env('petAddEndpoint'),
              headers: { 'api-key': Cypress.env('special-key'),
                       'content-type': 'application/json' },
              body: addPetDetailsRequestBody 
            }).then((addPetDetailsResponse)=> {
              expect(addPetDetailsResponse.status).to.eq(200)
              return addPetDetailsResponse.status
            }) 
    })

    Cypress.Commands.add('updatePetDetails', (existingPetId, updatedPetName) => {
            const updatePetDetailsRequestBody = petStoreInputData.updatePetDetails
            updatePetDetailsRequestBody.id = existingPetId
            updatePetDetailsRequestBody.category.id = existingPetId
            updatePetDetailsRequestBody.name = updatedPetName
            cy.request({
              method : 'PUT',
              url : Cypress.env('petUpdateEndpoint'),
              headers: { 'api-key': Cypress.env('special-key'),
                       'content-type': 'application/json' },
              body: updatePetDetailsRequestBody 
            }).then((updatePetDetailsResponse)=> {
              expect(updatePetDetailsResponse.status).to.eq(200)
              return updatePetDetailsResponse.status
            }) 
    })
          
    Cypress.Commands.add('deletePetDetails', (existingPetId) => {
            cy.request({
              method : 'DELETE',
              url : Cypress.env('petDeleteEndpoint') + existingPetId,   
              headers: { 'api-key': Cypress.env('special-key'),
                       'content-type': 'application/json' },  
            }).then((deletePetDetailsResponse)=> {    
              expect(deletePetDetailsResponse.status).to.eq(200)
              return deletePetDetailsResponse.status
            }) 
    })

    Cypress.Commands.add('deletedPetDetailsErrorMessage', (petDeleteErrorMsg, deletedPetId) => {
            cy.request({
              method : 'GET',
              url : Cypress.env('petGetEndpoint') + deletedPetId,
              failOnStatusCode:false,
              headers: { 'api-key': Cypress.env('special-key'),
                       'content-type': 'application/json' },   
            }).then((deletedPetDetailsErrorMessageResponse)=> {
              expect(deletedPetDetailsErrorMessageResponse.body.message).to.be.equal(petDeleteErrorMsg)
              return deletedPetDetailsErrorMessageResponse.status
            }) 
    }) 


