import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

async function runAgent() {
  console.log("🤖 Sentient Agent started...");

  try {
    // Reliable test: fetch repo info from GitHub
    const response = await axios.get("https://api.github.com/repos/vercel/next.js", {
      headers: { "User-Agent": "sentient-agent-starter-kit" }
    });
    console.log("⭐ Repo stars:", response.data.stargazers_count);
    console.log("📦 Open issues:", response.data.open_issues_count);
    console.log("🔗 Repo url:", response.data.html_url);
  } catch (err) {
    console.error("Error:", err.message);
  }
}

runAgent();
