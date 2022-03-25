import React, { Component } from "react";
import axios from "axios";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)


export default class SensorDevices extends Component {
  state = {
    sensorData: [],
  };
  componentDidMount() {
    setInterval(() => {
      axios
        .get(`http://localhost:8000/device`)
        .then((res) => {
          const TempSensorData = res.data.sensor;
          this.setState({ sensorData: TempSensorData });
        })
        .catch((error) => {
          console.error(error);
        });
    }, 1000)
  }
  render() {
    var user = "Shufol";
    function sensorType(value) {
      if (value === 0)
        return "Fire"
      else if (value === 1)
        return "Water Level"
      else if (value === 2)
        return "Gas"

    }
    function sensorIcon(value) {
      if (value === 0)
        return "fa-solid fa-fire"
      else if (value === 1)
        return "fa-solid fa-droplet"
      else if (value === 2)
        return "fa-solid fa-gas-pump"

    }
    function isDetected(value, type) {
      if (value === 0 && type != 1)
        return "Not-Detected"
      else if (value === 1 && type != 1)
        return "Detected"
      else if (value === 0 && type === 1)
        return "Low"
      else if (value === 1 && type === 1)
        return "Full"
    }
    return (
      <>
        <div className="smart-nav pb-3 clearfix">
          <div className="text-box d-inline-block">
            <h3 className="text-1">
              {this.props.title ? this.props.title : `${user}'s Home`}
            </h3>
          </div>
        </div>
        <div className="row g-4 mb-3">
          {this.state.sensorData.map((value, key) => {
            // console.log(value);
            if (value.status === 1) {
              MySwal.fire({
                title: sensorType(value.type) + " " + isDetected(value.status, value.type),
                text: 'Do you want to Fix It',
                icon: 'error',
                confirmButtonText: 'YES'
              })
            }
            return <div key={key} className="col-4">
              <div className={isDetected(value.status) + " card Sensor-card"}>
                <div className="card-body">
                  <i className={sensorIcon(value.type) + " sensorIcon"}></i>
                  <h4 style={{ marginTop: "16px", marginBottom: "0px" }}>{sensorType(value.type)}</h4>
                  <h6>{isDetected(value.status, value.type)}</h6>
                </div>
              </div>
            </div>
          })}
        </div>
      </>
    );
  }
}

// import React, { Component } from "react";

// import DeviceControl from "./DeviceControl";
// export default class usersHome extends Component {
//     constructor(props) {
//         super(props);
//         console.log("props : ", this.props);
//         this.state = {
//             led: this.props.led,
//             fan: [],
//         };
//         console.log("cons state: ", this.state);
//     }

//     componentDidMount() {
//         this.setState({ led: this.props.led });

//         this.ledDevice = this.state.led.map((value, key) => {
//             console.log("in component did mount value: ", value);
//             return (
//                 <div key={key} className="col-sm-6 col-md-6">
//                     <DeviceControl
//                         ID={"light_" + value.idled}
//                         idled={value.idled}
//                         status={value.status}
//                         classname={value.className}
//                         deviceName={"light " + value.idled}
//                         className="far fa-lightbulb device-icon"
//                     />
//                 </div>
//             );
//         });
//     }

//     render() {
//         return <>
//             <div className="row mb-4 gx-4 gy-md-0 gy-4">{this.ledDevice}
//             </div></>

//     }
// }
