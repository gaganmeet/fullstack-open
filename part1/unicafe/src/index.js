import React, { useState } from "react";
import ReactDOM from "react-dom";

const Statistics = ({ good, neutral, bad }) => {
  <h1>statistics</h1>;
  if (good === 0 && neutral === 0 && neutral === 0) {
    return <p>No feedback given</p>;
  } else {
    return (
      <>
        <table>
          <tbody>
            <tr>
              <th>good</th>
              <td>{good}</td>
            </tr>
            <tr>
              <th>neutral</th>
              <td>{neutral}</td>
            </tr>
            <tr>
              <th>bad</th>
              <td>{bad}</td>
            </tr>
            <tr>
              <th>total</th>
              <td>{good + bad + neutral}</td>
            </tr>
            <tr>
              <th>average</th>
              <td>
                {(good * 1 + neutral * 0 + bad * -1) / (good + bad + neutral)}
              </td>
            </tr>
            <tr>
              <th>positive</th>
              <td>{(good / (good + bad + neutral)) * 100}</td>
            </tr>
          </tbody>
        </table>
      </>
    );
  }
};

const Buttons = (props) => {
  return <button onClick={props.handleClick}>{props.text}</button>;
};

const App = (props) => {
  const [votes, setVotes] = useState({
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
  });
  const [selected, setSelected] = useState(0);
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  let max = 0;
  let idx = 0;
  let temp = selected;
  const handleVote = () => {
    const newVotes = {
      ...votes,
    };
    newVotes[temp] += 1;
    setVotes(newVotes);
  };
  const FindMax = () => {
    for (let key in votes) {
      if (votes[key] > max) {
        max = votes[key];
        idx = key;
      }
    }
    if (max === 0) {
      return <p>no votes given</p>;
    } else {
      return (
        <>
          <p>{anecdotes[idx]}</p>
          <p>has {votes[idx]} votes</p>
        </>
      );
    }
  };
  return (
    <div>
      <h1>give feedback</h1>
      <Buttons handleClick={() => setGood(good + 1)} text="good" />
      <Buttons handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Buttons handleClick={() => setBad(bad + 1)} text="bad" />
      <Statistics good={good} neutral={neutral} bad={bad} />
      <p>{anecdotes[temp]}</p>
      <p>has {votes[temp]} votes</p>
      <Buttons
        handleClick={() => setSelected(Math.floor(Math.random() * 6))}
        text="next anecdote"
      />
      <Buttons handleClick={handleVote} text="vote" />
      <h1>Anecdote with most votes</h1>
      <FindMax />
    </div>
  );
};
const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];
ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
