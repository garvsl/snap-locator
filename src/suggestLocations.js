export const suggestLocations = async (text, max = 6) => {
  const queryUrl = `https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/suggest?f=json&text=${encodeURIComponent(
    text.trim()
  )}&maxSuggestions=${max}`;

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
    return data.suggestions;
  }

  throw new Error(`Error: ${response.status}`);
};
