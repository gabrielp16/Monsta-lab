import React from 'react';
import PropTypes from 'prop-types';
import NoPoster from './images/poster-not-available.png'
import './MovieList.scss';
import { Link } from "react-router-dom";

export const noPoster = NoPoster;

const MovieList = (props) => {

    const URL = 'https://image.tmdb.org/t/p/w200/';
    const Favorites = props.favoritesComponent;
    if (props.movies.length) {
        return (
            <>
                {
                    props.movies.map(
                        (movie) => (

                            <div className='movie-card' id={movie.id} key={movie.id}>
                                <span className='rate'>
                                    {(Math.round(movie.vote_average * 100) / 100).toFixed(1)}
                                </span>
                                <div className='layer' onClick={() => props.handleFavorites(movie)}>
                                    <Favorites />
                                </div>
                                <Link to={`/movie/${movie.id}`}>
                                    <img src={!!movie.poster_path ? `${URL}${movie.poster_path}` : `${noPoster}`} alt={movie.title}></img>
                                </Link>
                            </div>
                        )
                    )
                }
            </>
        )
    } else {
        return (
            <>
                <p className='no-movies'>No movies to show</p>
            </>
        )
    }
};

MovieList.propTypes = {
    handleFavorites: PropTypes.func,
};

export default MovieList;