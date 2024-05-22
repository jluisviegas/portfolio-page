import { motion as m, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { IoMdArrowDown } from 'react-icons/io';
import { skillsData } from '../Data';
import { itemAnimated, slideRightY, slideY } from '../animation';
import { luis_about } from '../assets/images';
import LogoSlider from '../components/Tools';
import useInViewAnimation from '../hooks/useInViewAnimation';
import { useParallax } from './Projects';

const About = () => {
	const { ref, control } = useInViewAnimation();

	const sectionRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: sectionRef,
		offset: ['start end', 'end end'],
	});
	const opacitySection = useTransform(scrollYProgress, [0, 0.6], [0, 1]);

	return (
		<m.section
			className="about-section"
			id="about-section"
			ref={sectionRef}
			style={{
				opacity: opacitySection,
			}}
			initial="closed"
			whileInView="open"
			variants={slideY}
		>
			{/* Section Header */}
			<m.div className="section-header container">
				<div className="big-header ">
					Sobre Mim<span>.</span>
				</div>
			</m.div>

			<div className="about-container container">
				{/* About Descriprion */}
				<div className="about-content">
					<div className="about-description">
						<div className="content-image">
							<img src={luis_about} alt="Luis" />
						</div>
						<div className="about-main-text">
							<p>
								Com uma carreira marcada por conquistas tanto no setor privado
								quanto no público, destaco-me como um profissional
								multifacetado, com sólida experiência em
								<b> gestão de negócios, vendas e administração</b>. No entanto,
								é como desenvolvedor web que encontro minha verdadeira paixão e
								especialização desde 2020. Com
								<b> formação em Tecnologia da Informação</b> pela Canadian
								College, em Vancouver, CA, passei me dedicar a ser programador e
								juntar todo o meu conhecimento para oferecer soluções web de
								alta qualidade e impacto. Desde esse tempo, estou focado em
								colaborar em projetos <b> freelancer de criação de sites</b>,
								onde minhas habilidades garantem resultados excepcionais para
								cada cliente.
							</p>
						</div>

						<div className="bottom-tools">
							<p>FERRAMENTAS</p>
							<LogoSlider />
						</div>
						<div className="bottom-skills">
							<p>O QUE EU FAÇO?</p>
							<h4>
								UI/UX • WEB DESIGN RESPONSIVO <br /> DESENVOLVIMENTO DE SITES
								<br />
								SISTEMAS ⎯ BRANDING
							</h4>
						</div>
					</div>
				</div>
			</div>
		</m.section>
	);
};

export default About;
