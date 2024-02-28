import { Item } from "./Item";

/**
 * @class Box - Represents a box that can contain items
 */
export class Box<T extends Item> {
  private items: T[] = [];

  /**
   * Add an item to the box
   * @param item Item to add
   */
  addItem(item: T): void {
    this.items.push(item);
  }

  /**
   * Remove an item from the box
   * @param item Item to remove
   */
  removeItem(item: T): void {
    const index = this.items.indexOf(item);
    if (index > -1) {
      this.items.splice(index, 1);
    }
  }

  /**
   * List all items in the box (printed in console)
   */
  listItems(): void {
    console.log("- Items:");
    this.items.forEach((item) => console.log(" +", item.name));
    console.log("------");
  }

  /**
   * Find an item in the box by name
   * @param name Name of the item to find
   * @returns The item if found, undefined otherwise
   */
  findItem(name: string): T | undefined {
    return this.items.find((item) => item.name === name);
  }

  /**
   * Get the total number of items in the box
   * @returns Total number of items in the box
   */
  getItemCount(): number {
    return this.items.length;
  }

  /**
   * Get the items in the box
   * @returns Items in the box
   */
  getItems(): T[] {
    return this.items;
  }
}
