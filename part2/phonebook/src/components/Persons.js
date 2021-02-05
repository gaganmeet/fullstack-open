import React from "react";
import { deleteData, getAll } from "../dbhandler";

const Persons = (props) => {
  if (props.filter !== "") {
    return (
      <>
        {props.filteredList.map((person, index) => {
          return (
            <p key={index}>
              {person.name} {person.number}{" "}
              <button onClick={async () => await deleteData(person.id)}>
                delete
              </button>
            </p>
          );
        })}
      </>
    );
  } else {
    return (
      <>
        {props.persons.map((person, index) => {
          return (
            <p key={index}>
              {person.name} {person.number}{" "}
              <button
                onClick={() => {
                  if (window.confirm(`Delete ${person.name} ?`)) {
                    deleteData(person.id);
                  }
                }}
              >
                delete
              </button>
            </p>
          );
        })}
      </>
    );
  }
};

export default Persons;
