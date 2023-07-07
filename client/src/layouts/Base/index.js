import Header from '../components/common/Header';

export default function BaseLayout({ children }) {
	return (
		<div>
			<Header />
			{children}
		</div>
	);
}
