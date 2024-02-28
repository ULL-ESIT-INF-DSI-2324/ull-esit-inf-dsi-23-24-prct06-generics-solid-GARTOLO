import { expect } from "chai";
import { Invoice } from "../../src/ejercicio-2/Invoice";

describe("Invoice", () => {
  const invoice = new Invoice(1, "John Doe", "Details", [
    { product: { name: "Product 1", price: 100 }, quantity: 2 },
    { product: { name: "Product 2", price: 200 }, quantity: 1 },
    { product: { name: "Product 3", price: 300 }, quantity: 3 },
  ]);

  it("should return the amount of the invoice", () => {
    expect(invoice.getAmount()).to.equal(1300);
  });

  it("should return the formatted products of the invoice", () => {
    expect(invoice.getFormattedProducts()).to.equal(
      "Product 1 - 100€ - 2\nProduct 2 - 200€ - 1\nProduct 3 - 300€ - 3",
    );
  });

  it("should return the number of the invoice", () => {
    expect(invoice.getNumber()).to.equal(1);
  });

  it("should return the client of the invoice", () => {
    expect(invoice.getClient()).to.equal("John Doe");
  });

  it("should return the details of the invoice", () => {
    expect(invoice.getDetails()).to.equal("Details");
  });

  it("should return the date of the invoice", () => {
    expect(invoice.getDate()).to.be.an.instanceOf(Date);
  });

  it("should return the products of the invoice", () => {
    expect(invoice.getProducts()).to.deep.equal([
      { product: { name: "Product 1", price: 100 }, quantity: 2 },
      { product: { name: "Product 2", price: 200 }, quantity: 1 },
      { product: { name: "Product 3", price: 300 }, quantity: 3 },
    ]);
  });
});
