import React from 'react'
import CircularSlider from '@fseehawer/react-circular-slider';
import { ReactComponent as EmojiIcon } from '../svg2.svg';

export default function roundSlider(props) {
    return (
        <div>
            <CircularSlider
                label={props.label}
                labelColor="#9897AD"
                valueFontSize="4rem"
                knobColor="rgba(0,0,0,0)"
                knobSize="40"
                progressColorFrom="#6F5CEA"
                progressColorTo="#F2946D"
                progressSize={10}
                trackColor="#eeeeee"
                trackSize={24}
                appendToValue={props.appendToValue}
                data={[0, 20, 40, 60, 80, 100]} //...
                dataIndex={props.val}

                onChange={(value) => {
                    console.log(value);

                }}

            >
                <EmojiIcon x="8" y="8" width="35px" height="27px" />
            </CircularSlider>
        </div >
    )
}