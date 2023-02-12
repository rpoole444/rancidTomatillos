describe("User should see a Movie Title, Trailer, Movie Details, and Back Button.", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/724495");
    cy.intercept(
      "GET",
      "https://rancid-tomatillos.herokuapp.com/api/v2/movies/:movie_id",
      () => {
        return {
          id: 724495,
          title: "The Woman King",
          poster_path:
            "https://image.tmdb.org/t/p/original//438QXt1E3WJWb3PqNniK0tAE5c1.jpg",
          backdrop_path:
            "https://image.tmdb.org/t/p/original//7zQJYV02yehWrQN6NjKsBorqUUS.jpg",
          release_date: "2022-09-15",
          overview:
            "The story of the Agojie, the all-female unit of warriors who protected the African Kingdom of Dahomey in the 1800s with skills and a fierceness unlike anything the world has ever seen, and General Nanisca as she trains the next generation of recruits and readies them for battle against an enemy determined to destroy their way of life.",
          genres: ["Action", "Drama", "History"],
          budget: 50000000,
          revenue: 91000000,
          runtime: 135,
          tagline: "Her reign begins.",
          average_rating: 4,
        };
      }
    );
  });

  it("Should connect to specific movie site based on url path", () => {
    cy.visit("http://localhost:3000/724495");
  });

  it("Should See a Movie title", () => {
    cy.get("h1").should("contain", "The Woman King");
  });

  it("Should See a Movie Trailer", () => {
    cy.get("iframe").should("be.visible");
  });

  it("Should see a movie overview", () => {
    cy.get("p").should(
      "contain",
      "The story of the Agojie, the all-female unit of warriors who protected the African Kingdom of Dahomey in the 1800s with skills and a fierceness unlike anything the world has ever seen, and General Nanisca as she trains the next generation of recruits and readies them for battle against an enemy determined to destroy their way of life."
    );
  });

  it("Should see a release date", () => {
    cy.get("p").should("contain", "2022-09-15");
  });

  it("Should see a film budget", () => {
    cy.get("p").should("contain", "50,000,000");
  });

  it("Should see a film revenue", () => {
    cy.get("p").should("contain", "91,000,000");
  });

  it("Should see a film runtime", () => {
    cy.get("p").should("contain", "135");
  });

  it("Should redirect to home if button is clicked", () => {
    cy.get("button").click();
    cy.url().should("eq", "http://localhost:3000/");
  });

  it('Should connect to "No Movies Found" page with an incorrect url path', () => {
    cy.visit("http://localhost:3000/thisisthewrongpath");
    cy.get(".no-video-found").should("be.visible");
  });

  it('"No Movies Found" page should contain a title and link home', () => {
    cy.visit("http://localhost:3000/thisisthewrongpath");
    cy.get("h1").contains("No Video Found");
    cy.contains("Go Home");
  });

  it("User should be redirected to the home page upon clicking link", () => {
    cy.visit("http://localhost:3000/thisisthewrongpath");
    cy.contains("Go Home").click();
    cy.url().should("eq", "http://localhost:3000/");
  });

  it('User should see "No trailer available" if there is no video link', () => {
    cy.visit("http://localhost:3000/820067");
    cy.contains("No trailer available");
  });
});
