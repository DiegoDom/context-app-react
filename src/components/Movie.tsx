import React, { useContext } from 'react';
import { Film } from '../interfaces/MoviesInterfaces';
import UserContext from '../contexts/UserContext';

interface Props {
    movie: Film;
}

export const Movie = ({ movie }: Props) => {

    const { user, toggleFavMovieToUser} = useContext(UserContext);
    
    const isFav = user?.favoritesMovies?.includes(movie.id);

    return (
        <div className="card">
            <img src={ movie.imageUrl } alt={ movie.title } className="card-img-top"
                style={{
                    height: '260px', objectFit: 'cover'}
                }/>
            <div className="card-body">
                <h4>{ movie.title }</h4>
                { user && <button className={ `btn btn-sm ${ isFav ? 'btn-danger' : 'btn-outline-danger' }` }
                    onClick={ () => toggleFavMovieToUser(movie.id) }>Favorito</button> }
            </div>
        </div>
    )
}
