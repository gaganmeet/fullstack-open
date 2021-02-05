import React, { useState, useEffect } from "react";
import { getAll, create, update } from "./dbhandler";
import Persons from "./components/Persons";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filteredList, setFilteredList] = useState(persons);
  const [filter, setFilter] = useState("");
  useEffect(() => {
    getAll().then((response) => setPersons(response.data));
  }, [persons]);
  const handleChange = (event) => {
    setNewName(event.target.value);
  };
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };
  const handleClick = (event) => {
    event.preventDefault();
    let findName = persons.find((person) => person.name === newName);
    let findNumber = persons.find((person) => person.number === newNumber);
    if (findName === undefined && findNumber === undefined) {
      create({ name: newName, number: newNumber });
    } else {
      let findId = persons.find((person) => {
        if (person.name === newName) return person.id;
        return null;
      });
      if (
        findName !== undefined &&
        window.confirm(
          `${findName.name} already exists. Do you want to overwrite?`
        )
      ) {
        update(findId.id, { name: newName, number: newNumber });
      } else {
        if (
          window.confirm(
            `${findNumber.number} already exists. Do you want to overwrite?`
          )
        ) {
          update(findId.id, { name: newName, number: newNumber });
        }
      }
    }
  };
  const handleFilterChange = (event) => {
    setFilter(event.target.value);
    if (filter !== "") {
      setFilteredList(
        persons.filter((person) => {
          let p1 = person.name.toLowerCase();
          let p2 = filter.toLowerCase();
          return p1.includes(p2);
        })
      );
    }
  };

  return (
    <>
      <h2>Phonebook</h2>
      <div>
        <Filter onc={handleFilterChange} val={filter} />
        <h2>add a new</h2>
        <PersonForm name="name" onChange={handleChange} value={newName} />
        <PersonForm
          name="number"
          onChange={handleNumberChange}
          value={newNumber}
        />
      </div>
      <div>
        <button onClick={handleClick} type="submit">
          add
        </button>
      </div>
      <h2>Numbers</h2>
      <Persons
        filteredList={filteredList}
        persons={persons}
        setPersons={setPersons}
        filter={filter}
      />
    </>
  );
};

export default App;
