var express = require("express");
var router = express.Router();
const parseMessage = require("../utils/parseMessage");
require("dotenv").config();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});

router.post("/", (req, res, next) => {
  let message = req.body["chatMessage"];
  console.log("Req: ", message);
  let newMessage = parseMessage(message);
  console.log("Response: ", newMessage);
  res.send(message);
});

module.exports = router;
