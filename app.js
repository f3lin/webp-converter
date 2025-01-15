const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Get arguments from the command line
const args = process.argv.slice(2);

if (args.length < 1) {
  console.error("Usage: node app.js <input_file> [output_file]");
  process.exit(1);
}

const inputFile = args[0];
const outputFile = args[1] || inputFile.replace(path.extname(inputFile), ".webp");

// Check if the input file exists
if (!fs.existsSync(inputFile)) {
  console.error(`Error: File "${inputFile}" not found.`);
  process.exit(1);
}

// Convert the image to WebP format
sharp(inputFile, { animated: true })
  .resize(600, 450) // Resize if necessary (optional)
  .toFile(outputFile)
  .then(info => {
    console.log(`Successfully converted "${inputFile}" to "${outputFile}".`);
    console.log("Details:", info);
  })
  .catch(err => {
    console.error("Error during conversion:", err.message);
    process.exit(1);
  });
