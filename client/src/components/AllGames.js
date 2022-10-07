import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";

const AllGames = (props) => {

    const [gameList, setGameList] = useState([]);

    useEffect(()=> {
        axios.get("http://localhost:8000/api/games")
            .then((res)=>{
                console.log(res);
                console.log(res.data);
                setGameList(res.data);
            })
            .catch((err)=>{
                console.log(err);
            });
    }, []);

    const deleteGame = (idFromBelow) => {
        //in react we must handle the front end & back end
        axios.delete(`http://localhost:8000/api/games/${idFromBelow}`)
            .then((res)=>{
                console.log(res);
                console.log(res.data);
                setGameList(gameList.filter((game, index) => game._id !== idFromBelow));
            })
            .catch((err)=>console.log(err));
    };

    return (
        <div style={{textAlign:"center"}}>
            <header>
                <h1 style={{fontSize:"50px", borderBottom:"5px double lightgray",
                marginLeft:"450px", marginRight:"450px"}}> Gamemon</h1>
                <Link to={"/new"}>Add a New Game</Link>
            </header>
            {
                gameList.map((game, index)=>(
                    <div key={index}>
                        <Link to={`/game/${game._id}`}>
                            <p>{game.name}</p>
                            <img src={game.image} alt="Game picture"
                            style={{width:"150px", height:"150px"}} />
                        </Link>
                        <Link to={`/game/edit/${game._id}`}>Edit</Link>
                        <button onClick={()=>deleteGame(game._id)}>
                            Delete
                        </button>
                    </div>
                ))
            }
        </div>
    )
}

export default AllGames