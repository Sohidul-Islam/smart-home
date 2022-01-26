import React, { Component } from "react";
class DeviceControl extends Component {
    constructor(props) {
        super(props);
        if (this.props.status === "ON") {
            this.state = {
                status: props.status,
                idled: props.idled,
                check: true,
                className: props.classname,
            };
        } else {
            this.state = {
                status: props.status,
                idled: props.idled,
                check: false,
                className: props.classname,
            };
        }

    }

    DeviceControlSwitch = (event) => {
        // const url = "http://192.168.1.5:8000/led/update";
        const url = "http://192.168.1.2:8000/device/update/";
        console.log(event.target.checked);
        var check = event.target.checked;
        var state = this.state;
        if (check === true) {
            state.status = "ON";
            state.className = "lightOn";
            state.check = true;
        } else {
            state.status = "OFF";
            state.className = "lightOff";
            state.check = false;
        }

        console.log(state);
        this.setState(state);

        const requestMetadata = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(this.state),
        };
        fetch(url, requestMetadata)
            .then((res) => res.json())
            .then((recipes) => {
                this.setState({ recipes });
            });
    };

    render() {
        return (
            <div className={this.state.className + " card device-card"}>
                <div className="card-body">
                    <div className="device-switch-box">
                        <label className=" device-switch-label" htmlFor={this.props.ID}>
                            {this.state.status}
                        </label>

                        <label className="switch  device-switch float-end">
                            <input
                                type="checkbox"
                                id={this.props.ID}
                                value={this.state.status}
                                onClick={this.DeviceControlSwitch}
                                onChange={this.DeviceControlSwitch}
                                checked={this.state.check}
                            ></input>
                            <span className="slider round"></span>
                        </label>
                    </div>

                    <i className={this.props.className}></i>

                    <h2 className="device-name">{this.props.deviceName}</h2>
                </div>
            </div>
        );
    }
}

export default DeviceControl;
