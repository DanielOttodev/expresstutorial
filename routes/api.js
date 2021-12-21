const express = require("express");
router = express.Router();
api = require("../services/api");

router.get("/", api.ourFunction);

router.get("/something", api.ourFunction2);

// Not shown in stage 1 tutorial
// Handle post requests to the root of the route
router.post("/", api.ourFunction);
// Handle put requests to the root of the route
router.put("/", api.ourFunction);
// Handle delete requests to the root of the route
module.exports = router;
