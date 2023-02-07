describe("User should see a Movie Image, Title, and Rating for each movie in the library", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Should connect to localhost site", () => {
    cy.visit("http://localhost:3000");
  });

  it("User should see Movie images", () => {
    cy.get(".poster-image").should("be.visible");
  });

  it("User should see the Movie titles and ratings", () => {
    cy.get(".movie-title").should("be.visible");
  });

  it("User should see a star image", () => {
    cy.get(".star-image").should("be.visible");
  });
});
