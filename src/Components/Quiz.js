import React, { Component } from 'react'
import PropTypes from 'prop-types'

import classes from './Quiz.module.css'

import Question from './Question'
import QuestionSolution from './QuestionSolution'
import QuizProgress from './QuizProgress'

import * as questionStatus from './questionStatus'
import ScoreBar from './ScoreBar'

class Quiz extends Component {
    state = {
        currentQuestionIndex: 0,
        numOfSolvedQuestions: 0,
        currentScore: 0,
        currentQuestionStatus: questionStatus.ANSWERING
    }

    handleCorrectAnswerSelected = () => {
        if (this.state.currentQuestionStatus === questionStatus.ANSWERING) {
            this.setState(prevState => ({
                currentQuestionStatus: questionStatus.CORRECT_ANSWER,
                currentScore: prevState.currentScore + 1,
                numOfSolvedQuestions: prevState.numOfSolvedQuestions + 1
            }))
        }
    }

    handleWrongAnswerSelected = () => {
        if (this.state.currentQuestionStatus === questionStatus.ANSWERING) {
            this.setState(prevState => ({
                currentQuestionStatus: questionStatus.WRONG_ANSWER,
                numOfSolvedQuestions: prevState.numOfSolvedQuestions + 1
            }))
        }
    }

    handleNextQuestion = () => {
        const { questions } = this.props
        const { currentQuestionIndex } = this.state
        if (currentQuestionIndex !== questions.length - 1)
            this.setState(prevState => ({
                currentQuestionIndex: prevState.currentQuestionIndex + 1,
                currentQuestionStatus: questionStatus.ANSWERING
            }))

        else
            this.setState({
                currentQuestionIndex: 0,
                numOfSolvedQuestions: 0,
                currentScore: 0,
                currentQuestionStatus: questionStatus.ANSWERING
            })
    }

    render() {
        const { currentQuestionIndex, currentQuestionStatus, currentScore, numOfSolvedQuestions } = this.state
        const { questions } = this.props

        return <div className={classes.quiz}>
            <QuizProgress index={currentQuestionIndex + 1} total={questions.length} />
            <div className={classes.questionContainer}>
                <Question
                    question={questions[currentQuestionIndex]}
                    index={currentQuestionIndex}
                    total={questions.length}
                    onCorrectAnswerSelected={this.handleCorrectAnswerSelected}
                    onWrongAnswerSelected={this.handleWrongAnswerSelected}
                />
                <div className={classes.solution}>
                    {currentQuestionStatus !== questionStatus.ANSWERING && <QuestionSolution status={currentQuestionStatus} onNextQuestion={this.handleNextQuestion} />}
                </div>
                <ScoreBar score={currentScore} numOfSolvedQuestions={numOfSolvedQuestions} total={questions.length} />
            </div>
        </div>

    }
}

Quiz.propTypes = {
    questions: PropTypes.array.isRequired
}

export default Quiz
