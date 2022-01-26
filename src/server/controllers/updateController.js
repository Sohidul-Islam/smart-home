const updatedata = require("../moduler/update");
var curdate = new Date();
const handleDate = (dataD) => {
    let data = new Date(dataD);
    let month = data.getMonth() + 1;
    let day = data.getDate();
    let year = data.getFullYear();
    const postDate = year + "-" + month + "-" + day;
    return postDate;
};
exports.updateled = (req, res) => {
    // Validate Request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!",
        });
    }

    console.log("led update rq body: ", req.body);

    const Updatedata = new updatedata({
        idled: req.body.idled,
        status: req.body.status,
        className: req.body.className,
    });
    // console.log("productlist: ", productlist);
    // console.log("description: ", req.body.des);

    updatedata.updateled(Updatedata, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Customer with id ${req.params.idled}.`,
                });
            } else {
                res.status(500).send({
                    message: "Error updating Customer with id " + req.params.idled,
                });
            }
        } else
            res.status(201).json({
                type: "success",
                message: "Led update successuflly",
            });
    });
};

exports.updateDevice = (req, res) => {
    // Validate Request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!",
        });
    }

    if (req.body.date == undefined) {
        req.body.date = handleDate(curdate);
        console.log(req.body.date);
    }

    updatedata.updateDevice(req.body, (err, data) => {
        if (err) {
            res.status(400).send({ message: "update device have some error" });
        } else {
            // res.send(data);
            res.send({
                messege: "Device Successfully updated",
            });
            console.log("update device controller : ", req.body);
        }
    });
};
