import React, { useState, useEffect } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

import SaleService from '../Services/Sales';


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Legend,
)

const BarChart = (props) => {
    const [arrayLabels, setLabels] = useState([]);
    const [arrayData, setData] = useState([]);
    
    const getData = async (props) => {
        const {data} = await SaleService.get(props.options.product.id, props.options.brand.id);
        const {Labels, Data} = data;
        setLabels(Labels);
        setData(Data);
    }
    
    
    useEffect(() => {
        getData(props);
    }, [props]);
        
    
    let data = {
        labels: arrayLabels,
        datasets: [{
            title: 'Ventas',
            label: props.options.product.name,
            backgroundColor: [
                'rgba(51, 153, 255, 1)'
            ],
            borderColor: [
                'rgba(51, 153, 255, 1)'
            ],

            borderWidth: 1,
            hoverBorderWidth: 3,
            data: arrayData
        }]
    }

    const Options = {
        plugins: {
            legend: {
                display: true,
                position : 'bottom',
                labels: {
                    boxWidth: 15,
                    color: 'black',
                    font: {
                        size: 15
                    },
                },
                onClick : null
            },
        },
    };

    return (
        //tree combobox
        <div>          
            <div>
                <h4>Ventas por mes para {props.options.product.name}</h4>
            </div>                  
            <Bar
                data={data}
                height={100}
                options={Options}
            />
        </div>
        );
}

export default BarChart;
