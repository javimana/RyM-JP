import axios from "axios"; //Importa el módulo axios, que es una biblioteca para hacer solicitudes HTTP en el navegador o en Node.js.
import { useEffect, useState } from "react"; //Importa la función useState de la librería React. useState se utiliza para declarar estados en componentes funcionales.
import { Route, Routes, useLocation, useNavigate } from "react-router-dom"; //Importa varios elementos de la librería react-router-dom, que se utilizan para manejar el enrutamiento en la aplicación de React.
import "./App.css"; //Importa el archivo App.css, que contiene estilos CSS específicos para el componente App.

//Componentes: A continuación, se importan varios componentes desde sus archivos correspondientes:
import About from "./components/About/About";
import Cards from "./components/Cards/Cards.jsx";
import Detail from "./components/Detail/Detail";
import Favorites from "./components/Favorites/Favorites";
import Form from "./components/Form/Form";
import Nav from "./components/Nav/Nav";

//import { ROUTES } from '../src/routes';

//Define el componente principal App que será exportado y renderizado en el punto de entrada de la aplicación.
function App() {
  const { pathname } = useLocation(); //Usa el hook useLocation para obtener la ubicación actual del enrutamiento. pathname contiene la ruta actual de la aplicación.
  const [characters, setCharacters] = useState([]); // Crea un estado llamado characters inicializado como una matriz vacía. setCharacters es una función que se utilizará para actualizar el estado characters.
  const [clearAll, setClearAll] = useState(false);

  

  const navigate = useNavigate(); //Usa el hook useNavigate para obtener la función de navegación navigate. Se utiliza para cambiar la ruta de la aplicación programáticamente.
  const [access, setAccess] = useState(false); //Crea un estado llamado access inicializado en false. Se utiliza para controlar si el usuario ha iniciado sesión o no.
  // const EMAIL = "jpereyra1979@gmail.com"; //Define una constante EMAIL que contiene una dirección de correo electrónico predeterminada.
  // const PASSWORD = "abc123"; //Define una constante PASSWORD que contiene una contraseña predeterminada.
  // const URL = "http://localhost:3001/rickandmorty/";

  async function login(userData) {
    try {
      const { email, password } = userData;
      const URL = "http://localhost:3001/rickandmorty/login/";
      const { data } = await axios(
        URL + `?email=${email}&password=${password}`
      );

      const { access } = data;
      setAccess(data);
      access && navigate("/home");

    } catch ({response}) {
      const { data } = response;
      alert(data.message);
    }
  }

//-------------------------------------
  const logout = () => {
    setAccess(false);
    navigate("/");
  };
//--------------------------------------
  const handleClearAll = () => {
    setClearAll(true);
  };

  useEffect(() => {
    if (clearAll) {
      setCharacters([]);
      setClearAll(false);
    }
  }, [clearAll]);
//-----------------------------------------
      

  async function onSearchRandom() {
    function generarNumeroAleatorio() {
      return Math.floor(Math.random() * 826) + 1;
    }
    const idRandom = generarNumeroAleatorio();

    try {
      const { data } = await axios(
        `http://localhost:3001/rickandmorty/character/${idRandom}`
      );
      console.log(data);
      console.log(characters);

      if (characters.find((char) => Number(char.id) === idRandom)) {
        return window.alert("¡Ya se agregó ese personaje!");
      } else {
        setCharacters((oldChars) => [...oldChars, data]);
      }
    } catch (error) {
      alert(error.response.data);
    }
  }



  async function onSearch(id) {
    try {
      const { data } = await axios(
        `http://localhost:3001/rickandmorty/character/${id}`
      );
      console.log(data);
      console.log(characters);

      if (characters.find((char) => Number(char.id) === Number(id))) {
        return window.alert("¡Ya se agregó ese personaje!");
      } else {
        setCharacters((oldChars) => [...oldChars, data]);
      }
    } catch (error) {
      alert(error.response.data);
    }
  }

  const onClose = (id) => {
    setCharacters(characters.filter((char) => Number(char.id) !== Number(id)));
  };

  useEffect(() => {
    !access && navigate("/");
  }, [access, navigate]);

  return (
    <div className="App">
      {pathname !== "/" && (
        <Nav onSearch={onSearch} onSearchRandom={onSearchRandom} logout={logout} handleClearAll={handleClearAll}/>
      )}
      <Routes>
        <Route path={"/"} element={<Form login={login} />} />
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

