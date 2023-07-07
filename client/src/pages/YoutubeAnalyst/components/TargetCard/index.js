import { Box, Card, CardActionArea, Typography } from '@mui/material';

export default function TargetCard({ type, target }) {
	return (
		<Card sx={{ height: '100' }}>
			<CardActionArea onClick={() => alert('Feature in update')}>
				<Box
					display={'flex'}
					alignItems={'center'}
					justifyContent={'space-between'}
					padding={'2rem'}>
					<Box>
						<Typography
							component={'h2'}
							variant={'h5'}
							fontWeight={'bold'}
							color={'GrayText'}
							textTransform={'capitalize'}>
							{type}
						</Typography>
						<Typography
							component={'h3'}
							variant={'h4'}
							fontWeight={'bold'}>
							{target ? target : 0}
						</Typography>
					</Box>
				</Box>
			</CardActionArea>
		</Card>
	);
}
