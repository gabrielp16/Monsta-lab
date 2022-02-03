import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { noPoster } from './../../components/MovieList/MovieList';
import './DetailMovie.scss'
import Header from "../../components/Header/Header";
import SubHeader from "../../components/SubHeader/SubHeader";

const DetailMovie = () => {

    const navigate = useNavigate();
    let { id } = useParams();

    const URL = 'https://image.tmdb.org/t/p/w400/';
    const [movie, setMovie] = useState([]);

    const getMovieById = async () => {
        const url = `https://api.themoviedb.org/3/movie/${id}?api_key=f7cc4d429cde54acb717c8d20a5a4109`;
        const response = await fetch(url);
        const responseJson = await response.json();
        setMovie(responseJson);
    }

    useEffect(() => {
        getMovieById();
    });

    return (
        <>
            <Header title='Monstar Lab' />
            <div className="wrap-menu">
                <SubHeader title='Movie detail' />
            </div>

            <div className='movie-detail'>

                <button className='go-back' onClick={() => navigate(-1)}> Go back </button>
                <div className='poster'>
                    <img src={!!movie.poster_path ? `${URL}${movie.poster_path}` : `${noPoster}`} alt={movie.title}></img>
                </div>
                <div className='data'>
                    <h1>{movie.title}</h1>
                    <div className='wrap-info'>
                        <label>Overview:</label>
                        <span>{movie.overview}</span>
                    </div>
                    <div className='wrap-info'>
                        <label>Vote average:</label>
                        <span>{movie.vote_average}</span>
                    </div>
                    <div className='wrap-info'>
                        <label>Status:</label>
                        <span>{movie.status}</span>
                    </div>
                </div>

            </div>
        </>
    )
};

DetailMovie.propTypes = {
};

export default DetailMovie;