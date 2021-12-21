const express = require("express");
router = express.Router();
api = require("../services/api");

router.get("/", api.ourFunction);

router.get("/something", api.ourFunction2);

// Not shown in stage 1 tutorial
// Handle post requests to the root of the application
router.post("/", api.ourFunction);
// Handle put requests to the root of the application
router.put("/", api.ourFunction);

module.exports = router;
