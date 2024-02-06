import { DiReact } from 'react-icons/di';
import {
	card1,
	card2,
	card3,
	card4,
	css,
	gabi_logo,
	graphql,
	html,
	javascript,
	maia_logo,
	mysql,
	next,
	node,
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
		image: card3,
		title: 'Gabi Pães e Cia',
		github: 'https://github.com',
		description:
			'A e-commerce platform, specialized in providing a diverse range of high-quality breads, buns, cakes, and more to elevate the culinary offerings of restaurants, cafes, and various other establishments in the town. ',
		stack: '#Next • #Tailwind',
		logo: gabi_logo,
	},
	{
		id: 2,
		image: card2,
		title: 'Renata Nery Page',
		github: 'https://github.com',
		description:
			'Professional webpage for self-presentation with the primary goal of  showcasing my expertise and also to facilitate seamless communication and engagement with prospective clients.',
		stack: '#Astro • #Tailwind • #Framer Motion • #Typescript',
		logo: renata_logo,
	},
	{
		id: 3,
		image: card1,
		title: 'HS Maia Distrubuidora',
		github: 'https://github.com',
		description: 'https://dribble.com/shots',
		stack: '#Next | #Tailwind',

		logo: maia_logo,
	},
	{
		id: 4,
		image: card4,
		title: 'Portfolio Page',
		github: 'hhtps://github.com',
		description: 'Simple Translator using Google Translate API',
		stack: '#Next | #Tailwind',

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
