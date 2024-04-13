import { ImPhone } from "react-icons/im";
import { IoPerson } from "react-icons/io5";
import css from "./Contact.module.css"

export default function Contact({ name, number }) {
  return (
    <>
      <div>
        <p>
          <IoPerson /> {name}
        </p>
        <p>
          <ImPhone /> {number}
        </p>
      </div>
      <button className={css.btn}>Delete</button>
    </>
  );
}
