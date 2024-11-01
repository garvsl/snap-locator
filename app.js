const fetchData = async (latitude, longitude, distance = 1000) => {
  const queryUrl = `https://services1.arcgis.com/RLQu0rK7h4kbsBq5/arcgis/rest/services/snap_retailer_location_data/FeatureServer/0/query?f=json&geometry=${longitude},${latitude}&geometryType=esriGeometryPoint&inSR=4326&spatialRel=esriSpatialRelIntersects&distance=${distance}&units=esriSRUnit_Meter&returnGeometry=true&outFields=*&maxRecordCountFactor=5&outSR=102100&resultOffset=0&resultRecordCount=5000&cacheHint=true`;

  const response = await fetch(queryUrl, {
    cache: "default",
    credentials: "omit",
    headers: {
      Accept: "*/*",
      "Accept-Language": "en-US,en;q=0.9",
      Priority: "u=3, i",
    },
    method: "GET",
    mode: "cors",
    redirect: "follow",
    referrerPolicy: "no-referrer-when-downgrade",
  });

  if (response.ok) {
    const data = await response.json();
    return data["features"];
  }

  throw new Error(`Error: ${response.status}`);
};

async function main() {
  const latitude = 40.7128;
  const longitude = -74.006;
  const distance = 2000;

  try {
    const features = await fetchData(latitude, longitude, distance);
    console.log(features);
  } catch (error) {
    console.error(error);
  }
}

main();
