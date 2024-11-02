export const locationDetails = async (location, magicKey, max = 6) => {
  const queryUrl = `https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/findAddressCandidates?SingleLine=${location}&f=json&outSR=%7B%22wkid%22%3A102100%7D&outFields=*&magicKey=${magicKey}&maxLocations=${max}`;

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
    return data.candidates;
  }

  throw new Error(`Error: ${response.status}`);
};
