import { expect } from "chai";
import { ArithmeticableCollection } from "../../src/mod-1/ArithmeticableCollection";
import { Complex } from "../../src/mod-1/Complex";
import { Rational } from "../../src/mod-1/Rational";

const collection = new ArithmeticableCollection<Complex>([
  new Complex(1, 2),
  new Complex(4, 3),
]);

// it("(1,2) + (4,3) shoud return (5,5)", () => {
//   expect(collection.getArithmeticable(1).add(collection.getArithmeticable(0))).to.equal(new Complex(5,5));
// })

describe("Modificacion 1", () => {
  it("Complex (1,2) + (4,3) should return (5,5)", () => {
    expect(new Complex(1, 2).add(new Complex(4, 3))).to.deep.equal(
      new Complex(5, 5),
    );
  });

  it("Complex (1,2) - (4,3) should return (5,5)", () => {
    expect(new Complex(1, 2).substract(new Complex(4, 3))).to.deep.equal(
      new Complex(-3, -1),
    );
  });

  it("Complex (1,3) * (5,1) should return (2,16)", () => {
    expect(new Complex(1, 3).multiply(new Complex(5, 1))).to.deep.equal(
      new Complex(2, 16),
    );
  });

  it("Complex (2,2) / (2,2) should return (1,1)", () => {
    expect(new Complex(2, 2).divide(new Complex(2, 2))).to.deep.equal(
      new Complex(1, 0),
    );
  });

  it("Rational (1,2) + (1,2) should return (1,1)", () => {
    expect(new Rational(1, 2).add(new Rational(1, 2))).to.deep.equal(
      new Rational(1, 1),
    );
  });

  it("Rational (1,2) - (1,2) should return (0,0)", () => {
    expect(new Rational(1, 2).substract(new Rational(1, 2))).to.deep.equal(
      new Rational(0, 0),
    );
  });

  it("Rational (1,2) * (1,2) should return (1,4)", () => {
    expect(new Rational(1, 2).multiply(new Rational(1, 2))).to.deep.equal(
      new Rational(1, 4),
    );
  });

  it("Rational (1,2) / (1,2) should return (1,1)", () => {
    expect(new Rational(1, 2).divide(new Rational(1, 2))).to.deep.equal(
      new Rational(1, 1),
    );
  });

  it("Collection.getgetArithmeticable(1) should return 4,3", () => {
    expect(collection.getArithmeticable(1)).to.deep.equal(new Complex(4, 3));
  });

  it("Collection.getNumberOfArithmeticables() should return 2", () => {
    expect(collection.getNumberOfArithmeticables()).to.deep.equal(2);
  });

  it("Collection.addArithmeticable(new Complex(1,2)) should return 3", () => {
    expect(collection.addArithmeticable(new Complex(1, 2))).to.be.undefined;
  });
});
