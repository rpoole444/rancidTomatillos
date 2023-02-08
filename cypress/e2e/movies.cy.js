describe("User should see a Movie Image, Title, and Rating for each movie in the library", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Should connect to localhost site", () => {
    cy.visit("http://localhost:3000");
  });

  it("User should see movie images", () => {
    cy.get(".poster-image").should("be.visible");
  });

  it("Should See a Movie title", () => {
    cy.get("h2").should("be.visible");
  });

  it("User should see a star image", () => {
    cy.get(".star-image").should( "be.visible");
  });

  it("User should see a user rating", () => {
    cy.get("h2").should( "be.visible");
  });

  
});
