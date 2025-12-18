import fetch from "node-fetch";
import dotenv from "dotenv";
import path from "node:path";

// Load .env from current dir and project root
const envCurrent = dotenv.config();
const envRoot = dotenv.config({ path: path.resolve(process.cwd(), "../.env") });

console.log("📂 Loaded .env files:");
console.log("  Current dir:", envCurrent.parsed?.GH_OWNER || "not loaded");
console.log("  Project root:", envRoot.parsed?.GH_OWNER || "not loaded");

// Read from environment
const TOKEN = process.env.GITHUB_TOKEN;
const OWNER = process.env.GH_OWNER || "StaytunedLAB";
const REPO = process.env.GH_REPO || "solanki-akash-2304030101685";

if (!TOKEN) {
  console.error("❌ Error: GITHUB_TOKEN not found in .env");
  console.error("Please set GITHUB_TOKEN in your .env file");
  process.exit(1);
}

async function createIssue() {
  try {
    const url = `https://api.github.com/repos/${OWNER}/${REPO}/issues`;
    console.log("🔍 Debug Info:");
    console.log("  Owner:", OWNER);
    console.log("  Repo:", REPO);
    console.log("  URL:", url);
    console.log("  Token:", TOKEN ? "✅ Present" : "❌ Missing");
    
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Authorization": `token ${TOKEN}`,
        "Accept": "application/vnd.github+json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: "Internship Task: Automated Issue Creation",
        body: "This issue was created using GitHub API with Node.js."
      })
    });

    const data = await response.json();
    
    if (response.ok) {
      console.log("✅ Issue Created Successfully!");
      console.log("🔗 Issue URL:", data.html_url);
    } else {
      console.error("❌ Error Creating Issue");
      console.error("Status:", response.status);
      console.error("Message:", data.message);
    }
  } catch (err) {
    console.error("❌ Error:", err.message);
  }
}

createIssue();
