import React, { Component } from "react";
import DeviceControl from "./DeviceControl";
export default class usersHome extends Component {
    constructor(props) {
        super(props);
        console.log("props : ", this.props);
        this.state = {
            led: this.props.led,
            fan: [],
        };
        console.log("cons state: ", this.state);
    }

    componentDidMount() {
        this.setState({ led: this.props.led });

        this.ledDevice = this.state.led.map((value, key) => {
            console.log("in component did mount value: ", value);
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
    }





    render() {
        return <>
            <div className="row mb-4 gx-4 gy-md-0 gy-4">{this.ledDevice}
            </div></>

    }
}
