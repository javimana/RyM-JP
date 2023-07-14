import styles from './SearchBar.module.css'
import { useState } from 'react';


export default function SearchBar(props) {

   const {onSearch,onSearchRandom, logout} = props;

   const [id, setId] = useState('');

    const handleChange = (event)=>{
      setId(event.target.value)
    };


   return (
      <div className={styles.checkbox}>
         <input type='search' onChange={handleChange} value={id}/>
         <button onClick={()=>{onSearch(id)}} className={styles.buttonAgregar}>Add</button>
         <button onClick={()=>{onSearchRandom()}} className={styles.buttonAleatorio}>Random</button>
         <button onClick={() => {logout()}} className={styles.buttonLogout}>Logout</button>
      </div>
   );
}
