import { Arithmeticable } from "./Arithmeticable";

/**
 * @class ArithmeticableCollection - Stores a collection of Arithmeticable
 */
export class ArithmeticableCollection<T extends Arithmeticable<T>> {
  constructor(private collection: T[] = []) {}

  /**
   * Function to add an element to the collection
   * @param element to add
   */
  public addArithmeticable(element: T) {
    this.collection.push(element);
  }

  /**
   * Function to get an element from the collection by array
   * @param index to search
   * @returns element or undefined if out of range
   */
  public getArithmeticable(index: number) {
    return this.collection[index];
  }

  /**
   * Function to get the number of Arithmeticables
   * @returns number
   */
  public getNumberOfArithmeticables() {
    return this.collection.length;
  }
}
