'use strict'

const movie = {
title: 'Avatar',
genre: 'Sci-fi',
duration: '30000000'
}

console.log(movie.title);
console.log(movie['title']);


movie.director = 'Cameron';
console.log(movie.director);

delete movie.director;

//console.log(movie.director);

for (const prop in movie){
   // console.log(prop);
    //console.log(movie[prop]);

    console.log(`${prop} is ${movie[prop]}`);
}



const sameMovie = Object.assign({}, movie);
console.log(sameMovie);

const detailedMovie = Object.assign(movie, {budjet: '10k'});
console.log(detailedMovie);
console.log(movie);
