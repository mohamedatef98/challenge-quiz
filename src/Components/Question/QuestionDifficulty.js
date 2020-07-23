import React from 'react'
import Proptypes from 'prop-types'
import cs from 'classnames'

import classes from './QuestionDifficulty.module.css'

const QuestionDifficulty = ({ difficulty }) => {
    let numberOfStars
    if (difficulty === 'hard') numberOfStars = 3
    else if (difficulty === 'medium') numberOfStars = 2
    else if (difficulty === 'easy') numberOfStars = 1
    else numberOfStars = 0

    return [1,2,3,4,5].map(el => <span className={cs([classes.star, el <= numberOfStars ? classes.black : classes.grey])} key={el}>&#128969;</span>)
}

QuestionDifficulty.propTypes = {
    difficulty: Proptypes.string.isRequired
}

export default QuestionDifficulty
