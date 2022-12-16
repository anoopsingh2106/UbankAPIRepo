Feature: Perform Add, Fetch, Update and Delete Actions on petstore.swagger.io website
 
   Scenario Outline: Add a new PetDetails in PetStore using POST method
    Given Customer Adds a New PetDetails with "<newPetid>" and "<newPetName>" by sending http POST method with requestBody
    Then Customer asserts the Newly Added PetDetails by verifying "<newPetid>" and "<newPetName>" from the POST Response
    Examples:
    | newPetid | newPetName    | 
    | 25       | newPetName25  |
    Scenario Outline: Fetch the PetDetails from the PetStore using GET method
    Given Customer sends a http GET method to Fetch the PetDetails by using "<petId>" and asserts the http GET success response
    And  asserts the Pet Details from the http GET response of "<petId>" and "<petName>"
    Examples:
    | petId   | petName         | 
    | 25      | newPetName25    |
 
    Scenario Outline: Update the Existing PetDetails in PetStore using UPDATE method
    Given Customer sends a http PUT method to Update the PetDetails of "<existingPetId>" To Update to "<updatedPetName>"
    And  asserts the Pet Details from the http PUT method response of "<existingPetId>" To "<updatedPetName>"
    Examples:
    | existingPetId | existingPetName   || updatedPetName   |  
    | 25            | newPetName25      || UpdatedPetName25 |
        
    Scenario Outline: Delete the PetDetails in PetStore using DELETE method
    Given Customer sends a http DELETE method to Delete the Existing Pet details by using "<deletedPetId>" 
    Then  asserts the Pet Details Error Message "<petDeleteErrorMsgResponse>" by Sending http GET method for the Deleted "<deletedPetId>"
    Examples:
    | deletedPetId  | petDeleteErrorMsgResponse |
    | 25            | Pet not found             | 	
