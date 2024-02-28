import * as fs from "fs";

export class FileReader {
  constructor(private filePath: string) {}

  public readFile(): string {
    try {
      const content: string = fs.readFileSync(this.filePath, "utf-8");
      return content;
    } catch (error) {
      console.error("Error al leer el archivo:", (error as Error).message);
      return "";
    }
  }
}

export class FileWriter {
  constructor(private filePath: string) {}

  public writeFile(data: string): void {
    try {
      fs.writeFileSync(this.filePath, data, "utf-8");
      console.log("Archivo escrito exitosamente.");
    } catch (error) {
      console.error(
        "Error al escribir en el archivo:",
        (error as Error).message,
      );
    }
  }
}

// // Client code
// const fileReader = new FileReader('example.txt');
// const fileWriter = new FileWriter('example.txt');

// // Reading content
// const currentContent = fileReader.readFile();
// console.log('Current content:', currentContent);

// // Writing content
// const newData = 'This is new content to be written into the file.'
// fileWriter.writeFile(newData);

// // Updating content
// const updatedContent = fileReader.readFile();
// console.log('Updated content:', updatedContent);
