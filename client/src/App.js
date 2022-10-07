import NewGame from './components/NewGame';
import AllGames from './components/AllGames';
import OneGame from './components/OneGame';
import EditGame from './components/EditGame';
import {BrowserRouter, Routes, Router, Route} from 'react-router-dom';
import axios from 'axios';
import "./App.css";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
            <Routes>
                <Route element={<AllGames/>} path="/" />
                <Route element={<NewGame/>} path="/new" />
                <Route element={<EditGame/>} path="/game/edit/:id" />
                <Route element={<OneGame/>} path="/game/:id"  />
            </Routes>
        </BrowserRouter>
        </div>
    );
}

export default App;
