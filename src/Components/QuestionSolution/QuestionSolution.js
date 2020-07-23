import React from 'react'
import PropTypes from 'prop-types'

import classes from './QuestionSolution.module.css'

import Button from '../Button'

import * as questionStatus from '../questionStatus'

const QuestionSolution = ({ status, onNextQuestion }) => {
    return <div className={classes.solution}>
        <h1 className={classes.message}>{status === questionStatus.CORRECT_ANSWER ? 'Correct!' : 'Sorry!'}</h1>
        <Button onClick={onNextQuestion} className={classes.next}>Next Question</Button>
    </div>
}

QuestionSolution.propTypes = {
    status: PropTypes.oneOf([questionStatus.CORRECT_ANSWER, questionStatus.WRONG_ANSWER]).isRequired,
    onNextQuestion: PropTypes.func.isRequired
}

export default QuestionSolution
