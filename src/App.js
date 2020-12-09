import React, { useState } from 'react';
import './App.css';
import Home from './Home';
import QuizPage from './QuizPage';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import quizzes from './quizzes';
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
}));

function App() {
	const classes = useStyles();
	const quizArr = Object.keys(quizzes);

	const quizPageList = quizArr.map((name) => (
		<Route path={`/${name}`}>
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
							to='/'
							style={{
								textDecoration: 'none',
							}}>
							<Button className={classes.button}>
								<Typography
									style={{
										justifySelf: 'center',
										fontFamily: 'title',
										color: '#black',
										textShadow: '-3px 5px 3px rgba(0, 0, 0, 0.3)',
									}}
									variant='h2'>
									Music Quizzer
								</Typography>
							</Button>
						</Link>
					</Toolbar>
				</AppBar>

				<Switch>
					<Route path='/' exact>
						<Home />
					</Route>
					{quizPageList}
				</Switch>
			</div>
		</Router>
	);
}

export default App;
