import React, { useState } from "react";

const Form = (props) => {
  return <input onChange={props.onchange} value={props.value} />;
};

const Persons = (props) => {
  return (
    <>
      {props.filteredList.map((person) => (
        <p key={person.number}>
          {person.name} {person.number}
        </p>
      ))}
    </>
  );
};

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456" },
    { name: "Ada Lovelace", number: "39-44-5323523" },
    { name: "Dan Abramov", number: "12-43-234345" },
    { name: "Mary Poppendieck", number: "39-23-6423122" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState();
  const [filterName, setFilterName] = useState("");

  const handleChange = (event) => {
    setNewName(event.target.value);
  };
  const numberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleFilter = (event) => {
    setFilterName(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    let res = persons.find((person) => person.name === newName);
    let resp = persons.find((person) => person.number === newNumber);
    if (res === undefined && resp === undefined)
      setPersons((persons) =>
        persons.concat({ name: newName, number: newNumber })
      );
    else {
      if (res !== undefined) alert(`${newName} is already added to phonebook`);
      else alert(`${newNumber} is already added to phonebook`);
    }
  };
  let filteredList = persons.filter((person) => {
    let p1 = person.name.toLowerCase();
    let p2 = filterName.toLowerCase();
    return p1.includes(p2);
  });

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          <p>
            Filter shown with
            <Form onchange={handleFilter} value={filterName} />
          </p>
          <h1>Add a new contact</h1>
          <p>
            name: <Form onchange={handleChange} value={newName} />
          </p>
          <p>
            number: <Form onchange={numberChange} value={newNumber} />
          </p>
        </div>
        <div>
          <button onClick={onSubmit} type="submit">
            add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Persons filteredList={filteredList} />
    </div>
  );
};

export default App;
