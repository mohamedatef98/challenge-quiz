import React from 'react'
import PropTypes from 'prop-types'

import classes from './QuizProgress.module.css'

const QuizProgress = ({ index, total }) => <div>
    <div className={classes.progressBar} style={{ width: `${(index)/total * 100}%` }}></div>
</div>

QuizProgress.propTypes = {
    index: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired
}

export default QuizProgress
