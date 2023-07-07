import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BaseLayout from './layouts/Base';
import HomePage from './pages/Home';
import ErrorPage from './pages/Error';
import YoutubePage from './pages/Youtube';
import TiktokPage from './pages/Tiktok';
import FacebookPage from './pages/Facebook';
import YoutubeAnalystPage from './pages/YoutubeAnalyst';


function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path='/'
					element={
						<BaseLayout>
							<HomePage />
						</BaseLayout>
					}
					errorElement={<ErrorPage />}
				/>
				<Route
					path='facebook'
					element={
						<BaseLayout>
							<FacebookPage />
						</BaseLayout>
					}
					errorElement={<ErrorPage />}
				/>
				<Route
					path='tiktok'
					element={
						<BaseLayout>
							<TiktokPage />
						</BaseLayout>
					}
					errorElement={<ErrorPage />}
				/>
				<Route
					path='youtube'
					element={
						<BaseLayout>
							<YoutubePage />
						</BaseLayout>
					}
					errorElement={<ErrorPage />}
				/>
				<Route
					path='youtube/:videoId'
					element={
						<BaseLayout>
							<YoutubeAnalystPage />
						</BaseLayout>
					}
					errorElement={<ErrorPage />}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
