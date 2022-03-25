const ledStatus = require("../moduler/dataretrieve");

exports.led = (req, res) => {
    ledStatus.allLed((err, data) => {
        if (err) {
            res.status(500).send({
                message:
                    err.message || "Some error occured in inventoryReport function",
            });
        } else {
            console.log("data: ", data);
            res.send(data);
        }
    })
}
exports.fan = (req, res) => {
    ledStatus.allFan((err, data) => {
        if (err) {
            res.status(500).send({
                message:
                    err.message || "Some error occured in inventoryReport function",
            });
        } else {
            res.send(data);
        }
    })
}
exports.tmphum = (req, res) => {
    ledStatus.alltmphum((err, data) => {
        if (err) {
            res.status(500).send({
                message:
                    err.message || "Some error occured in inventoryReport function",
            });
        } else {
            res.send(data);
        }
    })
}
exports.allDevice = (req, res) => {
    ledStatus.getAll((err, data) => {
        if (err) {
            res.status(500).send({
                message:
                    err.message || "Some error occured in inventoryReport function",
            });
        } else {
            console.log("All Load Devices: ", data);
            let device = {
                Load: {
                    Lights: data[0],
                    Fans: data[1]
                },
                sensor: data[2]

            }
            res.send(device);
        }
    })
}



