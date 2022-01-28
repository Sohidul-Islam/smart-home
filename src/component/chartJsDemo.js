import React from "react";
import { Line } from "react-chartjs-2";
export default function chartJS() {
    return (
        <div>
            <Line
                datasetIdKey="id"
                data={{
                    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                    datasets: [
                        {
                            id: 2,
                            label: "temperature data",
                            data: [3, 20, 15, 25, 15, 18, 3, 20, 15, 25, 15, 18],
                            backgroundColor: [
                                'rgba(255, 182, 151, 1)',
                            ],
                        },
                    ],
                }}
            />
        </div>
    );
}
