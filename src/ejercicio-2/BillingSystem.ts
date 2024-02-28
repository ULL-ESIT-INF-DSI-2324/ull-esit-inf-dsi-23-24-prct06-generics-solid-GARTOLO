import { Invoice } from "./Invoice";
import { InvoiceGenerator } from "./InvoiceGenerator";

/**
 * @class BillingSystem - Represents a billing system that generates invoices
 */
export class BillingSystem {
  private invoiceGenerator: InvoiceGenerator;

  constructor(invoiceGenerator: InvoiceGenerator) {
    this.invoiceGenerator = invoiceGenerator;
  }

  /**
   * Function to generate an invoice
   * @param {Invoice} invoice - The invoice to generate
   */
  public generateInvoice(invoice: Invoice) {
    this.invoiceGenerator.generateInvoice(invoice);
  }
}
