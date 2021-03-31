import { User } from "models";

describe("Cypress Studio Demo", function () {
  beforeEach(function () {
    cy.task("db:seed");

    cy.database("find", "users").then((user: User) => {
      cy.login(user.username, "s3cret", true);
    });
  });
  it("create new transaction", function () {
    /* ==== Generated with Cypress Studio ==== */
    cy.get(".MuiButton-label").click();
    cy.get(
      "[data-test=user-list-item-qywYp6hS0U] > .MuiListItemText-root > .MuiListItemText-primary"
    ).click();
    cy.get("#amount").clear();
    cy.get("#amount").type("$124.12");
    cy.get("#transaction-create-description-input").clear();
    cy.get("#transaction-create-description-input").type("A new transaction note.");
    cy.get("[data-test=transaction-create-submit-payment] > .MuiButton-label").click();
    cy.get("[data-test=new-transaction-return-to-transactions] > .MuiButton-label").click();
    cy.get(
      "[data-test=transaction-item-h9K5XQFy0] > .MuiPaper-root > :nth-child(1) > .MuiGrid-grid-xs-12 > .MuiGrid-spacing-xs-2 > .MuiGrid-grid-xs-true > .makeStyles-socialStats-100 > :nth-child(1) > .MuiSvgIcon-root"
    ).click();
    cy.get("[data-test=transaction-comment-input-h9K5XQFy0]").clear();
    cy.get("[data-test=transaction-comment-input-h9K5XQFy0]").type("Edgar paid Arely{enter}");
    cy.get("[data-test=sidenav-home] > .MuiListItemText-root > .MuiTypography-root").click();
    /* ==== End Cypress Studio ==== */
  });
  it("create new bank account", function () {
    // Extend test with Cypress Studio
  });
});
