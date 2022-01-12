/// <reference types="cypress" />

describe("Resources page", () => {
  beforeEach(() => {
    cy.viewport("macbook-11");
    // cy.visit("http://uitestingplayground.com/");
  });
  it("Verify 'Home' link & URL is valid and exists.", () => {
    cy.visit("http://uitestingplayground.com/");
    cy.get('a[href*="home"]').click();
    cy.url().should("include", "/home");
  });
  it("Verify the header 'meta tag' details of the Home page for SEO.", () => {
    cy.get('head meta[name="viewport"]').should(
      "have.attr",
      "content",
      "width=device-width, initial-scale=1, shrink-to-fit=no"
    );
  });
  it("Verify the header 'title tag' details of the Home page.", () => {
    cy.get("head title").should("contain", "UI Test Automation Playground");
  });

  it("Verify the 'Dynamic ID' link & URL is valid and exists in the Home page.", () => {
    cy.get('a[href*="dynamicid"]').click();
    cy.url().should("include", "/dynamicid");
    cy.go("back");
  });
  it("Verify the 'Class Attribute' link & URL is valid and exists in the Home page.", () => {
    cy.get('a[href*="classattr"]').click();
    cy.url().should("include", "/classattr");
    cy.go("back");
  });
  it("Verify the 'Hidden Layers' link & URL is valid and exists in the Home page.", () => {
    cy.get('a[href*="hiddenlayers"]').click();
    cy.url().should("include", "/hiddenlayers");
    cy.go("back");
  });
  it("Verify the 'Load Delay' link & URL is valid and exists in the Home page.", () => {
    cy.get('a[href*="dynamicid"]').click();
    cy.url().should("include", "/dynamicid");
    cy.go("back");
  });
  it("Verify the 'AJAX Data' link & URL is valid and exists in the Home page.", () => {
    cy.get('a[href*="ajax"]').click();
    cy.url().should("include", "/ajax");
    cy.go("back");
  });
  it("Verify the 'Client Side Delay' link & URL is valid and exists in the Home page.", () => {
    cy.get('a[href*="clientdelay"]').click();
    cy.url().should("include", "/clientdelay");
    cy.go("back");
  });
  it("Verify the 'Click' link & URL is valid and exists in the Home page.", () => {
    cy.get('a[href*="click"]').click();
    cy.url().should("include", "/click");
    cy.go("back");
  });
  it("Verify the 'Text Input' link & URL is valid and exists in the Home page.", () => {
    cy.get('a[href*="textinput"]').click();
    cy.url().should("include", "/textinput");
    cy.go("back");
  });
  it("Verify the 'Scrollbars' link & URL is valid and exists in the Home page.", () => {
    cy.get('a[href*="scrollbars"]').click();
    cy.url().should("include", "/scrollbars");
    cy.go("back");
  });
  it("Verify the 'Dynamic Table' link & URL is valid and exists in the Home page.", () => {
    cy.get('a[href*="dynamictable"]').click();
    cy.url().should("include", "/dynamictable");
    cy.go("back");
  });
  it("Verify the 'Verify Text' link & URL is valid and exists in the Home page.", () => {
    cy.get('a[href*="verifytext"]').click();
    cy.url().should("include", "/verifytext");
    cy.go("back");
  });
  it("Verify the 'Progress Bar' link & URL is valid and exists in the Home page.", () => {
    cy.get('a[href*="progressbar"]').click();
    cy.url().should("include", "/progressbar");
    cy.go("back");
  });
  it("Verify the 'Visibility' link & URL is valid and exists in the Home page.", () => {
    cy.get('a[href*="visibility"]').click();
    cy.url().should("include", "/visibility");
    cy.go("back");
  });
  it("Verify the 'Sample App' link & URL is valid and exists in the Home page.", () => {
    cy.get('a[href*="sampleapp"]').click();
    cy.url().should("include", "/sampleapp");
    cy.go("back");
  });
  it("Verify the 'Mouse Over' link & URL is valid and exists in the Home page.", () => {
    cy.get('a[href*="mouseover"]').click();
    cy.url().should("include", "/mouseover");
    cy.go("back");
  });
  it("Verify the 'Non-Breaking Space' link & URL is valid and exists in the Home page.", () => {
    cy.get('a[href*="nbsp"]').click();
    cy.url().should("include", "/nbsp");
    cy.go("back");
  });
  it("Verify the 'Overlapped Element' link & URL is valid and exists in the Home page.", () => {
    cy.get('a[href*="overlapped"]').click();
    cy.url().should("include", "/overlapped");
    cy.go("back");
  });
  it("Verify the 'UITAP' link & URL is valid and exists in the Home page.", () => {
    cy.get('[class="navbar-brand"]').click();
    cy.url().should("include", "uitestingplayground.com/");
    cy.go("back");
  });
  it("Verify all the texts exists in the home page.", () => {
    cy.contains("UITAP").should("exist");
    cy.contains("Resources").should("exist");
    cy.contains("Home").should("exist");
    cy.contains("UI Test Automation").should("exist");
    cy.contains("Playground").should("exist");
    cy.contains("Quality is not an act, it is a habit.").should("exist");
    cy.contains("Aristotle").should("exist");
    cy.contains(
      "The purpose of this website is to provide a platform for sharpening UI test automation skills. Use it to practice with your test automation tool. Use it to learn test automation techniques."
    ).should("exist");
    cy.contains(
      "Different automation pitfalls appearing in modern web applications are described and emulated below."
    ).should("exist");
    cy.contains(
      "Make sure you are not recording dynamic IDs of elements"
    ).should("exist");
    cy.contains("Check that class attribute based XPath is well formed").should(
      "exist"
    );
    cy.contains(
      "Verify that your test does not interact with elements invisible because of z-order"
    ).should("exist");
    cy.contains(
      "Ensure that a test is capable of waiting for a page to load"
    ).should("exist");
    cy.contains(
      "Some elements may appear on a page after loading data with AJAX request"
    ).should("exist");
    cy.contains(
      "Some elements may appear after client-side time consuming JavaScript calculations"
    ).should("exist");
    cy.contains("Event based click on an element may not always work").should(
      "exist"
    );
    cy.contains("Entering text into an edit field may not have effect").should(
      "exist"
    );
    cy.contains("Scrolling an element into view may be a tricky task").should(
      "exist"
    );
    cy.contains("Verify cell value in a dynamic table").should("exist");
    cy.contains("Finding an element by displayed text has nuances").should(
      "exist"
    );
    cy.contains(
      "Follow the progress of a lengthy process and continue upon completion"
    ).should("exist");
    cy.contains("Check if element is visible on screen").should("exist");
    cy.contains(
      "Demo application with dynamically generated element attributes"
    ).should("exist");
    cy.contains(
      "Placing mouse over an element may change DOM and make the element unavailable"
    ).should("exist");
    cy.contains(
      "Non-breaking space looks like a normal one on screen. It may lead to confusion when building XPath"
    ).should("exist");
    cy.contains("Make element visible to enter text").should("exist");
    cy.contains("Rubik's Cube is licensed under CC 4.0 BY-NC").should("exist");
  });
});
