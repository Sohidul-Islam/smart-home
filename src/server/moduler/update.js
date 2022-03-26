const sql = require('./db');

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
  // console.log("update: ", update);
  // console.log(
  //     `update led set status =${update.status}, className = ${update.className} where idled = ${update.idled}`
  // );
  sql.query(
    `update led set status ='${update.status}', className = '${update.className}' where idled = ${update.idled}`,
    (err, res) => {
      if (err) {
        console.log('error: ', err);
        result(err, null);
        return;
      }
      result(null, res);
    }
  );
};
const UpdateQueryHandler = async (SqlQuery, result) => {
  await sql.query(SqlQuery, res => {
    try {
      console.log('Query working properly');
      result(null, res);
    } catch (error) {
      console.log('Query not working properly');
      console.log('error: ', error);
      result(err, null);
      return;
    }
  });
  console.log('Query working ');
};

dataupdate.updateDevice = (update, result) => {
  console.log("update data: ", update);
  var SqlQuery = ``;
  var query1 = `update led set status ='${update.status}', className = '${update.className}' where idled = ${update.idled}`;
  var query2 = `update fan set status ='${update.status}', speed = ${update.speed} where fan_id = ${update.fan_id};`;
  var query4 = '';
  if (update.idled !== undefined) {
    SqlQuery = query1;
    UpdateQueryHandler(SqlQuery, result);
  } else if (update.fan_id !== undefined) {
    SqlQuery = query2;
    console.log("fan query: ", SqlQuery);
    UpdateQueryHandler(SqlQuery, result);
  }

  if (update.sensor !== undefined) {
    for (let i = 0; i < update.sensor.length; i++) {
      query4 += `update sensor set status = ${update.sensor[i].status} where id = ${update.sensor[i].id};`;
    }
    if (update.temphum !== undefined) {
      console.log("temphum: ", update.temphum);
      query4 += `INSERT INTO tmphum(tmp,hum) values(${update.temphum.tmp},${update.temphum.hum});`;
    }

    console.log(query4);
    SqlQuery = query4;
    UpdateQueryHandler(SqlQuery, result);
    query4 = '';
  }
};

module.exports = dataupdate;
