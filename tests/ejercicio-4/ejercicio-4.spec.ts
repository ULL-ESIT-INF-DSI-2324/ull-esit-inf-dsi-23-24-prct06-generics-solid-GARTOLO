import { expect } from "chai";
import { Printer, Scanner, PrinterScanner } from "../../src/ejercicio-4/ejercicio-4";

describe("Printer", () => {
  it("should print", () => {
    const printer = new Printer();
    expect(printer.print()).to.equal(undefined);
  });

  it("should scan", () => {
    const scanner = new Scanner();
    expect(scanner.scan()).to.equal(undefined);
  });

  it("should print and scan", () => {
    const printerScanner = new PrinterScanner();
    expect(printerScanner.print()).to.equal(undefined);
    expect(printerScanner.scan()).to.equal(undefined);
  });
});