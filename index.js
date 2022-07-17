const express = require("express");
var cors = require("cors");
const app = express();
const PDFDocument = require("pdfkit");
const fs = require("fs");

app.use(cors());

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/download", function (req, res) {
  // Create a document
  const doc = new PDFDocument();
  writeStream = fs.createWriteStream(`${__dirname}/uploads/filename.pdf`); // used it here because this way we can check if we have completed the pdf processing
  // Saving the pdf file in root directory.
  // doc.pipe(fs.createWriteStream(`${__dirname}/uploads/filename.pdf`)); // commented it as it was generating but taking time and before it the response was sent already
  doc.pipe(writeStream);

  // Adding functionality
  doc.fontSize(27).text("THere Comes Some Text", 100, 100);

  // // Adding an image in the pdf.

  // doc.image("download3.jpg", {
  //   fit: [300, 300],
  //   align: "center",
  //   valign: "center",
  // });

  doc
    .addPage()
    .fontSize(15)
    .text("Generating PDF with the help of pdfkit", 100, 100);

  // Apply some transforms and render an SVG path with the
  // 'even-odd' fill rule
  // doc
  //   .scale(0.6)
  //   .translate(470, -380)
  //   .path("M 250,75 L 323,301 131,161 369,161 177,301 z")
  //   .fill("red", "even-odd")
  //   .restore();

  // Add some text with annotations
  doc
    .addPage()
    .fillColor("blue")
    .text("here you can add some url", 100, 100)

    .link(100, 100, 160, 27, "https://google.com/");

  // Finalize PDF file
  doc.end();

  const file = `${__dirname}/uploads/filename.pdf`;

  writeStream.on("finish", function () {
    // do stuff with the PDF file
    res.download(file); // Set disposition and send it
  });
});

app.listen(8000);
