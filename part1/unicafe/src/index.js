import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = ({name}) => <h1>{name}</h1>

const Button = ({onClick,text}) => <button onClick = {onClick}>{text}</button>

const Statistic = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

const Statistics = ({good, neutral, bad}) => {

  const total = good + neutral + bad

  if (total === 0){
    return <div>No feedback given</div>
  }

  const average = () => (good - bad) / total

  const positive = () => (good / total) * 100 + '%'

  return(
    <table>
      <tbody>
        <Statistic text='good' value={good}/>
        <Statistic text='neutral' value={neutral}/>
        <Statistic text='bad' value={bad}/>
        <Statistic text='all' value={total}/>
        <Statistic text='average' value={average()}/>
        <Statistic text='positive' value={positive()}/>
      </tbody>
    </table>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const name = 'give feedback'

  const handleGoodClick = () => setGood(good + 1)
  const handleNeutralClick = () => setNeutral(neutral + 1)
  const handleBadClick = () => setBad(bad + 1)

  return (
    <div>
      <Header name = {name}/>
      <Button onClick = {handleGoodClick} text ='good'/>
      <Button onClick = {handleNeutralClick} text ='neutral'/>
      <Button onClick = {handleBadClick} text ='bad'/>
      <Header name = 'statistics'/>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)