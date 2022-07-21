describe("MovieView Test Suite", () => {
  
  beforeEach(() => {
    cy.visit("http://localhost:3000/508439")
  })

  it("should display an error message for a 500 status code", () => {
    cy
      .intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies/508439", {statusCode:500} )
      .visit("http://localhost:3000/508439")
      .contains("There was an error loading your film. Please try again!")
  })

  it("should display an error message for a 400 status code", () => {
    cy
      .intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies/508439", { statusCode: 500 })
      .visit("http://localhost:3000/508439")
      .contains("There was an error loading your film. Please try again!")
  })

  it("should be able to visit the app and display the Navbar and its contents", () => {
    cy
      .get("header")
      .contains("Rancid Tomatillos")
      .should("have.length", 1)
      .get(".btn").contains("HOME")
  })

  it("should be able to see all the details about the movie they clicked on", () => {
    cy
      .get(".movieViewMain").should("have.attr", "src", "https://image.tmdb.org/t/p/original//xFxk4vnirOtUxpOEWgA1MCRfy6J.jpg")
      .get(".title").contains("Onward")
      .get(".tagline").contains("Their quest begineth.")
      .get(".releaseDate").contains("2/28/2020,")
      .get(".budget").contains("$200,000,000")
      .get(".revenue").contains("$103,181,419")
      .get(".runtime").contains("1 hour and 42 minutes")
      .get(".rating").contains("6.4")
      .get(".genres").contains("Animation").contains("Family").contains("Adventure").contains("Comedy").contains("Fantasy")
      .get(".overview").contains("In a suburban fantasy world, two teenage elf brothers embark on an extraordinary quest to discover if there is still a little magic left out there.")
  })

  it("should not be able to see any other movies", () => {
    cy
      .get(".movieViewMain").should("be.visible")
      .get(".cardContainer").should("not.exist")
  })

  it("should be able to use Home button to navigate back to main page", () => {
    cy
      .get(".btn")
      .click()
      .url().should("eq", "http://localhost:3000/")
    })

  it("should be able to use forward and back arrows to navigate between pages", () => {
    cy
      .visit("http://localhost:3000/")
      .go("back")
      .url().should("eq", "http://localhost:3000/508439")
      .go("forward")
      .url().should("eq", "http://localhost:3000/")
  })
})
