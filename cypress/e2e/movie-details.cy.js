describe("User should see a Movie Title, Trailer, Movie Details, and Back Button.", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/724495");
  });

  it("Should connect to specific movie site", () => {
    cy.visit("http://localhost:3000/724495");
  });

  it("Should See a Movie title", () => {
    cy.get("h1").should("be.visible");
  });

  it("Should See a Movie Trailer", () => {});

  it("Should See a Movie Details", () => {});

  it("Should See a Back Button", () => {});
});
