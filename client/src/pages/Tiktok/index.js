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

export default function TiktokPage() {
	const { register, handleSubmit, watch } = useForm();
	const [tiktokInput, setTiktokInput] = useState(undefined);

	const navigate = useNavigate();

	const onSubmit = async (data) => {
		const fetchData = watch(data);
		console.log(fetchData);
		const config = {
			method: 'post',
			maxBodyLength: Infinity,
			url: 'http://localhost:5000/streaming/tiktok',
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
		navigate(`/tiktok/${fetchData.message}`);
	};

	const handleChange = (event) => {
		setTiktokInput(event.target.value);
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
						Enter Tiktok livestream link for classifying the
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
							value={tiktokInput}
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
