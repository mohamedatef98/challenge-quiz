import React, { Component } from 'react'
import PropTypes from 'prop-types'

import classes from './Question.module.css'

import QuestionHeader from './QuestionHeader'
import Button from '../Button'
import decodeText from './decodeText'


class Question extends Component {
    state = {
        orderedAnswers: [...this.props.question.incorrect_answers, this.props.question.correct_answer],
        selectedAnswer: null
    }

    componentDidUpdate(prevProps) {
        const { question } = this.props
        if (question !== prevProps.question)
            this.setState({
                orderedAnswers: [...this.props.question.incorrect_answers,
                this.props.question.correct_answer],
                selectedAnswer: null
            })
    }

    onAnswerSelected = answer => {
        const { onCorrectAnswerSelected, onWrongAnswerSelected, question } = this.props
        if (answer === question.correct_answer) onCorrectAnswerSelected()
        else onWrongAnswerSelected()
        this.setState({ selectedAnswer: answer })
    }

    render() {
        const { index, total, question } = this.props
        const { orderedAnswers, selectedAnswer } = this.state

        return <>
            <div>
                <QuestionHeader index={index} total={total} difficulty={question.difficulty} category={question.category} />
                <div>{decodeText(question.question)}</div>
            </div>
            <div className={classes.answersContainer}>
                {orderedAnswers.map(answer => {
                    /*
                        if no answer is selected
                            button should be 'primary'
                        if answer is selected
                            if the button is the correct answer
                                it should be 'selected'
                            if the button isn't the correct
                                if it was selected
                                    it should be 'secondary'
                                if it wasn't selected
                                    it should be 'disabled'
                    */
                    const color = selectedAnswer === null ? 'primary' : (answer === question.correct_answer ? 'selected' : (answer === selectedAnswer ? 'secondary': undefined))

                    const isDisabled = selectedAnswer && answer !== question.correct_answer && answer !== selectedAnswer

                    return <Button key={answer} color={color} disabled={isDisabled} onClick={() => this.onAnswerSelected(answer)}>{decodeText(answer)}</Button>
                })}
            </div>
        </>
    }

}

Question.propTypes = {
    index: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    question: PropTypes.shape({
        correct_answer: PropTypes.isRequired,
        incorrect_answers: PropTypes.array.isRequired,
        category: PropTypes.string.isRequired,
        difficulty: PropTypes.string.isRequired
    }).isRequired,
    onCorrectAnswerSelected: PropTypes.func.isRequired,
    onWrongAnswerSelected: PropTypes.func.isRequired
}

export default Question
