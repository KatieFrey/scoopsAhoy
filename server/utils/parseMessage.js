let toggleAnswer = require("./toggleAnswer");
let parseZipCode = require("./parseZipCode");
require("dotenv").config();

const parseMessage = message => {
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
    console.log("zipcode: ", typeof zipCode);
    //return parseZipCode(parseInt(zipCode));
    let iceCreamShops = parseZipCode(Number(zipCode));
    response = iceCreamShops;
  } else {
    console.log("Switch message: ", message);
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

module.exports = parseMessage;
