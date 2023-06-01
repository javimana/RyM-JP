import Card from '../Card/Card'; // Importa de Card.jsx
import styles from './Cards.module.css'


export default function Cards(props){
   const {characters, onClose}=props;
   return <div className={styles.mainDiv}>
      {characters.map((char)=>{
         return(
            <Card 
            id={char.id }
            key={char.id}
            name={char.name}
            status={char.status}
            species={char.species}
            gender={char.gender}
            origin={char.origin.name}
            image={char.image}
            onClose={onClose}
            />
         )
      })}
   </div>

}
   

