import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { addFav, removeFav } from "../../redux/actions";
import styles from "./Card.module.css";

function Card(props) {
  const {
    id,
    name,
    status,
    species,
    gender,
    //  origin,
    image,
    onClose,
    addFav,
    removeFav,
    myFavorites,
  } = props;

  const [isFav, setIsFav] = useState(false);
  const { pathname } = useLocation();
  console.log(pathname);

  const handleFavorite = () => {
    isFav ? removeFav(id) : addFav(props);
    setIsFav(!isFav);
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === props.id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  return (
    <div className={styles.wrapperCard}>
      {isFav ? (
        <button onClick={handleFavorite} className={styles.heartButton}>
          ❤️
        </button>
      ) : (
        <button onClick={handleFavorite} className={styles.heartButton}>
          🤍
        </button>
      )}
      {/* <button onClick={() => {onClose(id)}} className={styles.cruz}>X</button> */}
      {pathname !== "/favorites" ? (
        <button className={styles.cruz} onClick={() => onClose(id)}>
          X
        </button>
      ) : (
        <button className={styles.cruz}>X</button>
      )}

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
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => {
      dispatch(addFav(character));
    },
    removeFav: (id) => {
      dispatch(removeFav(id));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
