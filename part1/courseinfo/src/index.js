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
      <Part content={props.content[0].name} exercises={props.content[0].exercises} />
      <Part content={props.content[1].name} exercises={props.content[1].exercises} />
      <Part content={props.content[2].name} exercises={props.content[2].exercises} />
    </>
  )
}
const Total = (props) => {
  return(
    <>
      <p>
        {props.total[0].exercises+props.total[1].exercises+props.total[2].exercises}
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
    const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  return (
      <>
        < Course course={course.name} />
        < Content content={course.parts}  />   
        <Total total = {course.parts} />
      </>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'))