import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './Home';
import QuizPage from './QuizPage';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import quizzes from './quizzes';
import { animate } from './animate';
import {
	AppBar,
	Button,
	makeStyles,
	Toolbar,
	Typography,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	button: {
		'&:hover': {
			backgroundColor: '#4b4b4b50',
		},
	},
	header: {
		backgroundImage: `url(https://www.transparenttextures.com/patterns/broken-noise.png), linear-gradient( #d6d6d6, #c7642b)`,
		paddingBottom: '5px',
	},
	titleLetter: {
		display: 'inline',
	},
}));

function App() {
	const classes = useStyles();
	const quizArr = Object.keys(quizzes);

	useEffect(() => {
		animate.titleAnimator();
	}, []);

	const quizPageList = quizArr.map((name) => (
		<Route path={`/music-quizzer/${name}`}>
			<QuizPage quizName={name} />
		</Route>
	));

	return (
		<Router>
			<div
				className='App'
				style={{
					backgroundColor: '#bb7d58',
					backgroundImage:
						'url("https://www.transparenttextures.com/patterns/brick-wall.png")',
				}}>
				<AppBar className={classes.header} position='static'>
					<Toolbar style={{ display: 'grid' }}>
						<Link
							to='/music-quizzer/'
							style={{
								textDecoration: 'none',
							}}>
							<Button
								style={{
									justifySelf: 'center',
									fontFamily: 'title',
									color: '#black',
									textShadow: '-3px 5px 3px rgba(0, 0, 0, 0.3)',
									fontSize: '50px',
									padding: '0px',
								}}
								className={classes.button}>
								{/* <Typography
									className='telo'
									style={{
										justifySelf: 'center',
										fontFamily: 'title',
										color: '#black',
										textShadow: '-3px 5px 3px rgba(0, 0, 0, 0.3)',
									}}
									variant='h2'> */}
								<span className='t1'>M</span>
								<span className='t2'>U</span>
								<span className='t3'>S</span>
								<span className='t4'>I</span>
								<span className='t5'>C</span>
								<span style={{ paddingRight: '25px' }} className='t6'>
									{' '}
								</span>
								<span className='t7'>Q</span>
								<span className='t8'>U</span>
								<span className='t9'>I</span>
								<span className='t10'>Z</span>
								<span className='t11'>Z</span>
								<span className='t12'>E</span>
								<span className='t13'>R</span>
								{/* </Typography> */}
							</Button>
						</Link>
					</Toolbar>
				</AppBar>

				<Switch>
					<Route path='/music-quizzer/' exact>
						<Home />
					</Route>
					{quizPageList}
				</Switch>
			</div>
		</Router>
	);
}

export default App;
