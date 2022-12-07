const numberOfFilms = +prompt('How many films have you already watched', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('One of the last films that you have watched', ''),
b = prompt ('How would you rate the film', ''),
c = prompt('One of the last films that you have watched', ''),
d = prompt ('How would you rate the film', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);