
export interface Film {
    id: number;
    title: string;
    imageUrl: string;
}

export interface User {
    id: number;
    name: string;
    favoritesMovies: number[];
}
