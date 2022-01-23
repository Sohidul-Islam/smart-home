const express = require('express');
const upddateController = require('../controllers/updateController');
const router = express.Router();

router.route("/led/update/").post(upddateController.updateled);
// router.route("/fan/").post(upddateController.fan);
// router.route("/tmphum/").post(upddateController.tmphum);

module.exports = router;