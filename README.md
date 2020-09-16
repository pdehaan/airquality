# airquality

Check local air quality stats via purpleair API.

```js
{
  ID: "// PurpleAir sensor ID",
  ParentID: "// The PurpleAir sensor ID of the 'parent' entry in the case of Channel B",
  A_H: "// true if the sensor output has been downgraded or marked for attention due to suspected hardware issues",
  AGE: "// Sensor data age (when data was last received) in minutes",
  DEVICE_BRIGHTNESS: "// LED brightness (if hardware is present)",
  Flag: "// Data flagged for unusually high readings",
  Hidden: "// Hide from public view on map: true/false",
  humidity: "// Current humidity in %",
  isOwner: "// Currently logged in user is the sensor owner",
  Label: "// The 'name' that appears on the map for this sensor",
  LastSeen: "// Last seen data time stamp in UTC",
  LastUpdateCheck: "// Last update checked at time stamp in UTC",
  Lat: "// Latitude position info",
  Lon: "// Longitude position info",
  PM2_5Value: "// Current PM2.5 value (based on the",
  pressure: "// Current pressure in Millibars",
  RSSI: "// Sensor's WiFi signal strength in dBm",
  State: "// Unused variable",
  temp_f: "// Current temperature in F",
  THINGSPEAK_PRIMARY_ID_READ_KEY: "// The Thingspeak read key for primary data of this sensor",
  THINGSPEAK_PRIMARY_ID: "// The Thingspeak channel ID for primary data of this sensor",
  THINGSPEAK_SECONDARY_ID_READ_KEY: "// The Thingspeak read key for secondary data of this sensor",
  THINGSPEAK_SECONDARY_ID: "// The Thingspeak channel ID for secondary data of this sensor",
  Type: "// Sensor type (PMS5003, PMS1003, BME280 etc)",
  Uptime: "// Sensor uptime in seconds",
  Version: "// Current version of sensor firmware",
  // Statistics for PM2.5
  Stats: {
    v: "// Real time or current PM2.5 Value",
    v1: "// Short term (10 minute average)",
    v2: "// 30 minute average",
    v3: "// 1 hour average",
    v4: "// 6 hour average",
    v5: "// 24 hour average",
    v6: "// One week average",
    pm: "// Real time or current PM2.5 Value",
    lastModified: "// Last modified time stamp for calculated average statistics",
    timeSinceModified: "// Time between last two readings in milliseconds",
  },
}
```
