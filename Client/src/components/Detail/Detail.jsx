import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
// import styles from "../Detail/Detail.module.css";


const Detail = () => {
    const { id } = useParams();
    const  [character, setCharacter]  = useState({});

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
        // axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
            if (data.name) {
                setCharacter(data);
            } else {
                window.alert('No hay personajes con ese ID');
            }
            console.log(data)
        });
        return setCharacter({});
    }, [id]);
    return (

        <div>
            <h1>Name: {character?.name}</h1>
            <h1>Status: {character?.status}</h1>
            <h1>Species: {character?.species}</h1>
            <h1>Gender: {character?.gender}</h1>
            <h1>Origin: {character.origin?.name}</h1>
            <img src={character.image} alt=""/>
        </div>
    )
};

export default Detail;