import "./App.css";
import vector1 from "./vector1.png";
import vector2 from "./raindrop-close-up.png";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";
import WelcomeUser from "./component/WelcomeUser";
import DeviceControl from "./component/DeviceControl";
import Navitem from "./component/navitem";
import DeviceControlWithSlider from "./component/DeviceControlWithSlider";
import Chart from "./component/chart";
import axios from "axios";
import React, { useEffect, useState } from "react";

function App() {
  const [listOfLed, setLedState] = useState([]);
  const [listOfFan, setFanState] = useState([]);
  const [DeviceStatesList, setDeviceStatesList] = useState([{ status: "ON" }]);
  const [DeviceStateListResult, setDeviceStateListResult] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/led")
      .then((res) => {
        // console.log("element ", res.data);
        setLedState(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
    axios
      .get("http://localhost:8000/fan")
      .then((res) => {
        // console.log("fan ", res.data);
        setFanState(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  var user = "Shufol";
  var ledData = listOfLed.map((value, key) => {
    return (
      <div key={key} className="col-sm-6 col-md-6">
        <DeviceControl
          ID={"light_" + value.idled}
          idled={value.idled}
          status={value.status}
          classname={value.className}
          deviceName={"light " + value.idled}
          className="far fa-lightbulb device-icon"
        />
      </div>
    );
  });
  var ledData2 = DeviceStateListResult.map((value, key) => {
    // console.log("Led 2", value);
    return (
      <div key={key} className="col-sm-6 col-">
        <DeviceControl
          ID={"light_led2_" + value.idled}
          idled={value.idled}
          status={value.status}
          classname={value.className}
          deviceName={"light " + value.idled}
          className="far fa-lightbulb device-icon"
        />
      </div>
    );
  });
  var fanData = listOfFan.map((value, key) => {
    return (
      <div key={key} className="col-12">
        <DeviceControlWithSlider
          appendToValue={"%"}
          image={vector2}
          status={value.status}
          fan_id={value.fan_id}
          speed={value.speed}
          className="fas fa-fan device-icon"
          text={"Fan " + value.fan_id}
        />
      </div>
    );
  });


  const onOffFilter = (isSwitchOn) => {
    // console.log(DeviceStatesList);
    const value = {
      status: isSwitchOn
    }
    const tmp = [];
    // console.log(JSON.stringify(value));
    const url = "http://localhost:8000/led/status";
    const requestMetadata = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(value),
    };
    fetch(url, requestMetadata)
      .then((res) => res.json())
      .then((recipes) => {
        // console.log("DAta get", recipes);
        setDeviceStateListResult(recipes);
      });

  }

  const FindDeviceAsStatus = (e) => {
    console.log("Selected: ", e.target.selected);
    setDeviceStatesList({ status: e.target.value })
    onOffFilter(e.target.value);
    console.log(DeviceStateListResult);
  }

  return (
    <div className="App">
      <div className="container">
        <div className="row clearfix g-5">
          <div className="col-md-8 col-12  ">
            <div className="smart-nav my-3">
              <div
                className="text-box d-inline-block"
                style={{ width: "100%" }}
              >
                <div className="nav-form-box " style={{ width: "100%" }}>
                  <i className="fas fa-search nav-icon"></i>
                  <input
                    type="text"
                    placeholder="Search"
                    className="nav-form"
                    aria-label="Default select example"
                    style={{ width: "90%" }}
                  ></input>
                </div>
              </div>
            </div>
            <WelcomeUser image={vector1} name="Shufol" temperature={25} />
            <div className="smart-nav pb-3 clearfix">
              <div className="text-box d-inline-block">
                <h3 className="text-1">{user}'s Home</h3>
              </div>
              <div className="nav-item-box float-lg-end">
                <div className="row">
                  <div className="col">
                    <Navitem text="35%" className="fas fa-tint" />
                  </div>
                  <div className="col">
                    <Navitem
                      text="25ºC"
                      className="fas fa-thermometer-quarter"
                    />
                  </div>
                  <div className="col">
                    <div className="nav-form-box">
                      <select
                        className="nav-form"
                        aria-label="Default select example"
                      >
                        <option>Select Room</option>
                        <option>Living Room</option>
                        <option>Kitchen Room</option>
                        <option>Dining Room</option>
                      </select>

                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mb-4 gx-4 gy-md-0 gy-4">{ledData}</div>
            {/* round slider */}
            <div className="DeviceSlider pb-4">
              {fanData}
            </div>
          </div>
          <div className="col-md-4 col-12 smart-col2 ">
            <div className="smart-nav pb-3 clearfix my-device-nav ">
              <div className="text-box d-inline-block">
                <h3 className="text-1">My Devices</h3>
              </div>
              <div className="nav-item-box float-lg-end">
                <div className="row">
                  <div className="col">
                    <div className="nav-form-box">
                      <select
                        className="nav-form"
                        aria-label="Default select example"
                        value={`${DeviceStatesList.status}`}
                        onChange={FindDeviceAsStatus}
                      >
                        <option >Select State</option>
                        <option value="ON">
                          ON
                        </option>
                        <option value="OFF">OFF</option>
                      </select>

                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="row g-4">{ledData2}</div>

              {/* chart */}
              <div className="smart-nav py-3 clearfix my-device-nav ">
                <div className="text-box d-inline-block">
                  <h3 className="text-1">Power Consumed</h3>
                </div>
                <div className="nav-item-box float-lg-end">
                  <div className="row">
                    <div className="col">
                      <div className="nav-form-box">
                        <select
                          className="nav-form"
                          aria-label="Default select example"
                        >
                          <option>Select Option</option>
                          <option>
                            Month
                          </option>
                          <option>Year</option>
                        </select>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Chart />

              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
