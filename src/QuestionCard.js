import React from 'react';

import {
	Card,
	Grid,
	Typography,
	CardContent,
	Button,
	makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles({
	button: {
		textAlign: 'left',
		paddingLeft: '10px',
		marginTop: '30px',
	},
});

function QuestionCard(props) {
	const { quizName, quizQuestions, currentQuestion, checkAnswer } = props;

	const classes = useStyles();

	return (
		<Card className='qCard' style={{ alignSelf: 'center' }}>
			<Grid
				container
				style={{ border: '1px solid black', padding: '0 10px 0 10px' }}>
				<Grid item xs={6}>
					<Typography style={{ textAlign: 'left' }}>{quizName}</Typography>
				</Grid>

				<Grid item xs={6}>
					<Typography style={{ textAlign: 'right' }}>
						{' '}
						Question {currentQuestion + 1}/{quizQuestions.length}
					</Typography>
				</Grid>
			</Grid>

			<CardContent>
				<Typography>{quizQuestions[currentQuestion].question}</Typography>

				<Grid container direction='column' alignItems='flex-start'>
					<Grid item xs={12}>
						<Button
							className={[classes.button, `a`]}
							variant='outlined'
							onClick={checkAnswer}
							value='a'>
							{quizQuestions[currentQuestion].answers.a}
						</Button>
					</Grid>

					<Grid item xs={12}>
						<Button
							className={[classes.button, `b`]}
							variant='outlined'
							onClick={checkAnswer}
							value='b'>
							{quizQuestions[currentQuestion].answers.b}
						</Button>
					</Grid>

					{quizQuestions[currentQuestion].answers.c ? (
						<Grid item xs={12}>
							<Button
								className={[classes.button, `c`]}
								variant='outlined'
								onClick={checkAnswer}
								value='c'>
								{quizQuestions[currentQuestion].answers.c}
							</Button>
						</Grid>
					) : null}

					{quizQuestions[currentQuestion].answers.d ? (
						<Grid item xs={12}>
							<Button
								className={[classes.button, `d`]}
								variant='outlined'
								onClick={checkAnswer}
								value='d'>
								{quizQuestions[currentQuestion].answers.d}
							</Button>
						</Grid>
					) : null}
				</Grid>
			</CardContent>
		</Card>
	);
}

export default QuestionCard;
