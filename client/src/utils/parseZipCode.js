//const request = require("request");
import keys from "./script.js";
import axios from "axios";

const parseZipCode = async zipCode => {
  //let output;

  let output = await axios.get(
    `https://api.foursquare.com/v2/venues/explore?client_id=${
      keys.CLIENTID
    }&client_secret=${
      keys.CLIENTSECRET
    }&v=20180323&limit=10&near=${zipCode}&query=icecream`
  );
  // let data = await output;
  // let response = await data.response;
  //let venues = await data.response;
  //console.log("data: ", response);
  //.then(function(body) {
  // Code for handling API response
  // let items = body.url.response.groups[0].items;
  // console.log("Items:", items);
  // let parsedBody = JSON.parse(body);
  // let options = parsedBody.response.groups[0].items;
  // let iceCreamShops = options.reduce((acc, shop) => {
  //   return [...acc, shop.venue["name"]];
  // }, []);
  // return iceCreamShops;
  // })
  // .catch(function(err) {
  //   console.log(err.message);
  // });
  //console.log("output: ", data.response);
  //output.response.groups[0].items
  return output;
  // let resOutput = await request(
  //   {
  //     url: "https://api.foursquare.com/v2/venues/explore",
  //     method: "GET",
  //     qs: {
  //       client_id: keys.CLIENTID,
  //       client_secret: keys.CLIENTSECRET,
  //       near: zipCode,
  //       query: "icecream",
  //       v: "20180323",
  //       limit: 10
  //     }
  //   },
  //   function(err, res, body) {
  //     if (err) {
  //       console.error(err);
  //     } else {
  //       let parsedBody = JSON.parse(body);
  //       let options = parsedBody.response.groups[0].items;
  //       let iceCreamShops = options.reduce((acc, shop) => {
  //         return [...acc, shop.venue["name"]];
  //       }, []);
  //       output = iceCreamShops;
  //     }
  //     console.log("Res in zip code: ", res);
  //     console.log("Output: ", output);
  //   }
  // );
  // return resOutput;
  // // console.log("Spots: ", requestSpots.response.groups[0].items);
  // //return requestSpots.response.groups[0].items;
};

export default parseZipCode;
