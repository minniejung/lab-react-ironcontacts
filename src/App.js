import "./App.css";
import React from "react";
import { useState } from "react";
import AllContacts from "./contacts.json";

function App() {
  const [contacts, setContacts] = useState(AllContacts.slice(0, 5));

  function addRandomContact() {
    const index = Math.floor(Math.random() * AllContacts.length);
    let newContact = AllContacts[index];
    let copy = [...contacts];
    copy.push(newContact);
    setContacts(copy);
  }

  const sortByName = () => {
    let copy = [...contacts];
    copy.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
    setContacts(copy);
  };

  const sortByPopularity = () => {
    let copy = [...contacts];
    copy.sort((a, b) => {
      return a.popularity - b.popularity;
    });
    setContacts(copy);
  };

  const deleteOne = (id) => {
    let copy = [...contacts];
    const foundedIdx = copy.findIndex((el) => el.id === id);
    console.log(foundedIdx);
    copy.splice(foundedIdx, 1);
    setContacts(copy);
  };

  return (
    <>
      <div className="App">
        <h1>Contacts</h1>

        <button onClick={addRandomContact}>Add Random Contact</button>
        <button onClick={sortByPopularity}>Sort by Populality</button>
        <button onClick={sortByName}>Sort by Name</button>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Won an Oscar</th>
              <th>Won an Emmy</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <tr>
                <td>
                  <img
                    src={contact.pictureUrl}
                    alt={contact.name}
                    style={{ width: "100px" }}
                  />
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity}</td>
                <td>{contact.wonOscar ? "🏆" : ""}</td>
                <td>{contact.wonEmmy ? "🏆" : ""}</td>
                <button onClick={() => deleteOne(contact.id)}>DELETE</button>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
