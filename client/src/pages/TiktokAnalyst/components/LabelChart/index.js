import React from 'react';
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function LabelChart(props) {
	const { data } = props;
	const labels = ['Level Chart'];
	const chartData = {
		labels,
		datasets: [
			{
				label: 'Clean',
				data: [data.clean],
				backgroundColor: ['rgba(0,200,0,1)'],
			},
			{
				label: 'Offensive',
				data: [data.offensive],
				backgroundColor: ['rgba(200,200,0,1)'],
			},
			{
				label: 'Hate',
				data: [data.hate],
				backgroundColor: ['rgba(200,0,0,1)'],
			},
			{
				label: 'None',
				data: [data.none],
				backgroundColor: ['rgba(100,100,100,1)'],
			},
		],
	};
	const options = {
		responsive: true,
		plugins: {
			legend: {
				position: 'top',
			},
		},
	};
	return (
		<Bar
			options={options}
			data={chartData}
		/>
	);
}
