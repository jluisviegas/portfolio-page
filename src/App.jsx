import { useEffect, useRef, useState } from 'react';
import Footer from './components/Footer';
import Loader from './components/Loader';
import Navbar from './components/navbar/Navbar';
import About from './layouts/About';
import Contact from './layouts/Contact';
import Home from './layouts/Home';
import Projects from './layouts/Projects';

function App() {
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		// setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, 5000);
	}, []);

	return (
		<div>
			{loading ? (
				<Loader loading={loading} />
			) : (
				<div>
					<Home />
					<About />
					<Projects />
					<Contact />
					<Footer />
				</div>
			)}
		</div>
	);
}

export default App;
