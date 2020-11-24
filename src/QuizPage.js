import React, { useEffect, useState } from 'react'
import quizzes from './quizzes'
import { Grow, Typography, Grid, Button, Paper} from '@material-ui/core'
import QuestionCard from './QuestionCard'
import Timer from './Timer'

function QuizPage(props){
    const {quizName} = props
    const quizQuestions = quizzes[quizName]

    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [score, setScore] = useState(0)

    const checkAnswer = (e) =>{
        const correctAnswer = quizQuestions[currentQuestion].correctAnswer

        if(e.currentTarget.value === correctAnswer){
            console.log(true)
            setScore(score + 1)
            // e.currentTarget.style.backgroundColor = 'green'

        }else{
            console.log(false)
        }
  
        setCurrentQuestion(currentQuestion + 1);          
    }

    const replayQuiz = () => {
        setCurrentQuestion(0);
        setScore(0)
    }

    return(
        <div className='QuizPage' style={{ flex: '1', height: '0px', backgroundColor: '#ad7979',
             backgroundImage: 'url("https://www.transparenttextures.com/patterns/black-linen-2.png")' }}>
            <Grid container direction="row" alignItems='center' justify='center' style={{height: '100%'}} >
                <Grid item xs={false} sm={2}/>
                <Grid item xs={11} sm={8} >
                    <Timer quizOver={currentQuestion <= (quizQuestions.length - 1)} currentQuestion={currentQuestion}/>

                    {currentQuestion <= (quizQuestions.length - 1) ? 
                            <QuestionCard 
                                quizName={quizName} 
                                quizQuestions={quizQuestions} 
                                currentQuestion={currentQuestion} 
                                checkAnswer={checkAnswer}
                            />
                    :
                        <Paper>
                            <Typography>End Of Quiz</Typography>
                            <Typography>Final Score {score}/{quizQuestions.length}</Typography>
                            <Button onClick={replayQuiz}>Try Again</Button>
                        </Paper>
                    }
                    
                </Grid>
                <Grid item xs={false} sm={2}/>
            </Grid>
        </div>
    );
}

export default QuizPage