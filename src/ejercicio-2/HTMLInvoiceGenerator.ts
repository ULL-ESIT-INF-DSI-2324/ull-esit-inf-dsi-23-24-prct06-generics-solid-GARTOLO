import { Invoice } from "./Invoice";
import { InvoiceGenerator } from "./InvoiceGenerator";
import fs from "fs";

/**
 * @class HTMLInvoiceGenerator - Represents a HTML invoice generator
 */
export class HTMLInvoiceGenerator implements InvoiceGenerator {
  /**
   * Function to generate an invoice
   * @param {Invoice} invoice - The invoice to generate
   */
  generateInvoice(invoice: Invoice) {
    const htmlContent = `
          <!DOCTYPE html>
          <html>
          <head>
            <style>
              table {
                width: 100%;
                border-collapse: collapse;
              }
              table, th, td {
                border: 1px solid black;
              }
            </style>
          </head>
          <h1>Invoice Number: ${invoice.getNumber()}</h1>
          <p>Client: ${invoice.getClient()}</p>
          <p>Details: ${invoice.getDetails()}</p>
          <p>Date: ${invoice.getDate().toLocaleDateString()}</p>
          <hr>
          <h2>Products:</h2>
          <table>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
            </tr>
            ${invoice
              .getProducts()
              .map(
                (article) => `
              <tr>
                <td>${article.product.name}</td>
                <td>${article.product.price}€</td>
                <td>${article.quantity}</td>
              </tr>
            `,
              )
              .join("")}
          </table>
          <hr>
          <p>Amount: ${invoice.getAmount()}€</p>
          </html>
      `;

    fs.writeFileSync(
      `invoices/invoice_${invoice.getNumber()}.html`,
      htmlContent,
    );
  }
}
