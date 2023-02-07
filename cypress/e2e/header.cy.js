import { getByTitle } from "@testing-library/react";

describe("A user should see a Logo, Title, and SearchBar in the Header", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Should connect to localhost site", () => {
    cy.visit("http://localhost:3000");
  });

  it("Should display a Title", () => {
    cy.get(".title-logo").contains("Rancid Tomatillos");
  });

  it("Should display a Logo", () => {
    cy.get(".logo-image").should("be.visible");
  });

  it("Should display a search Bar", () => {
    cy.get("input").should("be.visible");
  });
});
