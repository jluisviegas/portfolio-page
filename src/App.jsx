import { useEffect, useRef, useState } from 'react';
import Footer from './components/Footer/Footer';
import Loader from './components/Loader/Loader';
import Navbar from './components/Navbar/Navbar';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Portfolio from './pages/Portfolio/Portfolio';

function App() {
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, 3000);
	}, []);

	return (
		<div className="App">
			{loading ? (
				<Loader loading={loading} />
			) : (
				<>
					<Home />
					<About />
					<Portfolio />
					<Contact />
					<Footer />
				</>
			)}
		</div>
	);
}

export default App;
