import { Invoice } from "./Invoice";
import { InvoiceGenerator } from "./InvoiceGenerator";
import PDFDocument from "pdfkit";
import fs from "fs";

/**
 * @class PDFInvoiceGenerator - Represents a PDF invoice generator
 */
export class PDFInvoiceGenerator implements InvoiceGenerator {
  /**
   * Function to generate an invoice
   * @param {Invoice} invoice - The invoice to generate
   */
  generateInvoice(invoice: Invoice): void {
    // Generate invoice in PDF format
    const doc = new PDFDocument();

    doc.text(`Invoice Number: ${invoice.getNumber()}`);
    doc.text(`Client: ${invoice.getClient()}`);
    doc.text(`Details: ${invoice.getDetails()}`);
    doc.text(`Date: ${invoice.getDate().toLocaleDateString()}`);
    doc.text(`-----------------`);
    doc.text(`Products:`);
    doc.text("Name ----- Price - Quantity");
    doc.text(invoice.getFormattedProducts());
    doc.text(`-----------------`);
    doc.text(`Amount: ${invoice.getAmount()}€`);

    doc.pipe(
      fs.createWriteStream(`invoices/invoice_${invoice.getNumber()}.pdf`),
    );
    doc.end();
  }
}
