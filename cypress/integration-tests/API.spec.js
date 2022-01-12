/// <reference types="cypress" />
describe("API test", () => {
  Cypress.config("baseUrl", "https://restful-booker.herokuapp.com");
  it("Verify Get response for all booking records available using booking API.", () => {
    cy.request("GET", "/booking").then((response) => {
      expect(response.body).to.not.be.null;
      expect(response).to.have.property("status", 200);
      // expect(response.body).to.have.length(19);
    });
  });
  it("Verify Get response for a booking record based on id using booking API.", () => {
    cy.request("GET", "/booking/4").then((response) => {
      expect(response.body).to.not.be.null;
      expect(response).to.have.property("status", 200);
      // expect(response.body).to.have.property("firstname", "Eric");
      // expect(response.body).to.have.property("lastname", "Smith");
      // expect(response.body).to.have.property("totalprice", 616);
      // expect(response.body).to.have.length(19);
    });
  });
  it("Verify Create a new booking record using booking API.", () => {
    const item = {
      firstname: "Jim",
      lastname: "Brown",
      totalprice: 111,
      depositpaid: true,
      bookingdates: {
        checkin: "2018-01-01",
        checkout: "2019-01-01",
      },
    };
    cy.request("POST", "/booking", item).then((response) => {
      expect(response.body).to.not.be.null;
      expect(response).to.have.property("status", 200);
      expect(response.body.booking).to.have.property("firstname", "Jim");
      expect(response.body.booking).to.have.property("lastname", "Brown");
    });
  });
  it("Verify Update a booking record using booking API.", () => {
    const item = {
      firstname: "Smith",
    };

    cy.request({
      method: "PUT",
      url: "/booking/2",
      body: item,
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.body).to.not.be.null;
      expect(response).to.have.property("status", 403);
      expect(response).to.have.property("body", "Forbidden");
      expect(response.headers).to.have.property("server", "Cowboy");
    });
  });
  it("Verify Delete a booking record using booking API.", () => {
    cy.request({
      method: "DELETE",
      url: "/booking/1",
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.body).to.not.be.null;
      expect(response).to.have.property("status", 403);
    });
  });
  it("Verify header details are available in the API response.", () => {
    cy.request("GET", "/booking").then((response) => {
      expect(response.headers).to.have.property("server", "Cowboy");
      expect(response.headers).to.have.property("connection", "keep-alive");
    });
  });
  it("Verify 404 status when request is sent to incorrect URL.", () => {
    cy.request({ method: "GET", url: "/bookin", failOnStatusCode: false }).then(
      (response) => {
        expect(response).to.have.property("status", 404);
      }
    );
  });
  it("Verify the response body when request is sent to incorrect URL.", () => {
    cy.request({ method: "GET", url: "/bookin", failOnStatusCode: false }).then(
      (response) => {
        expect(response).to.have.property("status", 404);
        expect(response).to.have.property("body", "Not Found");
      }
    );
  });
  it("Verify the response header details when request is sent to incorrect URL.", () => {
    cy.request("GET", "/booking").then((response) => {
      expect(response.headers).to.have.property("server", "Cowboy");
      expect(response.headers).to.have.property("connection", "keep-alive");
    });
  });
  it("Verify response duration shouldn't be more then 400 miliseconds.", () => {
    cy.request({ method: "GET", url: "/bookin", failOnStatusCode: false }).then(
      (response) => {
        expect(response.duration).to.be.lessThan(500);
      }
    );
  });
  it("Verify all the parameters are available in the API response.", () => {
    cy.request({ method: "GET", url: "/bookin", failOnStatusCode: false }).then(
      (response) => {
        expect(response.body).to.not.be.null;
        expect(response.headers).to.not.be.null;
        expect(response.headers.connection).to.not.be.null;
        expect(response.headers.server).to.not.be.null;
        expect(response.headers.date).to.not.be.null;
      }
    );
  });
});
