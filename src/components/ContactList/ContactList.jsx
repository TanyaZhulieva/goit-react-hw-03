import Contact from "../Contact/Contact.jsx"
import css from "./ContactList.module.css"

export default function ContactList({contacts}) {
    return <>
<ul>
    {contacts.map(contact=>
         <li key={contact.id} className={css.contact }>
        <Contact name={contact.name} number={contact.number}  />
    </li> )
 }
</ul>
    </>
}