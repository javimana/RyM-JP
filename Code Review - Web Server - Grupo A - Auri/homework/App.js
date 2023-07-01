import './App.css';
import {Routes, Route, useLocation, useNavigate} from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Cards from './components/cards/Cards.jsx';
import Nav from './components/nav/Nav';
import About from './components/about/About.jsx'
import { Detail } from './components/Detail/Detail';
import Error404 from './components/error404/Error404';
import Form from './components/form/Form';
import Favorites from './components/favorites/Favorites';


function App() {
   const { pathname } = useLocation()
   const navigate = useNavigate()
   const [characters, setCharacters] = useState([])
   const [access, setAccess] = useState(false)

   const EMAIL = 'auri@henry.com';
   const PASSWORD = 'pass1234'

   function login({email, password}){
      if(email === EMAIL && password === PASSWORD){
         setAccess(true)
         navigate('/home')
      }
      else alert('Usuario o contraseña inválida')
   }

   useEffect(()=>{
      !access && navigate('/')
   },[access])


   function onSearch(id) {
      axios(`http://localhost:3001/rickandmorty/character/${id}`)
      .then(({ data }) => {
         if(!characters.find(char => char.id === data.id)){
            if (data.name) {
               setCharacters((oldChars) => [...oldChars, data]);
            }
         }else{
            alert(`Ya existe el personaje con el id ${id}`)
         }
      }).catch((err) => alert(err.response.data.error) )
   }

   const onClose = (id) => {
      setCharacters(characters.filter(char => char.id !== Number(id)))
   }
   return (
      <div className='App'>
        { pathname !== '/' && <Nav onSearch={onSearch}/> }
        <Routes>
          <Route path='/' element={<Form login={login}/>} />
          <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
          <Route path='/about' element={<About/>}/>
          <Route path='/detail/:id' element={<Detail/>}/>
          <Route path='/favorites' element={<Favorites/>}/>
          <Route path='*' element={<Error404/>}/>
        </Routes>
         
      </div>
   );
}

export default App;
