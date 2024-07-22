import App from "./App";

const mockData = [
  { id: 1, title: "titre 1" },
  { id: 2, title: "titre 2" },
  { id: 3, title: "titre 3" },
  { id: 4, title: "titre 4" },
];

describe("<App />", () => {
  beforeEach(() => {
    cy.intercept("GET", "/posts", mockData).as("getPosts");

    cy.intercept("GET", "/posts/**", (request) => {
      const { url } = request;
      const id = url.split("/posts/")[1];

      expect(id).equal("4");

      request.reply(mockData[parseInt(id) - 1]);
    });
  });

  it("Should show lists", () => {
    cy.mount(<App />);

    cy.contains("titre 1");
    cy.contains("titre 2");
    cy.contains("titre 3");
    cy.contains("titre 4");

    cy.get(":nth-child(4) > .column-title").click();
  });

  it("Should update list", () => {
    cy.mount(<App />);
    cy.contains("titre 4");
  });
});
