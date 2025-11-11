// C:\Users\joeyr\servers\gdrive-mcp-server\start.js
import path from "path";
import { fileURLToPath } from "url";
import { spawn } from "child_process";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const child = spawn("node", [path.join(__dirname, "dist/index.js"), "serve"], {
  env: process.env,
  stdio: "inherit",
  shell: true,
});

child.on("exit", (code) => {
  process.exit(code);
});