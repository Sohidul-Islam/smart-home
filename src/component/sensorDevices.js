import React, { Component } from "react";


export default class SensorDevices extends Component {
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
    function isDetected(value) {
      if (value === 0)
        return "Not-Detected"
      else
        return "Detected"

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
          {this.props.sensorData.map((value, key) => {
            console.log(value);
            return <div key={key} className="col-4">
              {/* <DeviceControl
                ID={"light_" + led.idled}
                idled={led.idled}
                status={led.status}
                classname={led.className}
                deviceName={"light " + led.idled}
                className="far fa-lightbulb device-icon"
                ledChanged={this.props.onLedDataChange}
              /> */}
              <div className={isDetected(value.status) + " card device-card"}>
                <div className="card-body">
                  <h3>{value.id}</h3>
                  <h4>{sensorType(value.type)}</h4>
                  <i className={sensorIcon(value.type) + " sensorIcon"}></i>
                  <h4>{isDetected(value.status)}</h4>
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
