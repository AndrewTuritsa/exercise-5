import { Pie } from "react-chartjs-2"
import {
    Chart as ChartJS,
    CategoryScale,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js'
import { useEffect, useState } from 'react'

ChartJS.register(
    CategoryScale,
    ArcElement,
    Tooltip,
    Legend
)
export default function BarChart() {
    const [chartData, setChartData] = useState({
        datasets: []
    });

    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        setChartData({
            labels: ["Red", "Blue", "That", "This", "Rehtori", "Me", "Thing"],
            datasets:[
                {
                    label: '# of Votes',
                    data: [10, 6, 15, 20, 12, 5],
                    borderColor: [
                    'rgb(200, 2, 235)',
                    'rgb(20, 2, 235)',
                    'rgb(1, 162, 2)',
                    'rgb(230, 2, 2)',
                    'rgb(2, 45, 235)',
                    'rgb(20, 50, 235)'
                ],
                backgroundColor: [
                    'rgb(53, 2, 1)',
                    'rgb(53, 2, 45)',
                    'rgb(1, 162, 2)',
                    'rgb(53, 2, 2)',
                    'rgb(2, 45, 100)',
                    'rgb(53, 50, 1)'
                ],
                    
                    borderWidth: 1,

                }
            ]
        })
        setChartOptions({
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
            <Pie data={chartData} options={chartOptions} style={{width: "500px"}}/>
        </div>



        </>
    )
} 