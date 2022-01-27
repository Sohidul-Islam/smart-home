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

        setTimeout(() => {
            console.log("device onchange : ", props.onChange);
        }, 1000);
    }
    DeviceControlSwitch = (event) => {
        console.log(event.target.checked);
        var check = event.target.checked;
        var state = this.state;
        if (check === true) {
            state.isSwitchOn = "ON";
            state.check = true;
        } else {
            state.isSwitchOn = "OFF";
            state.check = false;
        }

        console.log(state);
        this.setState(state);
    };
    incrementValue = () => {
        // console.log("device control index: ", this.props.dataIndex);
        var tmpstate = this.state;
        tmpstate.value = tmpstate.value + 20;
        if (tmpstate.value <= 100) {
            this.setState(
                {
                    tmpstate,
                },
                () => {
                    console.log(this.state);
                }
            );
        } else {
            tmpstate.value = 0;
            this.setState(
                {
                    tmpstate,
                },
                () => {
                    console.log(this.state);
                }
            );
        }
    };
    decrementValue = () => {
        var state = this.state;
        state.value = state.value - 1;
        if (state.value >= 0) {
            this.setState(
                {
                    state,
                },
                () => {
                    console.log(this.state);
                }
            );
        } else {
            state.value = 5;
            this.setState(
                {
                    state,
                },
                () => {
                    console.log(this.state);
                }
            );
        }
    };
    getvalue = (value) => {
        console.log("get value", value);
        var state = this.state;
        state.value = value;
        this.setstate(state);
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
