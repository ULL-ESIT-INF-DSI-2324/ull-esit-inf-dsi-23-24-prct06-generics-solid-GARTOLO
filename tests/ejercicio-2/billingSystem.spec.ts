import { expect } from "chai";
import { BillingSystem } from "../../src/ejercicio-2/BillingSystem";
import { PDFInvoiceGenerator } from "../../src/ejercicio-2/PDFInvoiceGenerator";
import { Invoice } from "../../src/ejercicio-2/Invoice";

describe("BillingSystem", () => {
  it("should generate an invoice using the invoice generator", () => {
    const invoice: Invoice = new Invoice(1, "John Doe", "Details", [
      { product: { name: "Product 1", price: 100 }, quantity: 2 },
      { product: { name: "Product 2", price: 200 }, quantity: 1 },
      { product: { name: "Product 3", price: 300 }, quantity: 3 },
    ]);

    const invoiceGenerator = new PDFInvoiceGenerator();
    const billingSystem = new BillingSystem(invoiceGenerator);

    expect(billingSystem.generateInvoice(invoice)).to.equal(undefined);
  });
});
