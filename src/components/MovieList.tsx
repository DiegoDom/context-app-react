import React, { useContext } from 'react'
import MoviesContext from '../contexts/MoviesContext';
import { Movie } from './Movie';
import { Film } from '../interfaces/MoviesInterfaces';

export const MovieList = () => {

    const { movies } = useContext(MoviesContext);

    return (
    <div className="container-fluid">
        <div className="row">
            { movies.map((movie: Film) => (
                <div className="col-md-4" key={ movie.id } >
                    <Movie movie={ movie } />
                </div>
            ))}
        </div>
      </div>
    )
}
