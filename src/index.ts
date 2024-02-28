// Ejercicio 1
import { Box } from "./ejercicio-1/Box";
import { Item } from "./ejercicio-1/Item";
import { MovingService } from "./ejercicio-1/MovingService";

// Create some items
const item1: Item = { name: "Laptop" };
const item2: Item = { name: "Monitor" };
const item3: Item = { name: "Keyboard" };

// Create a box and add items to it
const box1 = new Box<Item>();
box1.addItem(item1);
box1.addItem(item2);

// Create another box and add an item to it
const box2 = new Box<Item>();
box2.addItem(item3);

// Create a moving service and add boxes to it
const movingService = new MovingService<Item>();
movingService.addBox(box1);
movingService.addBox(box2);

// List all boxes in the moving service
movingService.listBoxes();

// Find an item in the moving service
const foundItem = movingService.findItem("Laptop");
console.log("Found item:", foundItem);

// Get the total number of items in the moving service
const itemCount = movingService.getItemCount();
console.log("Total number of items:", itemCount);

console.log("-------------------");

// Ejercicio 2
import { HTMLInvoiceGenerator } from "./ejercicio-2/HTMLInvoiceGenerator";
import { Invoice } from "./ejercicio-2/Invoice";
import { PDFInvoiceGenerator } from "./ejercicio-2/PDFInvoiceGenerator";
import { BillingSystem } from "./ejercicio-2/BillingSystem";

const invoice = new Invoice(1, "John Doe", "Details", [
  { product: { name: "Product 1", price: 100 }, quantity: 2 },
  { product: { name: "Product 2", price: 200 }, quantity: 1 },
  { product: { name: "Product 3", price: 300 }, quantity: 3 },
]);

console.log("Total amount:", invoice.getAmount());

const billingSystem = new BillingSystem(new PDFInvoiceGenerator());
billingSystem.generateInvoice(invoice);

const billingSystem2 = new BillingSystem(new HTMLInvoiceGenerator());
billingSystem2.generateInvoice(invoice);

console.log("-------------------");

// Ejercicio 3
import { FileReader, FileWriter } from "./ejercicio-3/ejercicio-3";
// Client code
const fileReader = new FileReader("example.txt");
const fileWriter = new FileWriter("example.txt");

// Reading content
const currentContent = fileReader.readFile();
console.log("Current content:", currentContent);

// Writing content
const newData = "This is new content to be written into the file.";
fileWriter.writeFile(newData);

// Updating content
const updatedContent = fileReader.readFile();
console.log("Updated content:", updatedContent);

console.log("-------------------");

// Ejercicio 4
import { Printer, Scanner, PrinterScanner } from "./ejercicio-4/ejercicio-4";

// Client code
const printer = new Printer();
// Printing
printer.print();

const scanner = new Scanner();
// Scanning
scanner.scan();

const printerScanner = new PrinterScanner();
// Printing
printerScanner.print();
// Scanning
printerScanner.scan();

console.log("-------------------");

// Ejercicio 5
import {
  Notifier,
  EmailService,
  ShortMessageService,
} from "./ejercicio-5/ejercicio-5";

const emailNotifier = new Notifier(new EmailService());
emailNotifier.sendNotification("Hello World!");

const shortMessageNotifier = new Notifier(new ShortMessageService());
shortMessageNotifier.sendNotification("Hello World!");
