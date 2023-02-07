describe("A user should see the list of Movies", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Should connect to localhost site", () => {
    cy.visit("http://localhost:3000");
  });

  it("Should display a Title", () => {
    cy.get(".movie-container").should("be.visible");
  });
});
