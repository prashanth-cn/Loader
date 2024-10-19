import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Get the current file and directory path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define the path to the original package.json
const packageJsonPath = path.resolve(__dirname, "../package.json");

// Read the original package.json file
const packageJsonData = fs.readFileSync(packageJsonPath, "utf-8");

// Parse the JSON data into an object
const packageJson = JSON.parse(packageJsonData);

// Destructure the package.json to keep only necessary fields
const { name, version, author, type, main, types, peerDependencies, dependencies } = packageJson;

// Remove @lottiefiles/dotlottie-react from dependencies if it exists
if (dependencies && dependencies["@lottiefiles/dotlottie-react"]) {
  delete dependencies["@lottiefiles/dotlottie-react"];
}

// Create a new object with only the required fields
const newPackageJson = {
  name,
  version,
  author,
  type,
  main,
  types,
  peerDependencies: peerDependencies || {},
  dependencies: Object.keys(dependencies || {}).length ? dependencies : undefined
};

// Clean up the empty dependencies field if it's no longer needed
if (!newPackageJson.dependencies) {
  delete newPackageJson.dependencies;
}

// Write the new package.json to the dist directory
fs.writeFileSync(
  path.resolve(__dirname, "../dist/package.json"),
  JSON.stringify(newPackageJson, null, 2) // Format JSON with 2-space indentation
);

console.log("Copied modified package.json to dist folder.");