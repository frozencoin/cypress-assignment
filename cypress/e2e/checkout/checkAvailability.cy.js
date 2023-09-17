/// <reference types="cypress" />


context('Availability Search scenarios', () => {
  let appUrl = Cypress.config().appUrl
  let checkAvailabilityEndpoint = Cypress.config().endpoints.checkAvailability
  let customizeExperienceEndpoint = Cypress.config().endpoints.customizeExperience
  let checkAvailabilityEndpointUrl = `${appUrl}${checkAvailabilityEndpoint}`
  let customizeExperienceEndpointUrl = `${appUrl}${customizeExperienceEndpoint}`

  beforeEach(() => {
    cy.visit(checkAvailabilityEndpointUrl)
  })


  it('Find a room in 2 weeks for 2 days, 2 adults', () => {
    let checkInDate = cy.helper.getCalendarDateFromToday(14)
    let checkOutDate = cy.helper.getCalendarDateFromToday(16)
    cy.get('#check-in-input').type(checkInDate)
    cy.get('#check-out-input').type(checkOutDate)
    cy.get('#check-availability-button').click()
    cy.url().should('eq', customizeExperienceEndpointUrl)
  })

  it('Find a room today for 2 days, 2 adults, 1 child of age 11', () => {
    let checkInDate = cy.helper.getCalendarDateFromToday(0)
    let checkOutDate = cy.helper.getCalendarDateFromToday(2)
    cy.get('#check-in-input').type(checkInDate)
    cy.get('#check-out-input').type(checkOutDate)
    cy.get('#guests-input').click()
    cy.get('#room-1-children').clear().type(1)
    cy.get('#room-1-child-1-age').clear().type(11)
    cy.get('#guests-confirm-button').click()
    cy.get('#check-availability-button').click()
    cy.url().should('eq', customizeExperienceEndpointUrl)
  })

})