import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link, useParams, useNavigate} from 'react-router-dom';

const EditGame = (props) => {
    
    const {id} = useParams();
    const[name, setName] = useState("");
    const[yearReleased, setYearReleased] = useState("");
    const[genre, setGenre] = useState("");
    const[image, setImage] = useState("");
    const[rating, setRating] = useState("");
    const[company, setCompany] = useState("");
    const[errors, setError] = useState("");

    const navigate = useNavigate();

    useEffect(()=>{
        axios.put(`http://localhost:8000/api/games/${id}`)
            .then((res)=>{
                console.log(res);
                console.log(res.data);
                setName(res.data.name);
                setYearReleased(res.data.yearReleased);
                setGenre(res.data.genre);
                setImage(res.data.image);
                setRating(res.data.rating);
                setCompany(res.data.company);
            })
            .catch((err)=>{
                console.log(err);
            });
    },[]);

    const editHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/games/${id}`, 
        {
            name,
            yearReleased,
            genre,
            image,
            rating,
            company
        }
        ).then((res)=>{
            console.log(res);
            console.log(res.data);
            navigate("/");
        })
        .catch((err)=>{
            console.log(err);
            console.log("error.response:", err.response);
            console.log("error.response.data:", err.response.data);
            console.log("error.response.data.errors:", err.response.data.errors);
            setError(err.response.data.errors);
        });
    };

    return (
        <div style={{textAlign:"center"}}>
            <header>
                <h1 style={{fontSize:"50px", borderBottom:"5px double lightgray",
                marginLeft:"450px", marginRight:"450px"}}>Edit a Game!</h1>
                <Link to={"/"}>Return Home</Link>
            </header>
            <form onSubmit={editHandler}>
                <div>
                    <label>Name</label>
                    <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
                    {
                        errors.name? 
                        <span>{errors.name.message}</span>
                        :null
                    }
                </div>
                <div>
                    <label>Year Released</label>
                    <input type="Number" value={yearReleased} onChange={(e)=>setYearReleased(e.target.value)} />
                    {
                        errors.yearReleased? 
                        <span>{errors.yearReleased.message}</span>
                        :null
                    }
                </div>
                <div>
                    <label>Genre</label>
                    <select value={genre} onChange={(e)=>setGenre(e.target.value)} name="genre">
                        <option value="none" defaultValue hidden>Select a Genre</option>
                        <option value="Action">Action</option>
                        <option value="Platform">Platform</option>
                        <option value="Survival">Survival</option>
                        <option value="RPG">RPG</option>
                        <option value="FPS">FPS</option>
                        <option value="RTS">RTS</option>
                        <option value="MMO">MMO</option>
                        <option value="Puzzle">Puzzle</option>
                        <option value="Sports">Sports</option>
                        <option value="Adventure">Adventure</option>
                        <option value="Children's">Children's</option>
                    </select>
                    {
                        errors.genre? 
                        <span>{errors.genre.message}</span>
                        :null
                    }
                </div>
                <div>
                    <label>Image</label>
                    <input type="text" value={image} onChange={(e)=>setImage(e.target.value)} />
                    {
                        errors.image? 
                        <span>{errors.image.message}</span>
                        :null
                    }
                </div>
                <div>
                    <label>Rating</label>
                    <select value={rating} onChange={(e)=>setRating(e.target.value)} name="rating">
                        <option value="none" defaultValue hidden>Select a Rating</option>
                        <option value="T">T</option>
                        <option value="E">E</option>
                        <option value="MA">MA</option>
                        <option value="AO">AO</option>
                        <option value="E10">E10</option>
                        <option value="Y">Y</option>
                        <option value="No Rating">No Rating</option>
                    </select>
                    {
                        errors.rating? 
                        <span>{errors.rating.message}</span>
                        :null
                    }
                </div>
                <div>
                    <label>Company</label>
                    <input type="text" value={company} onChange={(e)=>setCompany(e.target.value)} />
                </div>
                <button type="Submit">Update Game</button>
            </form>
        </div>
    )
}

export default EditGame