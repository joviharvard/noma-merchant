import React, { useState } from 'react'
import {
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary
} from '@material-ui/core/'
import { makeStyles } from '@material-ui/core/styles'
import {
  AnalyticsQuestions,
  AppSessionQuestions,
  AccountQuestions,
  DashboardQuestions
} from './constants'
import { SingleQuestionContainer, ExpandMoreIcon } from './styles'

const useStyles = makeStyles(() => ({
  expansion: {
    borderRadius: '2px',
    border: 'none',
    boxShadow: 'none',
    width: '80%'
  },
  header: {
    fontSize: '16px',
    fontFamily: 'Nunito Sans'
  },
  text: {
    fontFamily: 'Nunito Sans',
    fontSize: '13px'
  }
}))

const QuestionList = ({ currentTab }) => {
  const [expanded, setExpanded] = useState(false)
  const classes = useStyles()

  const handleChange = panel => (event, isExpanded) => {
    if (isExpanded) {
      setExpanded(panel)
    } else {
      setExpanded(false)
    }
  }

  const QuestionSelector = tab => {
    switch (tab) {
      case 0:
        return AnalyticsQuestions
      case 1:
        return AppSessionQuestions
      case 2:
        return AccountQuestions
      default:
        return DashboardQuestions
    }
  }

  const questions = QuestionSelector(currentTab)

  return questions.map(({ id, question, answer }) => (
    <SingleQuestionContainer>
      <ExpansionPanel
        className={classes.expansion}
        expanded={expanded === id}
        onChange={handleChange(id)}
      >
        <ExpansionPanelSummary
          className={classes.header}
          expandIcon={<ExpandMoreIcon />}
        >
          {question}
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.text}>
          {answer}
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </SingleQuestionContainer>
  ))
}

export default QuestionList
