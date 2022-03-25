const sql = require("./db");

const deviceStatus = function (led) {
    this.status = led.status;
};

deviceStatus.allLed = (result) => {
    sql.query("SELECT * FROM led", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        // console.log("product: ", res);
        result(null, res);
    });
};
deviceStatus.allFan = (result) => {
    sql.query("SELECT * FROM fan", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        // console.log("product: ", res);
        result(null, res);
    });
};
deviceStatus.alltmphum = (result) => {
    sql.query("SELECT * FROM tmphum", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        // console.log("product: ", res);
        result(null, res);
    });
};

deviceStatus.getAll = (result) => {
    // let q1 = `SELECT * FROM led;SELECT * FROM fan;`;
    let q1 = `SELECT * FROM led;SELECT * FROM fan;SELECT * FROM sensor;`;

    sql.query(q1, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("Query TESTING: ", res);
        result(null, res);
    });
};

module.exports = deviceStatus;
