import React, { createContext, useState } from 'react';
import { User } from '../interfaces/MoviesInterfaces';
const a: any = null;

const UserContext = createContext(a);

const InitialUser: User = { id: 1, name: 'DAB', favoritesMovies: [ 1, 2] };

export const UserProvider = ({ children }: any) => {

    const [user, setUser] = useState<any>(InitialUser);

    const login = () => setUser(InitialUser);
    
    const logout = () => setUser(null);

    const toggleFavMovieToUser = (movieId: number) => {

        const isFavorite = user?.favoritesMovies?.includes(movieId);

        const favoritesMovies: any[] = isFavorite
        ? user.favoritesMovies.filter((id: number) => id !== movieId)
        : [ ...user.favoritesMovies, movieId ];

        setUser({
            ...user,
            favoritesMovies
        })
    };
  
    const data = {
      user,
      login,
      logout,
      toggleFavMovieToUser
    };

    return(
        <UserContext.Provider value={ data }>
            { children }
        </UserContext.Provider>
    );
};

export default UserContext;
