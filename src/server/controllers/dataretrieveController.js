const ledStatus = require('../moduler/dataretrieve');

exports.led = (req, res) => {
  ledStatus.allLed((err, data) => {
    if (err) {
      res.status(500).send({
        message:
          err.message || 'Some error occured in inventoryReport function',
      });
    } else {
      // console.log("data: ", data);
      res.send(data);
    }
  });
};
exports.fan = (req, res) => {
  ledStatus.allFan((err, data) => {
    if (err) {
      res.status(500).send({
        message:
          err.message || 'Some error occured in inventoryReport function',
      });
    } else {
      res.send(data);
    }
  });
};
exports.tmphum = (req, res) => {
  ledStatus.alltmphum((err, data) => {
    if (err) {
      res.status(500).send({
        message:
          err.message || 'Some error occured in inventoryReport function',
      });
    } else {
      res.send(data);
    }
  });
};
exports.allDevice = (req, res) => {
  ledStatus.getAll((err, data) => {
    if (err) {
      res.status(500).send({
        message:
          err.message || 'Some error occured in inventoryReport function',
      });
    } else {
      // console.log("All Load Devices: ", data);

      console.log(data);
      for (let i = 0; i < data[0].length; i++) {
        if (data[0][i].status == 'ON') {
          data[0][i].status = 1;
        } else {
          data[0][i].status = 0;
        }

        delete data[0][i].className;
      }
      for (let i = 0; i < data[1].length; i++) {
        if (data[1][i].status == 'ON') {
          data[1][i].status = 1;
        } else {
          data[1][i].status = 0;
        }
      }
      let device = {
        load: {
          lights: data[0],
          fan: data[1],
        },
        sensor: data[2],
      };
      console.log(device);
      res.send(device);
    }
  });
};
