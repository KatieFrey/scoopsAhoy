import toggleAnswer from "./toggleAnswer";
import parseZipCode from "./parseZipCode";
require("dotenv").config();

const parseMessage = async message => {
  let counter = 1;
  let response;
  message = message.replace(/[.,\/#!?$%\^&\*;:{}=\-_`~()]/g, "").toLowerCase();

  let locationQuestion = message
    .split(" ")
    .slice(0, -1)
    .join(" ")
    .toLowerCase();

  // === "is there ice cream in"

  if (locationQuestion.includes("ice cream")) {
    let zipCode = message.slice(-5);
    let response = await parseZipCode(Number(zipCode));
    let items = response.data.response.groups[0].items;
    console.log("array: ", items);
    let iceCreamShops = items.reduce((acc, shop) => {
      return [...acc, shop.venue["name"]];
    }, []);
    console.log("Response zipcode: ", iceCreamShops);
    return iceCreamShops;
  } else {
    switch (message) {
      case "scoops ahoy":
        response = "Scoops ahoy!";
        break;
      case "where are you found":
        response = "Starcourt mall, Hawkins, Indiana";
        break;
      case "what do you think about kids":
        response = toggleAnswer(counter).comeback;
        counter = toggleAnswer(counter).counter;
        break;
      default:
        response = "Yeah, that's a no.";
    }
  }
  return response;
};

export default parseMessage;
