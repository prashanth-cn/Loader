import fs from "fs";
import path from "path";

import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const packageJsonPath = path.resolve(__dirname, "../package.json");
const packageJsonData = fs.readFileSync(packageJsonPath, "utf-8");

// Parse the JSON data into an object
const packageJson = JSON.parse(packageJsonData);

// Read the package.json from the root

// Remove unnecessary fields for the publishable package.json
const { scripts, devDependencies, publishConfig, files, ...packageData } =
  packageJson;

// Write the new package.json to the dist directory
fs.writeFileSync(
  path.resolve(__dirname, "../dist/package.json"),
  JSON.stringify(packageData, null, 2)
);

console.log("Copied package.json to dist folder.");
