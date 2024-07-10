Feature: Schedule Client Meeting
  As an administrator
  I want to schedule a meeting for a client
  So that I can manage client meetings

  Scenario: Successfully schedule a client meeting
    Given I am on the "Schedule Client Meeting" page
    When I select "Jason Doe" from the "Client" dropdown
    And I enter "2024-07-10T10:00" into the "Date" field
    And I enter "Initial consultation" into the "Notes" field
    And I click the "Submit" button
    Then I should see "Meeting scheduled successfully!"
