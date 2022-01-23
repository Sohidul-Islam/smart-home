const sql = require("./db");

const ledStatus = function (led) {
    this.status = led.status;
};

ledStatus.allLed = (result) => {
    sql.query(
        "SELECT * FROM led",
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }
            // console.log("product: ", res);
            result(null, res);
        }
    );

};
ledStatus.allFan = (result) => {
    sql.query(
        "SELECT * FROM fan",
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }
            // console.log("product: ", res);
            result(null, res);
        }
    );

};
ledStatus.alltmphum = (result) => {
    sql.query(
        "SELECT * FROM tmphum",
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }
            // console.log("product: ", res);
            result(null, res);
        }
    );

};

module.exports = ledStatus;