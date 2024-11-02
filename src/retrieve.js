import { fetchData } from "./fetchData.js";
import { locationDetails } from "./locationDetails.js";
import { suggestLocations } from "./suggestLocations.js";

export const retrieve = async (
  location,
  distance = 1000,
  offset = 0,
  count = 5000
) => {
  const locations = await suggestLocations(location);
  const magicKey = locations[0].magicKey;

  const details = await locationDetails(location, magicKey);

  const long = details[0].attributes.X;
  const lat = details[0].attributes.Y;

  const desiredData = await fetchData(lat, long, distance, offset, count);
  return desiredData;
};
