import React from 'react'

import classes from './App.module.css'

import Quiz from './Components/Quiz'

import questions from './questions.json'

const App = () => {
    return (
        <div className={classes.app}>
            <Quiz questions={questions} />
        </div>
    )
}

export default App
