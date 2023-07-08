import { Grid } from '@mui/material';
import LabelCard from '../LabelCard';

export default function LabelCardGroup(props) {
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
						xs={12}
						md={6}>
						<LabelCard
							type={'clean'}
							label={data.clean}
						/>
					</Grid>
					<Grid
						item
						xs={12}
						md={6}>
						<LabelCard
							type={'offensive'}
							label={data.offensive}
						/>
					</Grid>
					<Grid
						item
						xs={12}
						md={6}>
						<LabelCard
							type={'hate'}
							label={data.hate}
						/>
					</Grid>
					<Grid
						item
						xs={12}
						md={6}>
						<LabelCard
							type={'none'}
							label={data.none}
						/>
					</Grid>
				</Grid>
			)}
		</>
	);
}
