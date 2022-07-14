describe('CardContainer Test Suite', () => {

    beforeEach(() => {
      cy.visit('http://localhost:3000')
    })

  // it("should be able to see all movies, each with their poster, title and rating", () => {
  //   cy.get(".card").should("exist")
  // });

  it('Should confirm that true is equal to true', () => {
    expect(true).to.equal(true)
  });

  

//1) User sees all 40 movies including the poster, title, and rating on main page
//all together?
//2) Nav Bar displays Web page name
//1)When the server returns a 500 error, the user will see proper error handling
//2)The user can click the browser forward & back arrows to navigate
//3)can click on a movie and screen change
});