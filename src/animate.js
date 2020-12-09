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
};
