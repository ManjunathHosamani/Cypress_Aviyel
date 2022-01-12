/// <reference types="cypress" />

describe("Resources page", () => {
  beforeEach(() => {
    cy.viewport("macbook-11");
    // cy.visit("http://uitestingplayground.com/resources");
  });
  it("Verify 'Resources' link & URL is valid and exists.", () => {
    cy.visit("http://uitestingplayground.com/resources");
    cy.get('a[href*="resources"]').click();
    cy.url().should("include", "/resources");
  });
  it("Verify the header 'meta tag' details of the Home page for SEO.", () => {
    cy.get('head meta[name="viewport"]').should(
      "have.attr",
      "content",
      "width=device-width, initial-scale=1, shrink-to-fit=no"
    );
  });
  it("Verify the header 'title tag' details of the Home page.", () => {
    cy.get("head title").should("contain", "Resources");
  });
  it("Verify the 'w3schools.com' link & URL is valid and exists in the Resources page under Learning section.", () => {
    cy.get('a[href*="https://www.w3schools.com"]');
    cy.contains("w3schools.com").should("exist");
  });
  it("Verify the 'MDN' link & URL is valid and exists in the Resources page under Learning section.", () => {
    cy.get('a[href*="https://developer.mozilla.org/en-US"]');
    cy.contains("MDN").should("exist");
  });
  it("Verify the 'Learn regex the easy way' link & URL is valid and exists in the Resources page under Learning section.", () => {
    cy.get('a[href*="https://github.com/zeeshanu/learn-regex"]');
    cy.contains("Learn regex the easy way").should("exist");
  });
  it("Verify the 'devhints.io' link & URL is valid and exists in the Resources page under Learning section.", () => {
    cy.get('a[href*="https://devhints.io"]');
    cy.contains("devhints.io").should("exist");
  });
  it("Verify the 'W3C' link & URL is valid and exists in the Resources page under Standards section.", () => {
    cy.get('a[href*="https://www.w3.org"]');
    cy.contains("W3C").should("exist");
  });
  it("Verify the 'Test Pyramid' link & URL is valid and exists in the Resources page under Articles section.", () => {
    cy.get('a[href*="https://martinfowler.com/bliki/TestPyramid.html"]');
    cy.contains("Test Pyramid").should("exist");
  });
  it("Verify the 'Where do our flaky tests come from?' link & URL is valid and exists in the Resources page.", () => {
    cy.get(
      'a[href*="https://testing.googleblog.com/2017/04/where-do-our-flaky-tests-come-from.html"]'
    );
    cy.contains("Where do our flaky tests come from?").should("exist");
  });
  it("Verify the 'Ministry of Testing' link & URL is valid and exists in the Resources page under Community section.", () => {
    cy.get('a[href*="https://ministryoftesting.com"]');
    cy.contains("Ministry of Testing").should("exist");
  });
  it("Verify the 'uTest' link & URL is valid and exists in the Resources page under Community section.", () => {
    cy.get('a[href*="https://www.utest.com"]');
    cy.contains("uTest").should("exist");
  });
  it("Verify the 'Software Testing Help' link & URL is valid and exists in the Resources page under Community section.", () => {
    cy.get('a[href*="https://www.softwaretestinghelp.com"]');
    cy.contains("Software Testing Help").should("exist");
  });
  it("Verify the 'DZone' link & URL is valid and exists in the Resources page under Community section.", () => {
    cy.get('a[href*="https://dzone.com"]');
    cy.contains("DZone").should("exist");
  });
  it("Verify the 'StackOverflow' link & URL is valid and exists in the Resources page under Community section.", () => {
    cy.get('a[href*="https://stackoverflow.com"]');
    cy.contains("StackOverflow").should("exist");
  });
  it("Verify all the texts exists in the Resources page.", () => {
    cy.contains("UITAP").should("exist");
    cy.contains("Resources").should("exist");
    cy.contains("Home").should("exist");
    cy.contains("Learning").should("exist");
    cy.contains("Standards").should("exist");
    cy.contains("Articles").should("exist");
    cy.contains("Community").should("exist");
  });
});
