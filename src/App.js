import "./App.css";
import React, { useState } from "react";

import MyNvbar from "./components/MyNavbar/MyNavbar";
import MovieCard from "./components/MovieCard/MovieCard";
import MyFooter from "./components/MyFooter/MyFooter";
import MovieList from "./components/MovieList/MovieList";
import MoviesData from "./Assets/MoviesData";

function App() {
    //console.log(MoviesData);
    const [movies, setMovies] = useState(MoviesData);
    const [searchValue, setsearchValue] = useState("");
    const [rate, setRate] = useState(1);

    const [newMovie, setNewMovie] = useState({});

    const getNewMovie = (input) => {
        setNewMovie(input);
    };
    const addNewMovie = () => {
        setMovies([...movies, newMovie]);
    };

    const getsearchValue = (nom) => {
        setsearchValue(nom);
    };
    console.log("message from App", rate);
    const addMovie = (ajoute) => {};
    return (
        <div className="App">
            <MyNvbar
                nameInput={getsearchValue}
                rateInput={setRate}
                movies={MoviesData}
                getNewMovie={getNewMovie}
                newMovie={newMovie}
                addNewMovie={addNewMovie}
            />
            <MovieList movies={movies} myName={searchValue} myRate={rate} />

            <MyFooter />
        </div>
    );
}

export default App;
