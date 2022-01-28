import React from "react";
import ChartJS from "./chartJsDemo";

export default function Rechart() {
    return (
        <div className="rechartBox">
            <div class="form-check">
                <input class="form-check-input chart-radio-button" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked></input>
                <label class="form-check-label" for="flexRadioDefault2" style={{ fontSize: "1vw", fontWeight: "600" }}>
                    Electricity Consumed
                </label>
            </div>
            <ChartJS></ChartJS>
        </div>
    );
}
