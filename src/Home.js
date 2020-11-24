import { Typography, Paper, Grid, Button } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import quizzes from './quizzes'


function Home() {


    const quizArr = Object.keys(quizzes)
    const quizList = quizArr.map((name)=> 
        <Grid item xs={3} style={{'margin-top': '20px'}}>
            <Link to={`/${name}`}>
            <Button elevation={3} variant="contained" color='primary' >
                <Typography>{name}</Typography>
            </Button>
            </Link>
        </Grid>
    )


    

  return (
    <div className="Home">
        <Grid container spacing={3}>
            {quizList}
        </Grid>
    </div>
  );
}

export default Home