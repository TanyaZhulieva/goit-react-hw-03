import { useState } from "react";
import "modern-normalize";
import css from "./App.module.css" 
// import { Formik } from "formik";
import ContactList from "../ContactList/ContactList.jsx"
import SearchBox from "../SearchBox/SearchBox.jsx"



export default function App() {

  const [contacts, setContacts] = useState([
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ]);
  
  const [input, setInput] = useState("")

  const handleChange = (evt)=> {
    setInput(evt.target.value)
  }

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <SearchBox onChange={handleChange} value={input} />
      <ContactList contacts={contacts} />
    </div>
  );
}
