import css from "./SearchBox.module.css"

export default function SearchBox({value}) {
    return <>
    <label htmlFor="search" className={css.search }>Find contacts by name
    <input type="text" id="search" className={css.input}></input>
    </label>
    
    </>
}