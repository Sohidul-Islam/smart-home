import React from "react";
import {
    AreaChart,
    Area,
    Tooltip,
    XAxis,
    YAxis,
    ResponsiveContainer
} from "recharts";
const data = [
    { name: "Jan", uv: 400, pv: 2400, amt: 2400 },
    { name: "Feb", uv: 500, pv: 3000, amt: 2400 },
    { name: "Mar", uv: 400, pv: 2400, amt: 2400 },
    { name: "Apr", uv: 700, pv: 3500, amt: 2400 },
    { name: "May", uv: 800, pv: 3500, amt: 2400 },
    { name: "Jun", uv: 900, pv: 3500, amt: 2400 },
    { name: "Jul", uv: 1000, pv: 3500, amt: 2400 },
    { name: "Aug", uv: 1100, pv: 3500, amt: 2400 },
    { name: "Sep", uv: 800, pv: 3500, amt: 2400 },
    { name: "Oct", uv: 500, pv: 3500, amt: 2400 },
    { name: "Nov", uv: 600, pv: 3500, amt: 2400 },
    { name: "Dec", uv: 650, pv: 3500, amt: 2400 },
];
export default function Rechart() {
    return (
        <div className="rechartBox">
            <div class="form-check">
                <input class="form-check-input chart-radio-button" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked></input>
                <label class="form-check-label" for="flexRadioDefault2" style={{ fontSize: "1vw", fontWeight: "600" }}>
                    Electricity Consumed
                </label>
            </div>
            <ResponsiveContainer width={"100%"} height={"100%"}>
                <AreaChart data={data} width={"400"} height={"200"}>
                    <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#FF611F" />
                    {/* <CartesianGrid stroke="#ccc" strokeDasharray="5 5" /> */}
                    <XAxis dataKey="name" />
                    <YAxis />

                    <Tooltip />
                </AreaChart>
            </ResponsiveContainer>


        </div>
    );
}
