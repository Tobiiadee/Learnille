/** @format */

import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Study_Chart_Data } from "../Chart_Data/Study_Chart_Data";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function Study_Chart() {
    const options = {
        responsive: true,
        layout: {
            autoPadding: false
        },
        plugins: {
            legend: {
                display: false
            }
        }
    };

  return (
    <div>
      <Bar options={options} data={Study_Chart_Data}/>
    </div>
  );
}
