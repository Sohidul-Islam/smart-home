const updatedata = require("../moduler/update");

exports.updateled = (req, res) => {
    // Validate Request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!",
        });
    }

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
