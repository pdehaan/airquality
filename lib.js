const axios = require("axios");

const API_URL = "https://www.purpleair.com/json";
const LABELS = {
  pm: "Real time or current PM2.5 Value",
  v1: "Short term (10 minute average)",
  v2: "30 minute average",
  v3: "1 hour average",
  v4: "6 hour average",
  v5: "24 hour average",
  v6: "One week average",
  lastModified: "Last modified",
};

module.exports = airQuality;

async function airQuality(id) {
  const station = await axios.get(API_URL, { params: { show: id } });
  if (!station.data.results.length) {
    console.error(`Invalid station ID: ${id}`);
    process.exit(1);
  }
  const results = Object.assign(...station.data.results.reverse());
  results.Stats = JSON.parse(results.Stats);
  results.Stats.lastModified = new Date(results.Stats.lastModified);
  results.LastSeen = new Date(results.LastSeen * 1000);
  results.LastUpdateCheck = new Date(results.LastUpdateCheck * 1000);
  results.Created = new Date(results.Created * 1000);
  // console.log(results);

  console.log(results.Label);
  for (const [key, label] of Object.entries(LABELS)) {
    console.log(`- ${label}: ${results.Stats[key]}`);
  }
}
