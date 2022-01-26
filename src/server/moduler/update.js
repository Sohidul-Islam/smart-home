const sql = require("./db");

const dataupdate = function (update) {
    this.idled = update.idled;
    this.fan_id = update.fan_id;
    this.tmpid = update.tmpid;
    this.status = update.status;
    this.speed = update.speed;
    this.className = update.className;
    this.tmp = update.tmp;
    this.hum = update.hum;
    this.date = update.date;
};

dataupdate.updateled = (update, result) => {
    // UPDATE `smarthome`.`led` SET `status` = 'OFF',
    //`className` = 'lightOff' WHERE (`idled` = '1');
    console.log("update: ", update);
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
            result(null, res);
        }
    );
};

dataupdate.updateDevice = (update, result) => {
    console.log("update: ", update);
    var SqlQuery = ``;
    var query1 = `update led set status ='${update.status}', className = '${update.className}' where idled = ${update.idled}`;
    var query2 = `update fan set status ='${update.status}', speed = ${update.speed} where fan_id = ${update.fan_id};`;
    var query3 = `update tmphum set tmp = ${update.tmp},hum=${update.hum},date='${update.date}' where tmpid = ${update.tmpid};`;

    if (update.idled != undefined) {
        console.log("we get idled");
        SqlQuery = query1;
    } else if (update.fan_id != undefined) {
        console.log("we get fanid");
        SqlQuery = query2;
    } else if (update.tmpid != undefined) {
        console.log("we get tmpid");
        SqlQuery = query3;
    }
    sql.query(SqlQuery, (res) => {
        try {
            result(null, res);
        } catch (error) {
            console.log("error: ", error);
            result(err, null);
            return;
        }
    });
};

module.exports = dataupdate;
