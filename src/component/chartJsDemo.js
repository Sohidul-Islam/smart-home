import React, { useState, useEffect, useRef } from "react";
import { Line } from "react-chartjs-2";
export default function ChartJSDemo() {
    const [state, setState] = useState({
        data: [12, 20, 15, 25, 15, 18, 3, 20, 15, 25, 15, 18],
    });

    const value = state.data;
    console.log(value);
    const refHolder = useRef();
    useEffect(() => {
        setInterval(() => {
            changedata();
        }, 2000);
        console.log("state changed");
        // console.log("ref; ", refHolder.current.props.data.datasets[0].data);
    }, state.data);

    const chartData = {
        labels: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
        ],
        datasets: [
            {
                id: 2,
                label: "temperature data",
                data: state.data,
                backgroundColor: ["rgba(255, 182, 151, 1)"],
            },
        ],
    };
    const changedata = () => {
        var tmp = state.data;
        for (let i = 0; i < 12; i++) {
            tmp[i] = Math.floor(Math.random() * 100);

            console.log("tmp: ", tmp[i]);
        }

        setState({ data: tmp });
        console.log("state; ", state);
        console.log("ref; ", refHolder.current.updater.enqueueForceUpdate);
    };

    const updatechart = () => {
        setState({ data: state.data });
        console.log("mouse on");
    };

    const element = () => {
        return <Line
            ref={refHolder}
            onmouseover={updatechart}
            datasetIdKey="id"
            data={chartData}
        />
        setInterval(element(), 2000);
    }
    return (
        <div>
            {element()}
        </div>
    );
}
