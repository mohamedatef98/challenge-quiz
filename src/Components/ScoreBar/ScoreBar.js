import React from 'react'
import PropTypes from 'prop-types'

import classes from './ScoreBar.module.css'

const ScoreBar = ({ score, total, numOfSolvedQuestions }) => {
    const minScore = score / total * 100
    const maxScore = (score + total - numOfSolvedQuestions) / total * 100
    const currentScore = numOfSolvedQuestions > 0 ? (score / numOfSolvedQuestions * 100) : 0


    const minScoreBarWidth = minScore
    const currentScoreBarWidth = currentScore - minScoreBarWidth >= 0 ? currentScore - minScoreBarWidth : 0
    const maxScoreBarWidth = maxScore - currentScoreBarWidth - minScoreBarWidth >= 0 ? maxScore - currentScoreBarWidth - minScoreBarWidth : 0

    return <div>
        <div className={classes.summaryContainer}>
            <div>
                Score: {currentScore.toFixed()}%
            </div>
            <div>
                Max Score: {maxScore.toFixed()}%
            </div>
        </div>
        <div className={classes.barsContainer}>
            <div className={classes.minBar} style={{ width: `${(minScoreBarWidth).toFixed()}%` }}></div>
            <div className={classes.currentBar} style={{ width: `${(currentScoreBarWidth).toFixed()}%` }}></div>
            <div className={classes.maxBar} style={{ width: `${(maxScoreBarWidth).toFixed()}%` }}></div>
        </div>
    </div>
}

ScoreBar.propTypes = {
    score: PropTypes.number.isRequired,
    numOfSolvedQuestions: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired
}

export default ScoreBar
