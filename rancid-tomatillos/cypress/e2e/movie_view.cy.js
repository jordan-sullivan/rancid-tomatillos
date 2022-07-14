describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
})

//1)should display the User sees new page 
//displaying the selected movie's information 
//(movie image, statistics, genres) 
//2) Nav Bar displays Web page name
//2) no longer can see any other movies

//4)When a user clicks on a movie and the details page is rendered, 
//the URL updates to reflect that movie’s unique ID as well
//3)can view navbar's home button

//4) can click on home button and will be brought to the home page again

//5) When the server returns a 500 error, the user will see proper error handling

//6) The user can click the browser forward & back arrows to navigate