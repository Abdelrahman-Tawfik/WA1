'use strict'
const dayjs = require('dayjs');

const customParseFormat = require('dayjs/plugin/customParseFormat');
dayjs.extend(customParseFormat);



function Movie (id, name, favorite, datewatched){
    this.id = id;
    this.name= name;
    this.favorite=favorite;
    this.datewatched = dayjs(datewatched);

    this.toString = () => `${this.name} - ${favourite ? true : false} - ${this.datewatched.format('DD/MM/YYYY')}\n `;

}

const pulpfiction = new Movie(1, 'Pulp Fiction', true, '22-02-2022');
const fightClub = new Movie(2, ' Fight Club', true, '21-03-2022');
const avatar = new Movie(3, 'Avatar' , false , '15-02-1997');

const myMovies = [];

myMovies.push(pulpfiction);
myMovies.push(fightClub);
myMovies.push(avatar);

//myMovies.forEach(x=> console.log(x.toString));
console.log(myMovies);