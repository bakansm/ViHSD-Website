import {
	Box,
	Divider,
	Drawer,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function DrawerPopup({ toggleDrawer, setToggleDrawer }) {
	const navigate = useNavigate();

	return (
		<Drawer
			anchor={'left'}
			open={toggleDrawer}
			onClose={() => setToggleDrawer(false)}>
			<Box
				sx={{ width: 250 }}
				role='presentation'
				onClick={() => setToggleDrawer(false)}>
				<List>
					<ListItem disablePadding>
						<ListItemButton onClick={() => navigate('/')}>
							<ListItemIcon>
								<Box
									display={'flex'}
									alignItems={'center'}
									justifyContent={'center'}
									width={24}
									height={24}>
									<img
										src='/assets/icons/Drawer/home.png'
										alt={'tiktok-icon'}
										width={18}
										height={18}
									/>
								</Box>
							</ListItemIcon>
							<ListItemText>Home</ListItemText>
						</ListItemButton>
					</ListItem>
				</List>
				<Divider />
				<List>
					<ListItem disablePadding>
						<ListItemButton
							onClick={() => navigate('/youtube')}>
							<ListItemIcon>
								<Box
									display={'flex'}
									alignItems={'center'}
									justifyContent={'center'}
									width={24}
									height={24}>
									<img
										src='/assets/icons/Drawer/youtube.png'
										alt={'tiktok-icon'}
										width={18}
										height={18}
									/>
								</Box>
							</ListItemIcon>
							<ListItemText>Youtube</ListItemText>
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding>
						<ListItemButton onClick={() => navigate('/tiktok')}>
							<ListItemIcon>
								<Box
									display={'flex'}
									alignItems={'center'}
									justifyContent={'center'}
									width={24}
									height={24}>
									<img
										src='/assets/icons/Drawer/tiktok.png'
										alt={'tiktok-icon'}
										width={18}
										height={18}
									/>
								</Box>
							</ListItemIcon>
							<ListItemText>Tiktok</ListItemText>
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding>
						<ListItemButton
							onClick={() => navigate('/facebook')}>
							<ListItemIcon>
								<Box
									display={'flex'}
									alignItems={'center'}
									justifyContent={'center'}
									width={24}
									height={24}>
									<img
										src='/assets/icons/Drawer/facebook.png'
										alt={'tiktok-icon'}
										width={18}
										height={18}
									/>
								</Box>
							</ListItemIcon>
							<ListItemText>Facebook</ListItemText>
						</ListItemButton>
					</ListItem>
				</List>
			</Box>
		</Drawer>
	);
}
