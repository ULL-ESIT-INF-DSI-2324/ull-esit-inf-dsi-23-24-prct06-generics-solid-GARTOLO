import { Box } from "./Box";
import { Item } from "./Item";

/**
 * @class MovingService - Represents a moving with some boxes
 */
export class MovingService<T extends Item> {
  private boxes: Box<T>[] = [];

  /**
   * Add a box to the moving
   * @param box Box to add
   */
  addBox(box: Box<T>): void {
    this.boxes.push(box);
  }

  /**
   * Remove a box from the moving
   * @param box Box to remove
   */
  removeBox(box: Box<T>): void {
    const index = this.boxes.indexOf(box);
    if (index > -1) {
      this.boxes.splice(index, 1);
    }
  }

  /**
   * List all boxes in the moving (printed in console)
   */
  listBoxes(): void {
    console.log("Boxes:");
    this.boxes.forEach((box) => box.listItems());
    console.log("--------------");
  }

  /**
   * Find an item in the moving by name
   * @param name Name of the item to find
   * @returns The item if found, undefined otherwise
   */
  findItem(name: string): T | undefined {
    for (const box of this.boxes) {
      const item = box.findItem(name);
      if (item) {
        return item;
      }
    }
    return undefined;
  }

  /**
   * Get the total number of items in the moving
   * @returns Total number of items in the moving
   */
  getItemCount(): number {
    return this.boxes.reduce((total, box) => total + box.getItemCount(), 0);
  }
}
