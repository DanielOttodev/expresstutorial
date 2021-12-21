const express = require("express");
router = express.Router();
api = require("../services/api");

router.get("/", api.ourFunction);

router.get("/something", api.ourFunction2);

module.exports = router;
