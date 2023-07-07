import { East } from '@mui/icons-material';
import {
	Box,
	Container,
	FormControl,
	IconButton,
	InputAdornment,
	InputLabel,
	OutlinedInput,
	Typography,
} from '@mui/material';
import axios from 'axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

export default function YoutubePage() {
	const { register, handleSubmit, watch } = useForm();
	const [youtubeInput, setYoutubeInput] = useState(undefined);

	const navigate = useNavigate();

	const onSubmit = async (data) => {
		const fetchData = watch(data);
		console.log(fetchData);
		const config = {
			method: 'post',
			maxBodyLength: Infinity,
			url: 'http://44.213.88.156:5000/streaming/youtube',
			headers: {
				'Content-Type': 'application/json',
			},
			data: fetchData,
		};

		axios.request(config)
			.then((response) => {
				console.log(response.data);
			})
			.catch((error) => console.log(error));
		navigate(`/youtube/${fetchData.message}`);
	};

	const handleChange = (event) => {
		setYoutubeInput(event.target.value);
	};

	return (
		<Container>
			<Box
				width={'100%'}
				height={'93vh'}
				display={'flex'}
				alignItems={'center'}
				justifyContent={'center'}>
				<Box width={'100%'}>
					<Typography
						component={'h2'}
						variant={'h3'}
						textAlign={'center'}
						marginBottom={'3rem'}>
						Enter Youtube livestream link for classifying the
						livechat
					</Typography>
					<FormControl
						onSubmit={handleSubmit(onSubmit)}
						variant='outlined'
						fullWidth>
						<InputLabel>Fill livestream link here</InputLabel>
						<OutlinedInput
							type='text'
							onChange={handleChange}
							value={youtubeInput}
							label={'Fill livestream link here'}
							endAdornment={
								<InputAdornment position='end'>
									<IconButton
										edge='end'
										onClick={onSubmit}>
										<East color='primary' />
									</IconButton>
								</InputAdornment>
							}
							{...register('message')}
						/>
					</FormControl>
				</Box>
			</Box>
		</Container>
	);
}
