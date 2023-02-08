describe("User should see a Movie Title, Trailer, Movie Details, and Back Button.", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/724495");
    cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies/:movie_id", () => {
    return  {
      id: 724495,
      title: "The Woman King",
      poster_path: "https://image.tmdb.org/t/p/original//438QXt1E3WJWb3PqNniK0tAE5c1.jpg",
      backdrop_path: "https://image.tmdb.org/t/p/original//7zQJYV02yehWrQN6NjKsBorqUUS.jpg",
      release_date: "2022-09-15",
      overview: "The story of the Agojie, the all-female unit of warriors who protected the African Kingdom of Dahomey in the 1800s with skills and a fierceness unlike anything the world has ever seen, and General Nanisca as she trains the next generation of recruits and readies them for battle against an enemy determined to destroy their way of life.",
      genres: [
      "Action",
      "Drama",
      "History"
      ],
      budget: 50000000,
      revenue: 91000000,
      runtime: 135,
      tagline: "Her reign begins.",
      average_rating: 4
      }
    })
  });

  it("Should connect to specific movie site", () => {
    cy.visit("http://localhost:3000/724495");
  });

  it("Should See a Movie title", () => {
    cy.get("h1").should("contain", "The Woman King");
  });

  it("Should See a Movie Trailer", () => {
    cy.get('iframe')
    .should('be.visible')
  });

  it("Should see a movie tagline", () => {
    cy.get("p").should("contain", "Her reign begins.");

  });

  it("Should see a movie overview", () => {
    cy.get("p").should("contain", "The story of the Agojie, the all-female unit of warriors who protected the African Kingdom of Dahomey in the 1800s with skills and a fierceness unlike anything the world has ever seen, and General Nanisca as she trains the next generation of recruits and readies them for battle against an enemy determined to destroy their way of life.");
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
});
