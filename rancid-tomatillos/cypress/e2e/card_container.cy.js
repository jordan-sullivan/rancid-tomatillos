{/* <reference types="cypress" />  */}


describe('CardContainer Test Suite', () => {

    beforeEach(() => {
      cy.visit('http://localhost:3000')
    })

  // it("should display an error message for a 500 status code", () => {
  //   cy
  //   .intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies", {statusCode:500} )
  //   .visit("http://localhost:3000/")
  //   .contains("There was an error loading your films. Please try again!")
  // })
  // {statusCode:500:
  // body: {
  //   error: message
  // }

  it("should be able to visit the app and display the Navbar", () => {
    cy
      .get("header")
      .contains("Rancid Tomatillos")
      .should("have.length", 1)
  })

  it("should be able to see all movies, each with their poster, title and rating", () => {
    cy
      .get(".cardContainer").children().should("exist")
      .should("have.length", 40)
      //how can we add in poster, title, rating, should we break into 2 separate tests?
  });
  
  it("Should be able to click on a movie and be routed to movie details page", () => {
    cy
    .get(".card")
    .contains("Onward")
    .click()
    .url().should("include", "508439")
  });
  
  it("Should be able to use forward and back arrows to navigate between pages", () => {
     cy
      .get(".card")
      .contains("Onward")
      .click()
      .url().should("eq", "http://localhost:3000/508439")
      .go("back")
      .url().should("eq", "http://localhost:3000/")
      .go("forward")
      .url().should("eq", "http://localhost:3000/508439")
    });

});