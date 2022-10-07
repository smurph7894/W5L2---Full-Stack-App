import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useParams, Link, useNavigate} from "react-router-dom";

const OneGame = () => {
    const {id} = useParams();
    const [game, setGame] = useState({});

    const navigate = useNavigate();

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/games/${id}`)
            .then((res)=>{
                console.log(res);
                console.log(res.data);
                setGame(res.data);
            })
            .catch((err)=>{
                console.log(err);
            });
    }, [id]);

    const deleteGame = () =>{
        axios.delete(`http://localhost:8000/api/games/${id}`)
        .then((res)=>{
            console.log(res);
            console.log(res.data);
            navigate("/");
        })
        .catch((err)=> console.log(err));
    };

    return (
        <div style={{textAlign:"center"}}>
            <header>
                <h1 style={{fontSize:"50px", borderBottom:"5px double lightgray",
                marginLeft:"450px", marginRight:"450px"}}>{game.name}</h1>
                <Link to={"/"}>Return Home</Link>
            </header>
            
            <img src={game.image} alt="game image" 
            style={{width:"150px", height:"150px"}}/>
            <p>{game.genre}</p>
            <p>{game.yearReleased}</p>
            <p>{game.rating}</p>
            <p>{game.company}</p>
            <button onClick={deleteGame}>
                Delete {game.title}
            </button>
        </div>
    )
}

export default OneGame