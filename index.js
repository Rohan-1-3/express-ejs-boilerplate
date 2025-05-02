#!/usr/bin/env node

import { existsSync, mkdirSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { execSync } from "child_process";

const projectName = process.argv[2];

if (!projectName) {
  console.error("❌ Please provide a project name: npx exp-boilerplate <project-name>");
  process.exit(1);
}

const projectPath = join(process.cwd(), projectName);
if (existsSync(projectPath)) {
  console.error("❌ Folder already exists.");
  process.exit(1);
}

mkdirSync(projectPath);

// Folder structure
const folders = [
  "controllers",
  "db",
  "models",
  "public",
  "routers",
  "views",
];

const files = {
  ".gitignore": "node_modules\n.env\n",
  ".env": "PORT=3000",
  "public/style.css": "body { font-family: Arial, sans-serif; }",
  "views/index.ejs": `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><%= title %></title>
</head>
<body>
    <h1><%= title %></h1>
    <p>This is an index page. Start Your Express Journey.</p>
</body>
</html>`,
  "views/404.ejs": `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><%= title %></title>
</head>
<body>
    <h1><%= title %></h1>
    <h3>No such page exists. Return Back.</h3>
    <a href="/"><button>Go Back</button></a>
</body>
</html>`,
  "server.js": `
import express from "express";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();
const PORT = process.env.PORT;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("views engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({extended: true}));

app.get("/", (req, res)=>{
    res.status(200).render("index", {
        title: "Express App"
    });
});

app.use((req, res)=>{
    res.status(404).render("404",{
        title: "404 Error! Not Found."
    });
});

app.listen(PORT, ()=>console.log("App is listening at port: " + PORT));
`.trim(),
  "package.json": JSON.stringify({
    name: projectName,
    version: "1.0.0",
    main: "server.js",
    scripts: {
      test: "echo \"Error: no test specified\" && exit 1",
      start: "node server.js",
    },
    author: "",
    license: "ISC",
    description: "",
    dependencies: {
      express: "^4.18.2",
      ejs: "^3.1.9",
      dotenv: "^16.0.3",
    },
  }, null, 2),
};

// Create folders and files
folders.forEach((folder) => {
  mkdirSync(join(projectPath, folder), { recursive: true });
});
Object.entries(files).forEach(([filePath, content]) => {
  const fullPath = join(projectPath, filePath);
  mkdirSync(dirname(fullPath), { recursive: true });
  writeFileSync(fullPath, content);
});

console.log("📦 Installing dependencies...");
execSync("npm install", { cwd: projectPath, stdio: "inherit" });

console.log(`✅ Project "${projectName}" created successfully!`);
