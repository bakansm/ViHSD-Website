import { Notifications } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Avatar, Box, Button, IconButton, Stack, Toolbar, Typography } from '@mui/material';
import { useState } from 'react';
import DrawerPopup from '../../Drawer';

export default function Header() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [toggleDrawer, setToggleDrawer] = useState(false);

	return (
		<>
			<Box sx={{ flexGrow: 1 }}>
				<AppBar position='static'>
					<Toolbar>
						<IconButton
							size='large'
							edge='start'
							color='inherit'
							aria-label='menu'
							onClick={() => setToggleDrawer(true)}
							sx={{ position: 'absolute', left: '1rem' }}>
							<MenuIcon />
						</IconButton>
						<Typography
							variant='h6'
							component='div'
							textAlign={'center'}
							sx={{ flexGrow: 1 }}>
							Vietnamese Targeted Hate Speech Detection
						</Typography>
						{isLoggedIn ? (
							<Stack
								direction={'row'}
								spacing={'1rem'}
								sx={{
									position: 'absolute',
									right: '1rem',
								}}>
								<IconButton>
									<Notifications color='inherit' />
								</IconButton>
								<Avatar sx={{ bgcolor: 'orange' }}>
									BK
								</Avatar>
							</Stack>
						) : (
							<Button
								color='inherit'
								onClick={() => setIsLoggedIn(true)}
								sx={{
									position: 'absolute',
									right: '1rem',
								}}>
								Login
							</Button>
						)}
					</Toolbar>
				</AppBar>
			</Box>
			<DrawerPopup
				toggleDrawer={toggleDrawer}
				setToggleDrawer={(value) => setToggleDrawer(value)}
			/>
		</>
	);
}
