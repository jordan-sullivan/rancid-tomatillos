describe('MovieView Test Suite', () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/508439")
  })

  it("should be able to visit the app and display the Navbar and its contents", () => {
    cy
      .get("header")
      .contains("Rancid Tomatillos")
      .should("have.length", 1)
      .get(".btn").contains("HOME")
  })

  it("Should be able to see all the details about the movie they clicked on", () => {
    cy
      .get(".movieViewMain").should("have.attr", "src", "https://image.tmdb.org/t/p/original//xFxk4vnirOtUxpOEWgA1MCRfy6J.jpg")
      .get(".title").contains("Onward")
      .get(".tagline").contains("Their quest begineth.")
      .get(".releaseDate").contains("2020-02-29")
      .get(".budget").contains("200000000")
      .get(".revenue").contains("103181419")
      .get(".runtime").contains("102")
      .get(".rating").contains("6.4")
      .get(".genres").contains("Animation").contains("Family").contains("Adventure").contains("Comedy").contains("Fantasy")
      .get(".overview").contains("In a suburban fantasy world, two teenage elf brothers embark on an extraordinary quest to discover if there is still a little magic left out there.")
  });


  it("Should not be able to see any other movies", () => {
    cy.get(".movieViewMain").should("be.visible")
    cy.get(".cardContainer").should("not.exist")
  });

  it("Should be able to use Home button to navigate back to main page", () => {
    cy
      .get(".btn")
      .click()
      .url().should("eq", "http://localhost:3000/")
    });

  it("Should be able to use forward and back arrows to navigate between pages", () => {
    cy
      .visit("http://localhost:3000/")
      .go("back")
      .url().should("eq", "http://localhost:3000/508439")
      .go("forward")
      .url().should("eq", "http://localhost:3000/")
  });

})
