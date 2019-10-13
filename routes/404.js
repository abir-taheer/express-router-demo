const router = require("express").Router();

router.get("*", (req, res) => {

  res.send("sorry, that page doesn't exist yet!");

});

module.exports = router;