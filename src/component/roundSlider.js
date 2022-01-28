import React, { Component } from "react";
import CircularSlider from "@fseehawer/react-circular-slider";
// import DeviceSlider from "./DeviceControlWithSlider";
import { ReactComponent as EmojiIcon } from "../svg2.svg";

class roundSlider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: 0,
        };
        console.log("round slider: ", this.state.data);
    }

    render() {
        return (
            <div>
                <CircularSlider
                    label={this.props.label}
                    labelColor="#9897AD"
                    valueFontSize="4rem"
                    knobColor="rgba(0,0,0,0)"
                    knobSize="40"
                    progressColorFrom="#6F5CEA"
                    progressColorTo="#F2946D"
                    progressSize={10}
                    trackColor="#eeeeee"
                    trackSize={24}
                    appendToValue={this.props.appendToValue}
                    data={[0, 20, 40, 60, 80, 100]} //...
                    dataIndex={this.props.data / 20}
                    onChange={(value) => {
                        console.log("on change : value:", typeof value);
                        this.props.val(value);
                        console.log("round slider: ", this.state.data);
                    }}
                >
                    <EmojiIcon x="8" y="8" width="35px" height="27px" />
                </CircularSlider>
            </div>
        );
    }
}

export default roundSlider;
