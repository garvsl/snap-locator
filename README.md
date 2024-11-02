# snap-locator

Snap Locator is a lightweight JavaScript library designed for easy retrieval of location data from the Snap Locator website. It simplifies access to store information, enabling developers to integrate location-based services into their applications effortlessly.

Built on top of the SNAP Retailer Locator API.

## Installation

```bash
npm install snap-locator
```

## Features

- **Easy Retrieval:** Fetch store data based on location with minimal setup.
- **Location Suggestions:** Automatically suggest locations as you type.
- **Detailed Store Information:** Get comprehensive details about stores, including name, address, and geographic coordinates.

## Simple Usage

```javascript
const desiredData = await retrieve("New York");

console.log(desiredData);
```

## If more customization needed

```javascript
const location = "New York"; // Desired location
const locations = await suggestLocations(location); // Auto location complete
const magicKey = locations[0].magicKey; // Get the magic key from the first location

const details = await locationDetails(location, magicKey); // Get the long and lat of location

const long = details[0].attributes.X;
const lat = details[0].attributes.Y;

const desiredData = await fetchData(lat, long);
console.log(desiredData);
```

## Sample output

```json
[
  {
    "attributes": {
      "Record_ID": 1063605,
      "Store_Name": "Win Sea Food Market Inc.",
      "Store_Street_Address": "218 Canal St",
      "Additonal_Address": null,
      "City": "New York",
      "State": "NY",
      "Zip_Code": "10013",
      "Zip4": "4123",
      "County": "NEW YORK",
      "Store_Type": "Specialty Store",
      "Latitude": 40.71719,
      "Longitude": -73.999298,
      "Incentive_Program": null,
      "Grantee_Name": null,
      "ObjectId": 245862
    }
  },
  {
    "attributes": {
      "Record_ID": 1617411,
      "Store_Name": "Jojo Duck",
      "Store_Street_Address": "131 Walker St",
      "Additonal_Address": null,
      "City": "New York",
      "State": "NY",
      "Zip_Code": "10013",
      "Zip4": "4108",
      "County": "NEW YORK",
      "Store_Type": "Restaurant Meals Program",
      "Latitude": 40.717319,
      "Longitude": -73.999702,
      "Incentive_Program": null,
      "Grantee_Name": null,
      "ObjectId": 264117
    }
  }
]
```
