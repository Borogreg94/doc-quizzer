import React, { useEffect, useState } from 'react';
import quizzes from './quizzes';
import { Grow, Card, Typography, Grid, Button, Paper } from '@material-ui/core';
import QuestionCard from './QuestionCard';
import Timer from './Timer';
import { animate } from './animate';

function QuizPage(props) {
	const { quizName } = props;
	const quizQuestions = quizzes[quizName].questionList;
	const imgList = quizzes[quizName].imgList;

	const [currentQuestion, setCurrentQuestion] = useState(0);

	const [score, setScore] = useState(0);

	const checkAnswer = (e) => {
		const correctAnswer = quizQuestions[currentQuestion].correctAnswer;
		let selected = e.currentTarget.value;

		console.log('selected', selected);

		if (selected === correctAnswer) {
			console.log(true);
			setScore(score + 1);
			animate.correctAnswer(selected);
		} else {
			console.log(false);
			animate.wrongAnswer(selected, correctAnswer);
		}

		setTimeout(() => {
			animate.changeQuestion();
		}, 1200);

		setTimeout(() => {
			animate.resetChoiceColors(selected, correctAnswer);
			setCurrentQuestion(currentQuestion + 1);
		}, 1700);
	};

	const replayQuiz = () => {
		setCurrentQuestion(0);
		setScore(0);
	};

	return (
		<div
			className='QuizPage'
			style={{
				flex: '1',
				height: '0px',
				backgroundColor: '#ad7979',
				backgroundImage: `url(${imgList[currentQuestion]})`,
				transition: 'background-image 1s',
			}}>
			<Grid
				container
				direction='row'
				alignItems='stretch'
				justify='center'
				style={{ height: '100%' }}>
				<Grid item xs={false} sm={2} />
				<Grid
					item
					style={{
						backgroundColor: 'rgba(0, 0, 0, 0.55)',
						display: 'grid',
						padding: '0 20px 0 20px',
					}}
					xs={11}
					sm={7}>
					{/* <Timer
						quizOver={currentQuestion <= quizQuestions.length - 1}
						currentQuestion={currentQuestion}
					/> */}

					{currentQuestion <= quizQuestions.length - 1 ? (
						<QuestionCard
							quizName={quizName}
							quizQuestions={quizQuestions}
							currentQuestion={currentQuestion}
							checkAnswer={checkAnswer}
						/>
					) : (
						<Card className='qCard' style={{ alignSelf: 'center' }}>
							<Typography>End Of Quiz</Typography>
							<Typography>
								Final Score {score}/{quizQuestions.length}
							</Typography>
							<Button onClick={replayQuiz}>Try Again</Button>
						</Card>
					)}
				</Grid>
				<Grid item xs={false} sm={2} />
			</Grid>
		</div>
	);
}

export default QuizPage;
