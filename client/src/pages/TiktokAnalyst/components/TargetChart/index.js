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

export default function TargetChart(props) {
	const { data } = props;
	const labels = ['Target Chart'];
	const chartData = {
		labels,
		datasets: [
			{
				label: 'Individual',
				data: [data.individual],
				backgroundColor: ['rgba(200,0,0,1)'],
			},
			{
				label: 'Groups',
				data: [data.groups],
				backgroundColor: ['rgba(0,200,0,1)'],
			},
			{
				label: 'Religion',
				data: [data.religion],
				backgroundColor: ['rgba(0,0,200,1)'],
			},
			{
				label: 'Politics',
				data: [data.politics],
				backgroundColor: ['rgba(200,0,200,1)'],
			},
			{
				label: 'Race',
				data: [data.race],
				backgroundColor: ['rgba(0,200,200,1)'],
			},
			{
				label: 'None',
				data: [data.none],
				backgroundColor: ['rgba(200,200,0,1)'],
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
