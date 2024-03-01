import { expect } from "chai";
import { FileReader, FileWriter } from "../../src/ejercicio-3/ejercicio-3"; 

describe("FileReader", () => {
  it("should write the content to the file", () => {
    const fileWriter = new FileWriter('example.txt');
    fileWriter.writeFile("New content");
    const fileReader = new FileReader('example.txt');
    expect(fileReader.readFile()).to.equal("New content");
  });

  const fileReader = new FileReader('example.txt');
  it("should return the content of the file", () => {
    expect(fileReader.readFile()).to.equal("New content");
  });

  it("should return an empty string if the file does not exist", () => {
    const fileReader = new FileReader('non-existent-file.txt');
    expect(fileReader.readFile()).to.equal("");
  });

  it("should write the content to the file", () => {
    const fileWriter = new FileWriter('example.txt');
    fileWriter.writeFile("New content");
    const fileReader = new FileReader('example.txt');
    expect(fileReader.readFile()).to.equal("New content");
  });

  it("should return void if the file to write does not exist", () => {
    const fileWriter = new FileWriter('');
    expect(fileWriter.writeFile("New content")).to.equal(undefined);
  });
});