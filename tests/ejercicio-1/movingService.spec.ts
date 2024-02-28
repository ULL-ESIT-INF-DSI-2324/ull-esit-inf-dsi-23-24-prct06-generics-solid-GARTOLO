import { expect } from "chai";
import { Item } from "../../src/ejercicio-1/Item";
import { Box } from "../../src/ejercicio-1/Box";
import { MovingService } from "../../src/ejercicio-1/MovingService";

describe("MovingService", () => {
  const item1: Item = { name: "Laptop" };
  const item2: Item = { name: "Monitor" };
  const item3: Item = { name: "Keyboard" };

  const box1 = new Box<Item>();
  box1.addItem(item1);
  box1.addItem(item2);

  const box2 = new Box<Item>();
  box2.addItem(item3);

  it("should add an item", () => {
    box2.addItem(item1);
    expect(box2.getItemCount()).to.equal(2);
  });

  const movingService = new MovingService<Item>();
  movingService.addBox(box1);
  movingService.addBox(box2);

  it("should return the correct number of items", () => {
    expect(movingService.getItemCount()).to.equal(4);
  });

  it("should find an item by name", () => {
    const foundItem = movingService.findItem("Laptop");
    expect(foundItem).to.equal(item1);
  });

  it("should not find an item that doesn't exist", () => {
    const foundItem = movingService.findItem("Nonexistent Item");
    expect(foundItem).to.be.undefined;
  });

  it("should remove a box", () => {
    movingService.removeBox(box1);
    expect(movingService.getItemCount()).to.equal(2);
  });

  it("should remove an item from a box", () => {
    box2.removeItem(item3);
    expect(movingService.getItemCount()).to.equal(1);
  });

  it("should list all boxes", () => {
    movingService.listBoxes();
  });

  it("should return all the items on the box", () => {
    box1.getItems();
    expect(box1.getItems()).to.eql([item1, item2]);
  });

  it("index to remove cant be less than 0 (Cant remove a non existing item)", () => {
    const newItem: Item = { name: "Mouse" };
    expect(box1.removeItem(newItem)).to.be.undefined;
  });

  it("index to remove cant be less than 0 (Cant remove a non existing box)", () => {
    const newBox = new Box<Item>();
    expect(movingService.removeBox(newBox)).to.be.undefined;
  });
});
