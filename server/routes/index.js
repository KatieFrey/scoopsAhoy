var express = require("express");
var router = express.Router();
const parseMessage = require("../utils/parseMessage");
require("dotenv").config();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});

router.post("/chat", async (req, res, next) => {
  //let message = req.body["chatMessage"];
  let message = req.body.question;
  console.log("Req: ", message);
  let newMessage = await parseMessage(message);
  console.log("Response: ", newMessage);
  res.send(newMessage);
});

module.exports = router;
