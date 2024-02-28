type Product = {
  name: string;
  price: number;
};

type Article = {
  product: Product;
  quantity: number;
};

/**
 * @class Invoice - Represents an invoice
 */
export class Invoice {
  private number: number;
  private client: string;
  private details: string;
  private amount: number;
  private date: Date;
  private products: Article[];

  constructor(
    number: number,
    client: string,
    details: string,
    products: Article[],
  ) {
    this.number = number;
    this.client = client;
    this.details = details;
    this.products = products;
    this.amount = this.calculateAmount();
    this.date = new Date();
  }

  /**
   * Function to calculate the amount of the invoice
   * @returns {number} - The amount of the invoice
   */
  private calculateAmount(): number {
    return this.products.reduce((acc, article) => {
      return acc + article.product.price * article.quantity;
    }, 0);
  }

  /**
   * Function to get the invoice amount
   * @returns {number} - The amount of the invoice
   */
  public getAmount(): number {
    return this.amount;
  }

  /**
   * Function to get the invoice number
   * @returns {number} - The number of the invoice
   */
  public getNumber(): number {
    return this.number;
  }

  /**
   * Function to get the invoice client
   * @returns {string} - The client of the invoice
   */
  public getClient(): string {
    return this.client;
  }

  /**
   * Function to get the invoice details
   * @returns {string} - The details of the invoice
   */
  public getDetails(): string {
    return this.details;
  }

  /**
   * Function to get the invoice date
   * @returns {Date} - The date of the invoice
   */
  public getDate(): Date {
    return this.date;
  }

  /**
   * Function to get the invoice products
   * @returns {Article[]} - The products of the invoice
   */
  public getProducts(): Article[] {
    return this.products;
  }

  /**
   * Function to get the invoice products formatted
   * @returns {string} - The products of the invoice formatted
   */
  public getFormattedProducts(): string {
    return this.products
      .map((article) => {
        return `${article.product.name} - ${article.product.price}€ - ${article.quantity}`;
      })
      .join("\n");
  }
}
