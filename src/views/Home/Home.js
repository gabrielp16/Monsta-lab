import React, { useState, useEffect } from "react";
import './Home.scss';
import AddFavorites from "../../components/AddFavorites/AddFavorites";
import RemoveFavorites from "../../components/RemoveFavorites/RemoveFavorites";
import MovieList from "../../components/MovieList/MovieList";
import Header from "../../components/Header/Header";
import SubHeader from "../../components/SubHeader/SubHeader";
import Searchbox from "../../components/Searchbox/Searchbox";

const Home = () => {
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    const randomCharacter = alphabet[Math.floor(Math.random() * alphabet.length)]

    const [movies, setMovies] = useState([]);
    const [favorites, setFavorite] = useState([]);
    const [searchMovie, setSearch] = useState(randomCharacter);

    const getMovies = async (searchMovie) => {
        if (searchMovie) {
            const url = `https://api.themoviedb.org/3/search/movie?api_key=f7cc4d429cde54acb717c8d20a5a4109&query=${searchMovie}`;
            const response = await fetch(url);
            const responseJson = await response.json();
            const results = responseJson.results;
            const moviesResult = !results ? [] : results;
            setMovies(moviesResult)
        }
    }

    useEffect(() => {
        getMovies(searchMovie);
    }, [searchMovie]);

    useEffect(() => {
        const movieFavorites = JSON.parse(localStorage.getItem('monstar-favorites-movie-list'));
        const movieFavoritesLocal = movieFavorites ? movieFavorites : [];
        setFavorite(movieFavoritesLocal);
    }, []);

    const saveToLocalStorage = (items) => {
        localStorage.setItem('monstar-favorites-movie-list', JSON.stringify(items));
    };

    const addFavorite = (movie) => {
        const getRepeatMovie = favorites.find(favorite => favorite.id === movie.id);
        if (!getRepeatMovie) {
            const favoriteList = [...favorites, movie];
            setFavorite(favoriteList);
            saveToLocalStorage(favoriteList);
        }
    };

    const removeFavorite = (movie) => {
        const favoriteList = favorites.filter(
            (favorites) => favorites.id !== movie.id
        );
        setFavorite(favoriteList);
        saveToLocalStorage(favoriteList);
    };


    return (
        <div className="Home">
            <Header title='Monstar Lab' />
            <div className="wrap-menu">
                <Searchbox searchMovie={searchMovie} setSearch={setSearch} />
                <SubHeader title='Movies' />
            </div>
            <div className="movie-list">
                <MovieList movies={movies} handleFavorites={addFavorite} favoritesComponent={AddFavorites} />
            </div>
            <div className="wrap-menu">
                <SubHeader title='Your favorites movies' />
            </div>
            <div className="favorites-movie-list">
                <MovieList movies={favorites} handleFavorites={removeFavorite} favoritesComponent={RemoveFavorites} />
            </div>
        </div>
    );
}

export default Home;
