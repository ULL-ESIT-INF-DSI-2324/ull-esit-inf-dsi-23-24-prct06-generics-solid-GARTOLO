// Mejora del código para mantener el principio de segregación de interfaces

/**
 * Interface that defines the behavior of a printable object
 */
interface Printable {
  print(): void;
}

/**
 * Interface that defines the behavior of a scannable object
 */
interface Scannable {
  scan(): void;
}

/**
 * @class Printer - represents a printer
 */
export class Printer implements Printable {
  print(): void {
    console.log("Printing...");
  }
}

/**
 * @class Scanner - represents a scanner
 */
export class Scanner implements Scannable {
  scan(): void {
    console.log("Scanning...");
  }
}

/**
 * @class PrinterScanner - represents a printer and scanner device
 */
export class PrinterScanner implements Printable, Scannable {
  print(): void {
    console.log("Printing...");
  }

  scan(): void {
    console.log("Scanning...");
  }
}

// // Client code
// const printer = new Printer();
// // Printing
// printer.print();

// const scanner = new Scanner();
// // Scanning
// scanner.scan();

// const printerScanner = new PrinterScanner();
// // Printing
// printerScanner.print();
// // Scanning
// printerScanner.scan();
