Feature: Create Client
  As an administrator
  I want to create a new client
  So that I can manage client information

  Scenario: Successfully create a new client
    Given I am on the "Create Client" page
    When I enter "John Doe" into the "Name" field
    And I enter "john.doe@example.com" into the "Email" field
    And I enter "1234567890" into the "Phone" field
    And I enter "123 Main St" into the "Address" field
    And I click the "Submit" button
    Then I should see "Client added successfully!"

