import React, { Component } from "react";
import RoundSlider from "./roundSlider";
import Navitem from "./navitem";

class DeviceControlWithSlider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSwitchOn: "OFF",
            check: false,
            value: 0,
        };
    }
    DeviceControlSwitch = (event) => {
        var check = event.target.checked;

        if (check === true) {
            this.setState({
                isSwitchOn: "ON",
                check: true,
            });
        } else {
            this.setState({
                isSwitchOn: "OFF",
                check: false,
            });
        }
    };
    incrementValue = () => {
        var nwvalue = this.state.value + 20;
        if (nwvalue <= 100) {
            this.setState({
                value: nwvalue,
            });
        } else {
            this.setState({
                value: 0,
            });
        }
    };
    decrementValue = () => {
        const nwvalue = this.state.value - 20;
        if (nwvalue >= 0) {
            this.setState({
                value: nwvalue,
            });
        } else {
            this.setState({
                value: 100,
            });
        }
    };
    getvalue = (value) => {
        this.setState({
            value,
        });
    };
    render() {
        return (
            <div className="card device-card-with-slider">
                <div className="card-body">
                    <div className="device-switch-box">
                        <label className=" device-switch-label" htmlFor={this.props.ID}>
                            <Navitem
                                className={this.props.className}
                                text={this.props.text}
                            />
                        </label>

                        <label className="switch  device-switch float-end">
                            <input
                                type="checkbox"
                                id={this.props.ID}
                                value={this.state.isSwitchOn}
                                onClick={this.DeviceControlSwitch}
                                onChange={this.DeviceControlSwitch}
                                checked={this.state.check}
                            ></input>
                            <span className="slider round"></span>
                        </label>
                    </div>

                    <div className="text-center">
                        <div className="d-block">
                            <div className="d-none d-md-inline-block me-3">
                                <button
                                    className="d-inline-block slider-device-button btn primary-bg text-light"
                                    onClick={this.decrementValue}
                                >
                                    -
                                </button>
                            </div>
                            <div className="d-inline-block">
                                <RoundSlider
                                    label="Speed"
                                    appendToValue={this.props.appendToValue}
                                    image={this.props.image}
                                    val={this.getvalue}
                                    data={this.state.value}
                                />
                            </div>
                            <div className="d-none d-md-inline-block ms-3">
                                <button
                                    className="d-inline-block slider-device-button btn primary-bg text-light"
                                    onClick={this.incrementValue}
                                >
                                    +
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DeviceControlWithSlider;
