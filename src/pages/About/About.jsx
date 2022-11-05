import { useEffect, useRef, useState } from 'react';
import { i18next as lng } from '../../translate/i18n';

import MeAbout from '../../assets/images/me-about.jpg';
import './style.css';

const About = () => {
	const myRef = useRef();
	const [isVisible, setIsVisible] = useState();
	console.log('Visible', isVisible);
	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				const entry = entries[0];
				setIsVisible(entry.isIntersecting);
				if (entry.isIntersecting) observer.unobserve(myRef.current);
			},
			{
				threshold: 1,
			}
		);
		observer.observe(myRef.current);
	}, []);

	return (
		<section
			className="about-section relative color-bg-bege"
			id="about-section"
		>
			<h2
				ref={myRef}
				className={`ff-primary container color-matte fw-300 uppercase ${
					isVisible ? 'fade-left-2' : ''
				}`}
			>
				{lng.t('headers.about')}
			</h2>
			<div className="bg-about-text color-variant">
				{lng.t('headers.about')}
			</div>

			<div className="container about-container">
				<div className="about-content ">
					<div className="about-me-text ">
						<p className="color-matte fw-300 fs-400 l-height">
							<span className="color-variant fw-600">
								{lng.t('description.span1')}
							</span>
							{lng.t('description.about1')}
						</p>
						<p className="color-matte fw-400 fs-400 l-height">
							{lng.t('description.about2')}
							<span className="color-variant fw-600">
								{lng.t('description.span2')}
							</span>{' '}
							{lng.t('description.about3')}
							<span className="color-variant fw-600">
								{lng.t('description.span3')}
							</span>
						</p>
					</div>

					<div className="about-me">
						<div className="about-me-image">
							<img src={MeAbout} alt="About Image" />
						</div>
					</div>
				</div>

				<h4 className="ff-primary fw-300 uppercase color-matte fs-500 center">
					{lng.t('headers.hab')}
				</h4>
				<div className="language-cards">
					<div className="language-card" data-hover="★★★★★">
						<img src="src\assets\images\html.png" alt="" />
						<small>HTML5</small>
					</div>
					<div className="language-card" data-hover="★★★★☆">
						<img src="src\assets\images\css.png" alt="" /> <small>CSS3</small>
					</div>
					<div className="language-card" data-hover="★★★★☆">
						<img src="src\assets\images\sass.png" alt="" />
						<small>SASS</small>
					</div>
					<div className="language-card" data-hover="★★★★☆">
						<img src="src\assets\images\tailwind.png" alt="" />
						<small>TailwindCSS</small>
					</div>
					<div className="language-card" data-hover="★★★☆☆">
						<img src="src\assets\images\javascript.png" alt="" />
						<small>JavaScript</small>
					</div>
					<div className="language-card" data-hover="★★★☆☆">
						<img src="src\assets\images\typescript.png" alt="" />
						<small>TypeScript</small>
					</div>
					<div className="language-card" data-hover="★★★☆☆">
						<img src="src\assets\images\react.png" alt="" />
						<small>React</small>
					</div>
					<div className="language-card" data-hover="★★★☆☆">
						<img src="src\assets\images\node.png" alt="" />
						<small>Node.js</small>
					</div>
					<div className="language-card" data-hover="★★★★☆">
						<img src="src\assets\images\next.png" alt="" />
						<small>Next.js</small>
					</div>
					<div className="language-card" data-hover="★★★☆☆">
						<img src="src\assets\images\mysql.png" alt="" />
						<small>MySQL</small>
					</div>
					<div className="language-card" data-hover="★★☆☆☆">
						<img src="src\assets\images\graphql.png" alt="" />
						<small>GraphQL</small>
					</div>
					<div className="language-card" data-hover="★★☆☆☆">
						<img src="src\assets\images\wordpress.png" alt="" />
						<small>Wordpress</small>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
