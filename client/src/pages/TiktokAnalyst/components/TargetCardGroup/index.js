import { Grid } from '@mui/material';
import TargetCard from '../TargetCard';

export default function TargetCardGroup(props) {
	const { data } = props;
	return (
		<>
			{data && (
				<Grid
					container
					direction={'row'}
					spacing={2}>
					<Grid
						item
						xs={6}
						md={6}>
						<TargetCard
							type={'individual'}
							target={data.individual}
						/>
					</Grid>
					<Grid
						item
						xs={6}
						md={6}>
						<TargetCard
							type={'groups'}
							target={data.groups}
						/>
					</Grid>
					<Grid
						item
						xs={6}
						md={6}>
						<TargetCard
							type={'race'}
							target={data.race}
						/>
					</Grid>
					<Grid
						item
						xs={6}
						md={6}>
						<TargetCard
							type={'religion'}
							target={data.relision}
						/>
					</Grid>
					<Grid
						item
						xs={6}
						md={6}>
						<TargetCard
							type={'politics'}
							target={data.politics}
						/>
					</Grid>
					<Grid
						item
						xs={6}
						md={6}>
						<TargetCard
							type={'none'}
							target={data.none}
						/>
					</Grid>
				</Grid>
			)}
		</>
	);
}
