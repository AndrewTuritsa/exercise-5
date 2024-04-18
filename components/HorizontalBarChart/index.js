import { Bar } from "react-chartjs-2"
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'
import { useEffect, useState } from 'react'

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)
export default function HorizontalBar() {
    const [chartData, setChartData] = useState({
        datasets: []
    });

    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        setChartData({
            labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            datasets:[
                {
                    label: 'Data 1',
                    data: [20, 6, 15, 10, 12, 4, 5],
                    borderColor: 'rgb(53, 162, 235)',
                    backgroundColor: 'rgba(53, 162, 100, 0.4)'

                },
                {
                    label: 'Data 2',
                    data: [10, 2, 15, 20, 12, 4, 20],
                    borderColor: 'rgb(53, 162, 235)',
                    backgroundColor: 'rgba(100, 50, 235, 0.4)'
                },
                {
                    label: 'Data 3',
                    data: [1, 6, 15, 3, 5, 4, 12],
                    borderColor: 'rgb(53, 162, 235)',
                    backgroundColor: 'rgba(5, 20, 235, 0.4)'
                }
            ]
        })
        setChartOptions({
            indexAxis: 'y',
            plugins: {
                legend: {
                    position: 'top'
                },
                title: {
                    display: true,
                    text: 'Daily Revenu'
                },
                maintainAspectRatio: false,
                responsive: true,
            }
        })
    })
    return(
        <>
        
        <div>
            <Bar data={chartData} options={chartOptions} style={{width: "500px"}}/>
        </div>



        </>
    )
} 