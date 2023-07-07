import { Block, CheckCircle, Error, RemoveCircle } from '@mui/icons-material';
import { Box, Card, CardActionArea, Typography } from '@mui/material';

export default function LabelCard({ type, label }) {
	return (
		<Card>
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
							{label ? label : 0}
						</Typography>
					</Box>
					<Box
						display={'flex'}
						alignItems={'center'}
						justifyContent={'center'}>
						{type === 'clean' ? (
							<CheckCircle
								color={'success'}
								fontSize='large'
							/>
						) : type === 'offensive' ? (
							<Error
								color={'warning'}
								fontSize='large'
							/>
						) : type === 'hate' ? (
							<RemoveCircle
								color={'error'}
								fontSize='large'
							/>
						) : (
							<Block
								color={'disabled'}
								fontSize='large'
							/>
						)}
					</Box>
				</Box>
			</CardActionArea>
		</Card>
	);
}
