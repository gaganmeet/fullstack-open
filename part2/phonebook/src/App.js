import React, { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const handleChange = (event) => {
    setNewName(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    let res = persons.find((person) => {
      console.log(person.name);
      return person.name === newName;
    });
    if (res === undefined)
      setPersons((persons) => persons.concat({ name: newName }));
    else alert(`${newName} is already added to phonebook`);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input onChange={handleChange} value={newName} />
        </div>
        <div>
          <button onClick={onSubmit} type="submit">
            add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => (
        <p>{person.name}</p>
      ))}
    </div>
  );
};

export default App;
