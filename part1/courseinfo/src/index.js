import React from 'react';
import ReactDOM from 'react-dom';

const Course = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}
const Content = (props) => {
  return(
    <>
      <Part content={props.content[0]} exercises={props.exercises[0]} />
      <Part content={props.content[1]} exercises={props.exercises[1]} />
      <Part content={props.content[2]} exercises={props.exercises[2]} />
    </>
  )
}
const Total = (props) => {
  return(
    <>
      <p>
        {props.total}
      </p>  
    </>
  )
}
const Part = (props) => {
  return (
    <>
      <p>
        {props.content} {props.exercises}
      </p> 
    </>
  )
}
const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  return (
      <>
        < Course course={course} />
        < Content content={[part1,part2,part3]} exercises={[exercises1,exercises2,exercises3]} />   
        <Total total = {exercises1+exercises2+exercises3} />
      </>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'))