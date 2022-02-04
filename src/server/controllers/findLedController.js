const ledFIndStatus = require("../moduler/findLed");
exports.ledstatus = (req, res) => {
    // console.log(req.body);
    ledFIndStatus.findLedStatus(req.body, (err, data) => {
        if (err) {
            res.status(500).send({
                message:
                    err.message || "Some error occured in inventoryReport function",
            });
        } else {
            // console.log("Led found: ", data);
            res.send(data);
        }
    })
}