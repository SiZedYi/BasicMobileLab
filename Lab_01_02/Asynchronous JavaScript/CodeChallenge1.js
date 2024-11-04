const whereAmI = async (lat, lng) => {
  try {
    const res = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    const data = await res.json();
    console.log(data);

    const city = data.city;
    const country = data.country;
    console.log(`You are in ${city}, ${country}`);

    // Fetch country data
    const countryRes = await fetch(
      `https://restcountries.com/v3.1/name/${country}`
    );
    if (!countryRes.ok) throw new Error("Problem with countries API");
    const countryData = await countryRes.json();
    console.log(countryData[0]);
  } catch (err) {
    console.error(err);
  }
};
// 1. Create a function 'whereAmI' which takes as inputs a latitude value ('lat')
// and a longitude value ('lng') (these are GPS coordinates, examples are in test
// data below).
// 2. Do “reverse geocoding” of the provided coordinates. Reverse geocoding means
// to convert coordinates to a meaningful location, like a city and country name.
// Use this API to do reverse geocoding: https://geocode.xyz/api. The AJAX call
// will be done to a URL with this format:
// https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and
// promises to get the data. Do not use the 'getJSON' function we created, that
// is cheating
// �
// �
// 3. Once you have the data, take a look at it in the console to see all the attributes
// that you received about the provided location. Then, using this data, log a
// message like this to the console: “You are in Berlin, Germany”
// 4. Chain a .catch method to the end of the promise chain and log errors to the
// console
// 5. This API allows you to make only 3 requests per second. If you reload fast, you
// will get this error with code 403. This is an error with the request. Remember,
// fetch() does not reject the promise in this case. So create an error to reject
// the promise yourself, with a meaningful error message

whereAmI(52.508, 13.381);
