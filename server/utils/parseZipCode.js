const request = require("request");
require("dotenv").config();

const parseZipCode = zipCode => {
  console.log(process.env.CLIENTID);
  console.log(process.env.CLIENTSECRET);
  let requestSpots = request(
    {
      url: "https://api.foursquare.com/v2/venues/explore",
      method: "GET",
      qs: {
        client_id: process.env.CLIENTID,
        client_secret: process.env.CLIENTSECRET,
        near: zipCode,
        query: "icecream",
        v: "20180323",
        limit: 1
      }
    },
    function(err, res, body) {
      if (err) {
        console.error(err);
      } else {
        console.log(body);
      }
    }
  );

  return requestSpots.response.groups[0].items;
};

module.exports = parseZipCode;
