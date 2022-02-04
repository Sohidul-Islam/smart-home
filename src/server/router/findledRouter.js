const express = require('express');
const findLedController = require('../controllers/findLedController');
const router = express.Router();

router.route("/led/status/").post(findLedController.ledstatus);

// router.route("/fan/").post(upddateController.fan);
// router.route("/tmphum/").post(upddateController.tmphum);

module.exports = router;

