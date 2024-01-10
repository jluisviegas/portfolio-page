import { DiReact } from 'react-icons/di';
import {
	card1,
	card2,
	card3,
	card4,
	css,
	graphql,
	html,
	javascript,
	maia_logo,
	mysql,
	next,
	node,
	number1,
	number2,
	number3,
	number4,
	react,
	renata_logo,
	sass,
	tailwind,
	typescript,
	wordpress,
} from './assets/images';

const projectsData = [
	{
		id: 1,
		image: card1,
		title: 'Personal Page',
		github: 'https://github.com',
		description: 'Página para apresentação e exposição de projetos pessoais ',
		stack: { lng1: 'React', lng2: 'SASS', lng3: 'Framer Motion' },
		number: number1,
		logo: maia_logo,
	},
	{
		id: 2,
		image: card2,
		title: 'HS Maia Distribuidora',
		github: 'https://github.com',
		description:
			'E-Commerce de distribuidora de Alimentos, Embalagens e Produtos de Limpeza',
		stack: { lng1: 'Wordpress', lng2: 'Elementor', lng3: 'WooCommerce' },
		number: number2,
		logo: renata_logo,
	},
	{
		id: 3,
		image: card3,
		title: 'Gabi Pães e Cia',
		github: 'https://github.com',
		description: 'https://dribble.com/shots',
		stack: { lng1: 'React', lng2: 'TypeScript', lng3: 'Tailwind' },

		number: number3,
		logo: renata_logo,
	},
	{
		id: 4,
		image: card4,
		title: 'Translator Google API',
		github: 'hhtps://github.com',
		description: 'Simple Translator using Google Translate API',
		stack: {
			img1: 'src/assets/images/javascript.png',
			img2: 'src/assets/images/css.png',
			img3: 'src/assets/images/api.png',
		},
		number: number4,
		logo: renata_logo,
	},
];

export const skillsData = [
	{
		id: 1,
		skill: html,
		title: 'HTML5',
	},
	{
		id: 2,
		skill: css,
		title: 'CSS3',
	},
	{
		id: 3,
		skill: sass,
		title: 'SASS',
	},
	{
		id: 4,
		skill: tailwind,
		title: 'TailwindCSS',
	},
	{
		id: 5,
		skill: javascript,
		title: 'Javascript',
	},
	{
		id: 6,
		skill: typescript,
		title: 'TypeScript',
	},
	{
		id: 7,
		skill: react,
		title: 'React',
	},
	{
		id: 8,
		skill: node,
		title: 'Node.js',
	},
	{
		id: 9,
		skill: next,
		title: 'Next.js',
	},
	{
		id: 10,
		skill: mysql,
		title: 'MySQL',
	},
	{
		id: 11,
		skill: graphql,
		title: 'GraphQL',
	},
	{
		id: 12,
		skill: wordpress,
		title: 'Wordpress',
	},
];

export default projectsData;
