const request = require("request");
const keys = require("../../client/src/utils/script");

const parseZipCode = async zipCode => {
  let output;
  let resOutput = await request(
    {
      url: "https://api.foursquare.com/v2/venues/explore",
      method: "GET",
      qs: {
        client_id: keys.CLIENTID,
        client_secret: keys.CLIENTSECRET,
        near: zipCode,
        query: "icecream",
        v: "20180323",
        limit: 10
      }
    },
    function(err, res, body) {
      if (err) {
        console.error(err);
      } else {
        let parsedBody = JSON.parse(body);
        let options = parsedBody.response.groups[0].items;
        let iceCreamShops = options.reduce((acc, shop) => {
          return [...acc, shop.venue["name"]];
        }, []);
        output = iceCreamShops;
      }
      console.log("Res in zip code: ", res);
      console.log("Output: ", output);
    }
  );
  return resOutput;
  // console.log("Spots: ", requestSpots.response.groups[0].items);
  //return requestSpots.response.groups[0].items;
};

module.exports = parseZipCode;
