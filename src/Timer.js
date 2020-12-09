import React, { useState, useEffect } from 'react';

const Timer = (props) => {
	const { quizOver, currentQuestion } = props;
	const [seconds, setSeconds] = useState(0);
	const [isActive, setIsActive] = useState(true);

	function toggle() {
		setIsActive(!isActive);
	}

	function reset() {
		setSeconds(0);
		setIsActive(false);
	}

	useEffect(() => {
		let interval = null;
		if (isActive) {
			interval = setInterval(() => {
				setSeconds((seconds) => seconds + 1);
			}, 1000);
		} else if (!isActive && seconds !== 0) {
			clearInterval(interval);
		}
		return () => clearInterval(interval);
	}, [isActive, seconds]);

	useEffect(() => {
		if (!quizOver) setIsActive(false);
	}, [quizOver]);

	useEffect(() => {
		if (currentQuestion === 0) {
			reset();
			setIsActive(true);
		}
	}, [currentQuestion]);

	return (
		<div style={{ paddingBottom: '75px' }}>
			<div className='time' style={{ fontSize: '50px', color: 'white' }}>
				{seconds}s
			</div>
		</div>
	);
};

export default Timer;

//{isActive ? 'Pause' : 'Start'}
// run reset() to reset
