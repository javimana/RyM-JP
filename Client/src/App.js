import "./App.css";
import { useState } from "react";
import axios from "axios";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

//Componentes
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form";
import Favorites from "./components/Favorites/Favorites";

//import { ROUTES } from '../src/routes';

function App() {
  const { pathname } = useLocation();
  const [characters, setCharacters] = useState([]);

  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const EMAIL = "";
  const PASSWORD = "";

  function login(userData) {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate("/home");
    }
  }

  function onSearch(id) {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
    // axios(`http://localhost:3001/rickandmorty/character/${id}`)
      .then(({ data }) => {
        if (
          data.name &&
          characters.findIndex((character) => character.id === data.id) === -1
        ) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("¡Ya se agregó ese personaje!");
        }
      })
      .catch((error) => {
        if (error.response) {
          window.alert("No hay personajes con ese ID!");
        }
      });
  }

  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== Number(id)));
  };

  useEffect(() => {
    !access && navigate("/");
  }, [access, navigate]);

  return (
    <div className="App">
      {pathname !== "/" && <Nav onSearch={onSearch} />}
      <Routes>
        <Route path={"/"} element={<Form login={login}/>} />
        <Route
          path={"/home"}
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path={"/about"} element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;

// import Card from './components/Card/Card.jsx';
//import SearchBar from './components/SearchBar/SearchBar';
// import characters, { Rick } from './data.js';
//import characters from './data.js';
