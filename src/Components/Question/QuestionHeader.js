import React from 'react'
import PropTypes from 'prop-types'

import classes from './QuestionHeader.module.css'

import decodeText from './decodeText'

import QuestionDifficulty from './QuestionDifficulty'

const QuestionHeader = ({ index, total, category, difficulty }) => {
    return <div className={classes.header}>
        <h1 className={classes.index}>Question {index + 1} of {total}</h1>
        <h5 className={classes.category}>{decodeText(category)}</h5>
        <QuestionDifficulty difficulty={difficulty} />
    </div>
}

QuestionHeader.propTypes = {
    index: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    difficulty: PropTypes.string.isRequired
}

export default QuestionHeader
