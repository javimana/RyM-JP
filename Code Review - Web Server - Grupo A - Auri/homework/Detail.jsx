import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export const Detail = () => {
    const { id } = useParams()
    // console.log(id);
    const [characterDetail, setCharacterDetail] = useState({})

    useEffect(()=>{
        axios(`http://localhost:3001/rickandmorty/character/${id}`)
        .then(({ data })=>{
            if(data.name){
                setCharacterDetail(data)
            }else {
                alert('No hay personajes con ese ID')
            }
        })
        return setCharacterDetail({})
    },[id])
  return <div style={{color:'white'}}>
    {
        characterDetail ? (
            <div>
                <h2>Name: {characterDetail.name }</h2>
                <h4>Status: { characterDetail.status}</h4>
                <h4>Species:{characterDetail.species}</h4>
                <h4>Gender:{characterDetail.gender}</h4>
                <h4>Origin: {characterDetail.origin?.name}</h4>
                <img src={characterDetail.image} alt={characterDetail.name} />
            </div>
        ):''
    }

  </div>;
};
