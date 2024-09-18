import fs from 'fs';
import path from 'path';

// Function to generate a valid variable name from a file name
const toValidVariableName = (str) => {
  return str.replace(/[^a-zA-Z0-9]/g, '').replace(/^\d+/g, '');
};

// Function to generate the index file
const generateIndexFile = ({
  folderPath,
  fileExtensions = ['.tsx', '.png', '.jpg', '.gif', '.svg'],  // List of file extensions to include
  outputFileName = 'index.tsx',
  excludeFiles = ['index.tsx'],
} = {}) => {
  const indexPath = path.join(folderPath, outputFileName);

  // Read the contents of the folder
  const files = fs.readdirSync(folderPath);

  const usedNames = new Set();

  const exportStatements = files
    .filter(file => {
      const fullPath = path.join(folderPath, file);
      return fileExtensions.some(ext => file.endsWith(ext)) && !excludeFiles.includes(file) && fs.statSync(fullPath).isFile();
    })
    .map(file => {
      let fileName = path.basename(file, path.extname(file));  // Get the filename without extension
      let variableName = toValidVariableName(fileName);

      // Ensure the variable name is unique
      let uniqueVariableName = variableName;
      let counter = 1;
      while (usedNames.has(uniqueVariableName)) {
        uniqueVariableName = `${variableName}${counter}`;
        counter++;
      }

      usedNames.add(uniqueVariableName);
      return `export { default as ${uniqueVariableName} } from './${file}';`;
    })
    .join('\n');

  // Write the export statements to the index file if any exist
  if (exportStatements.length > 0) {
    fs.writeFileSync(indexPath, exportStatements);
    console.log(`${outputFileName} file has been created successfully in ${folderPath}.`);
  }
};

// Function to recursively generate index files in all subfolders
const generateIndexFilesRecursively = (parentFolder, fileExtensions) => {
  const processFolder = (folderPath) => {
    // Generate index.tsx file for the current folder
    generateIndexFile({ folderPath, fileExtensions });

    // Process subfolders
    const files = fs.readdirSync(folderPath);
    files.forEach(file => {
      const fullPath = path.join(folderPath, file);
      if (fs.statSync(fullPath).isDirectory()) {
        processFolder(fullPath);
      }
    });
  };

  // Start processing from the parent folder
  processFolder(parentFolder);
};

// Get the folder path from command-line arguments
const args = process.argv.slice(2);
const folderPath = args[0] || './public/images'; // Use the provided path or default to './public/images'
const fileExtensions = ['.png', '.jpg', '.gif', '.svg']; // Add any other file extensions you want to include

// Call the function with the provided folder path
generateIndexFilesRecursively(path.resolve(folderPath), fileExtensions);
