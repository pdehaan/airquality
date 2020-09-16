#!/usr/bin/env node

const airQuality = require("./lib");

const stationId = process.env.ID || 1238;

airQuality(stationId);
