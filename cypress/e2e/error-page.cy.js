describe("A user should see an error page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/436270/thisiswrong");
  });

  it("User should be redirect to an Error page if the URL is incorrect", () => {
    cy.get('div[class="error-page"]').should("be.visible");
  });

  it("User should see the 404 error", () => {
    cy.get("h1").should("be.visible");
  });

  it('User should see the "Page Not Found" message', () => {
    cy.get("h2").should("be.visible");
  });

  it("User should see the broken robot image", () => {
    cy.get("img").should("be.visible");
  });

  it("User should be redirected to the home page upon clicking link", () => {
    cy.contains("Go Home").click();
    cy.url().should("eq", "http://localhost:3000/");
  });
});
