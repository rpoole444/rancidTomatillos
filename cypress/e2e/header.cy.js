import { getByTitle } from "@testing-library/react";

describe("A user should see a Logo, Title, and SearchBar in the Header", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Should connect to localhost site", () => {
    cy.visit("http://localhost:3000");
  });

  it("Should display a title", () => {
    cy.get(".title-logo").contains("Rancid Tomatillos");
  });

  it("Should display a logo", () => {
    cy.get(".logo-image").should("be.visible");
  });

  it("Should display a search bar", () => {
    cy.get("input").should("be.visible");
  });
});
