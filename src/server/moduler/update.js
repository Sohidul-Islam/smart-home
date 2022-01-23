const sql = require("./db");
var curdate = new Date();
const dataupdate = function (update) {
    this.idled = update.idled;
    this.status = update.status;
    this.speed = update.speed;
    this.className = update.className;
    this.tmp = update.tmp;
    this.hum = update.hum;
    this.date = handleDate(curdate);
};

dataupdate.updateled = (update, result) => {
    // UPDATE `smarthome`.`led` SET `status` = 'OFF',
    //`className` = 'lightOff' WHERE (`idled` = '1');
    console.log(
        `update led set status =${update.status}, className = ${update.className} where idled = ${update.idled}`
    );
    sql.query(
        `update led set status ='${update.status}', className = '${update.className}' where idled = ${update.idled}`,
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(err, null);
                return;
            }

            // console.log("product: ", res);
            result(null, res);
        }
    );
};

dataupdate.updateFan = (result) => {
    sql.query("update INTO fan(speed,status) values('20','OFF')", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("Led added successfully ", res);
        result(null, res);
    });
};
dataupdate.updatetmphum = (result) => {
    sql.query("update INTO tmphum(tmp,hum) values('0.00','0.00')", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("Led added successfully ", res);
        result(null, res);
    });
};

const handleDate = (dataD) => {
    let data = new Date(dataD);
    let month = data.getMonth() + 1;
    let day = data.getDate();
    let year = data.getFullYear();
    const postDate = year + "-" + month + "-" + day;
    return postDate;
};

module.exports = dataupdate;
