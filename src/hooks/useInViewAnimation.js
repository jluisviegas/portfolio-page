import { useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const useInViewAnimation = () => {
	const control = useAnimation();
	const [ref, inView] = useInView();

	useEffect(() => {
		if (inView) {
			control.start('open');
		} else {
			control.start('closed');
		}
	}, [control, inView]);

	return { ref, control };
};

export default useInViewAnimation;
