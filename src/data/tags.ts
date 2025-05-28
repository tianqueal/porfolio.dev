import CSSIcon from '@/components/icons/CSSIcon.astro';
import HTMLIcon from '@/components/icons/HTMLIcon.astro';
import JavaScriptIcon from '@/components/icons/JavaScriptIcon.astro';
import LaravelIcon from '@/components/icons/LaravelIcon.astro';
import MotionIcon from '@/components/icons/MotionIcon.astro';
import NextJSIcon from '@/components/icons/NextJSIcon.astro';
import ReactIcon from '@/components/icons/ReactIcon.astro';
import ReactRouterIcon from '@/components/icons/ReactRouterIcon.astro';
import TailwindIcon from '@/components/icons/TailwindIcon.astro';
import TypeScriptIcon from '@/components/icons/TypeScriptIcon.astro';

const TAGS = {
	HTML: {
		name: 'HTML',
		class: 'bg-orange-600 dark:bg-orange-950 text-white',
		icon: HTMLIcon,
	},
	CSS: {
		name: 'CSS',
		class: 'bg-blue-600 dark:bg-blue-950 text-white',
		icon: CSSIcon,
	},
	JAVASCRIPT: {
		name: 'JavaScript',
		class: 'bg-yellow-600 dark:bg-yellow-950 text-white',
		icon: JavaScriptIcon,
	},
	TYPESCRIPT: {
		name: 'TypeScript',
		class: 'bg-blue-600 dark:bg-blue-950 text-white',
		icon: TypeScriptIcon,
	},
	NEXT: {
		name: 'Next.js',
		class: 'bg-black text-white',
		icon: NextJSIcon,
	},
	LARAVEL: {
		name: 'Laravel',
		class: 'bg-red-600 dark:bg-red-950 text-white',
		icon: LaravelIcon,
	},
	REACT: {
		name: 'React',
		class: 'bg-sky-600 dark:bg-sky-950 text-white',
		icon: ReactIcon,
	},
	REACT_ROUTER: {
		name: 'React Router',
		class: 'bg-red-600 dark:bg-red-950 text-white',
		icon: ReactRouterIcon,
	},
	MOTION: {
		name: 'Motion',
		class: 'bg-yellow-600 dark:bg-yellow-950 text-white',
		icon: MotionIcon,
	},
	TAILWIND: {
		name: 'Tailwind CSS',
		class: 'bg-cyan-600 dark:bg-cyan-950 text-white',
		icon: TailwindIcon,
	},
};

export default TAGS;
