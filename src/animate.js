import anime from 'animejs/lib/anime.es.js';

export const animate = {
	wrongAnswer(selected, correctAnswer) {
		anime({
			targets: `.${selected}`,
			backgroundColor: '#FF0000',
			easing: 'easeInOutQuad',
			duration: 300,
		});

		anime({
			targets: `.${correctAnswer}`,
			backgroundColor: '#008000',
			easing: 'easeInOutQuad',
			duration: 300,
		});
	},

	correctAnswer(selected) {
		anime({
			targets: `.${selected}`,
			backgroundColor: '#008000',
			easing: 'easeInOutQuad',
			duration: 300,
		});
	},

	resetChoiceColors(selected, correctAnswer) {
		anime({
			targets: `.${selected}, .${correctAnswer}`,
			backgroundColor: '#FFFFFF',
			duration: 0,
		});
	},

	changeQuestion() {
		anime({
			targets: `.qCard`,
			scale: '0',
			duration: 300,
			direction: 'alternate',
			easing: 'easeInOutQuad',
			delay: 200,
		});
	},

	titleAnimator() {
		for (let i = 1; i <= 13; i++) {
			anime({
				targets: `.t${i}`,
				translateY: [-7, 7],
				loop: true,
				duration: 2000,
				direction: 'alternate',
				easing: 'linear',
				delay: 100 * i,
			});
		}
	},
};
