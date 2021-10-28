import React, { createContext } from 'react';
import initialMovies from '../data/Movies';

const m: any = null;

const MoviesContext = createContext(m);

export const MoviesProvider = ({ children }: any) => {

    const data = {
        movies: initialMovies
    };

    return(
        <MoviesContext.Provider value={ data }>
            { children }
        </MoviesContext.Provider>
    );
};

export default MoviesContext;
