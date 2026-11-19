import fs from "fs";
import path from "path";

const filePath = path.resolve(import.meta.dirname, "input.txt");

const readableStream = fs.createReadStream(filePath, {
  highWaterMark: 15,
});

const writableStream = fs.createWriteStream("./stream/output.txt");

readableStream.on("readable", () => {
  try {
    writableStream.write(`${readableStream.read()}\n`);
  } catch (error) {}
});

readableStream.on("end", () => {
  console.log("Done");
  writableStream.end();
});
