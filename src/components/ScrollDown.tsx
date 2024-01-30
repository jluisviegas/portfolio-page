import ReactCurvedText from 'react-curved-text';

const ScrollDown = () => {
	return (
		<ReactCurvedText
			width={120}
			height={120}
			cx={60}
			cy={60}
			rx={50}
			ry={50}
			startOffset={0}
			reversed={false}
			text="scroll down • scroll down • scroll down •"
			textProps={{ style: { fontSize: 18 } }}
			textPathProps={{ fill: '#F1EFE9' }}
			tspanProps={{ dy: '2' }}
			ellipseProps={null}
			svgProps={{ className: 'rotating-curved-text' }}
		/>
	);
};

export default ScrollDown;
