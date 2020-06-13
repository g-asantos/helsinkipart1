import React, { useState } from 'react'
import ReactDOM from 'react-dom'



const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const Button = (props) => {

  return (
    <button onClick={props.handleClick}>{props.text}</button>
  )
}

const Anecdotes = (props) => {
  return (
    <div>
      <h1>{props.text}</h1>
      <div>
        {props.anecdotes}
      </div>
      <div>
        has {props.votes} votes
      </div>
    </div>
  )
}


const CountVotes = (votes) => {
  let countdown = [...votes]

  countdown.sort(function(a, b){return a - b})

  console.log(countdown)
  return countdown[countdown.length - 1]
}




const App = (props) => {
  const [selected, setSelected] = useState(0)
  let n = 6
  const [points, setPoints] = useState(Array(n).fill(0))
  const copy = [...points]



  const vote = () => {
    copy[selected] += 1

    setPoints(copy)
  }
  const next = () => {
    setSelected(Math.floor(Math.random() * Math.floor(anecdotes.length)))
  }


  const mostVotes = CountVotes(copy)
  const topRated = (value) => {

    return value.indexOf(mostVotes)
  }

  return (
    <div>
      <Anecdotes text='Anecdote of the Day' anecdotes={props.anecdotes[selected]} votes={copy[selected]} />
      <div>
        <Button text='vote' handleClick={vote} />
        <Button text='next anecdote' handleClick={next} />
      </div>
      <Anecdotes text='Anecdote with most votes' anecdotes={props.anecdotes[topRated(copy)]} votes={mostVotes} />
    </div>

  )

}

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)