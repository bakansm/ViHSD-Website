import { Box, Button, Card, CircularProgress, Container, Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import axios from 'axios';
import LabelCardGroup from './components/LabelCardGroup';
import TargetCardGroup from './components/TargetCardGroup';
import LabelChart from './components/LabelChart';
import TargetChart from './components/TargetChart';
import HistoryCard from './components/HistoryCard';
import { useParams } from 'react-router-dom';
import ReplayIcon from '@mui/icons-material/Replay';

export default function YoutubeAnalystPage() {
	const [target, setTarget] = useState(undefined);
	const [label, setLabel] = useState(undefined);
	const [isLoading, setIsLoading] = useState(true);
	const { videoId } = useParams();

	useEffect(() => {
		const fetchData = async () => {
			const config = {
				method: 'get',
				maxBodyLength: Infinity,
				url: 'http://localhost:5001/api/youtube/count',
				headers: {
					'Content-Type': 'application/json',
				},
			};

			await axios
				.request(config)
				.then((response) => {
					setLabel({
						clean: response.data.clean,
						offensive: response.data.offensive,
						hate: response.data.hate,
						none: response.data.none,
					});
					setTarget({
						individual: response.data.individual,
						groups: response.data.groups,
						religion: response.data.religion,
						race: response.data.race,
						politics: response.data.politics,
						none: response.data.none,
					});
					setIsLoading(false);
				})
				.catch((error) => {
					console.log(error);
				});
		};

		fetchData();
	}, []);

	const refetchData = async () => {
		const config = {
			method: 'get',
			maxBodyLength: Infinity,
			url: 'http://localhost:5001/api/youtube/count',
			headers: {
				'Content-Type': 'application/json',
			},
		};

		await axios
			.request(config)
			.then((response) => {
				setLabel({
					clean: response.data.clean,
					offensive: response.data.offensive,
					hate: response.data.hate,
					none: response.data.none,
				});
				setTarget({
					individual: response.data.individual,
					groups: response.data.groups,
					religion: response.data.religion,
					race: response.data.race,
					politics: response.data.politics,
					none: response.data.none,
				});
				setIsLoading(false);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<>
			{isLoading ? (
				<Box
					width={'100%'}
					height={'93vh'}
					display={'flex'}
					alignItems={'center'}
					justifyContent={'center'}
					flexDirection={'column'}>
					<CircularProgress />
					<Typography>Loading</Typography>
				</Box>
			) : (
				<Container maxWidth={'xl'}>
					<Box
						marginTop={'2rem'}
						width={'100%'}
						display={'flex'}
						alignItems={'center'}
						justifyContent={'right'}>
						<Button
							variant='contained'
							onClick={refetchData}>
							Refresh <ReplayIcon />
						</Button>
					</Box>
					<Box marginTop={'2rem'}>
						<HistoryCard />
					</Box>
					<Grid
						container
						direction={'column'}
						spacing={4}
						marginTop={'1rem'}>
						{/* Label Statistics */}
						<Grid
							container
							direction={'row'}
							spacing={4}
							wrap={'wrap-reverse'}
							item>
							<Grid
								item
								lg={6}
								xs={12}>
								<Card>
									<LabelChart data={label} />
								</Card>
							</Grid>
							<Grid
								item
								xs={12}
								lg={6}>
								<LabelCardGroup data={label} />
							</Grid>
						</Grid>

						{/* Target Statistics */}
						<Grid
							container
							direction={'row'}
							spacing={4}
							item>
							<Grid
								item
								xs={12}
								lg={6}>
								<TargetCardGroup data={target} />
							</Grid>
							<Grid
								item
								lg={6}
								xs={12}>
								<Card>
									<TargetChart
										data={target}
									/>
								</Card>
							</Grid>
						</Grid>
					</Grid>
				</Container>
			)}
		</>
	);
}
