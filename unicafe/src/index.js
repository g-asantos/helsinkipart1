import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Header = (props) => {

  return (
    <div>
      <h1>{props.text}</h1>
    </div>
  )
}


const Statistic = (props) => {

  return (
      
      <tr><td>{props.text} {props.value}</td></tr>
      
  )

}

const Statistics = (props) => {
  if (props.good === 0 && props.neutral === 0 && props.bad === 0) {
    return (
          
          <tr><td>No feedback given</td></tr>
          
    )
  } else {
    return (

        <>
        <Statistic text='all' value={props.good + props.bad + props.neutral} />

        <Statistic text='average' value={(props.good * 1) + (props.neutral * 0) + (props.bad * -1) / 3} />

        <Statistic text='positive' value={`${(props.good * 100) / (props.good + props.neutral + props.bad) }%`} />
      </>
     
    )
  }
}
const Button = (props) => {

  return (
    <div>
      <button onClick={() => { props.setValue[0](props.value[0] + 1) }}>{props.text[0]}</button>
      <button onClick={() => { props.setValue[1](props.value[1] + 1) }}>{props.text[1]}</button>
      <button onClick={() => { props.setValue[2](props.value[2] + 1) }}>{props.text[2]}</button>
    </div>
  )
}


const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header text='give feedback' />
      <Button text={['good', 'neutral', 'bad']} value={[good, neutral, bad]} setValue={[setGood, setNeutral, setBad]} />
      <Header text='statistics' />
      <table>
        <tbody>
          <Statistic text='good' value={good} />
          <Statistic text='neutral' value={neutral} />
          <Statistic text='bad' value={bad} />
          <Statistics good={good} neutral={neutral} bad={bad} />
        </tbody>
      </table>
    </div>

  )

}

ReactDOM.render(<App />,
  document.getElementById('root')
)