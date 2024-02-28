import { Invoice } from "./Invoice";

/**
 * Interface to represent the invoice generator
 */
export interface InvoiceGenerator {
  /**
   * Function to generate an invoice
   * @param {Invoice} invoice - The invoice to generate
   */
  generateInvoice(invoice: Invoice): void;
}
