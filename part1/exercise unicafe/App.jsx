import { useState } from "react"

const Button = (props) => {
  return (
    <button onClick = {props.onClick}>
      {props.text}
    </button>
  )
}

const App = () => { // object
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const total = good + neutral + bad
  const avg = total === 0 ? 0 : (good - bad) / total // ternary to prevent NaN
  const posi = total === 0 ? 0 : (good / total) * 100
  
  return (
    <div>
      <h1>give feedback</h1>

      <Button onClick = {() => setGood(good + 1)} text = 'good' />
      <Button onClick = {() => setNeutral(neutral + 1)} text = 'neutral' />
      <Button onClick = {() => setBad(bad + 1)} text = 'bad' />

      <h1>statistics</h1>
      { total === 0
        ? (<p>No feedback given</p>)
        : (
        <table>
          <tbody>
            <tr>
              <td>good</td>
              <td>{good}</td>
            </tr>
            <tr>
              <td>neutral</td>
              <td>{neutral}</td>
            </tr>
            <tr>
              <td>bad</td>
              <td>{bad}</td>
            </tr>
            <tr>
              <td>all</td>
              <td>{total}</td>
            </tr>
            <tr>
              <td>average</td>
              <td>{avg}</td>
            </tr>
            <tr>
              <td>positive</td>
              <td>{posi} %</td>
            </tr>
          </tbody>
        </table>
        )
      }
      
    </div>
  )
}

export default App