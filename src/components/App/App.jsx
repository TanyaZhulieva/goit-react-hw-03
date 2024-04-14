import { useState } from "react";
import "modern-normalize";
import css from "./App.module.css";
import allContacts from "../allContacts.json";
import ContactList from "../ContactList/ContactList.jsx";
import SearchBox from "../SearchBox/SearchBox.jsx";
import ContactForm from "../ContactForm/ContactForm.jsx";

export default function App() {
  const [contacts, setContacts] = useState(allContacts);
  const [filter, setFilter] = useState("");

  const addContacts = (newContact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, newContact];
    });
  };

  // const filterContacts = contacts.filter((contact) =>
  //   contact.name.toLowerCase().includes(filter.toLowerCase())
  // );

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm onAdd={addContacts} />
      <SearchBox onFilter={setFilter} value={filter} />
      <ContactList contacts={contacts} />
    </div>
  );
}
