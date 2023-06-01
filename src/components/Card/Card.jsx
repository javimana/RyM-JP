import styles from './Card.module.css'
import { Link } from 'react-router-dom';

export default function Card(props) {
   const { id, name, status, species, gender, origin, image, onClose } = props;
   return (
      <div className={styles.wrapperCard}>

         <button onClick={() => { onClose(id) }} className={styles.cruz}>X</button>

         <img src={image} alt={name} className={styles.imagen} />

         <Link to={`/detail/${id}`}>
            <div className={styles.name}>
               <h2>{name}</h2>
            </div>
         </Link>

         <div className={styles.description}>
            <h2>{status}</h2>
            <h2>{species}</h2>
            <h2>{gender}</h2>
            <h2>{origin}</h2>
         </div>

      </div>
   );
}

