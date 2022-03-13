'use strict'

const dayjs = require ('dayjs');



function Film (id, title, fav=false, date, rating){
    this.id = id ;
    this.title= title;
    this.fav = fav;
    this.date=date;
    this.rating=rating;
}

function FilmLibrary (){
    this.list=[];

    //add
    this.addNewFilm = (film) => this.list.push(film);



    //sortByDate
    this.sortByDate = () => {
        return [... this.list].sort((a,b)=>(a.date.isAfter(b.date) ? 1 : -1));
      }

    //Reset
    this.resetWatchedFilms = () => this.list.forEach(a=> a.date = dayjs(''));

    //delete

    this.deleteFilm = (x)=> this.list.splice(this.list.indexOf(this.list.find(a=> a.id === x)),1);

    //rated
    this.getrated = () => {return [... this.list].filter(a=> a.rating!== null).sort((a,b)=>(b.rating-a.rating));}

    //detailed Print
    this.print = () => this.list.forEach(a =>{
                            console.log('ID is :' + `--${a.id}--`);
                            console.log('Title is :' + `${a.title}`);
                            console.log('Favourite? :' + `${a.fav}`);
                            console.log('Date Watched :' + `${a.date}`);
                            console.log('Rating :' + `${a.rating}`);
                            console.log('--------------------------------');


    })
}


const myLibrary = new FilmLibrary();

const pulpFIction = new Film(1 , 'Pulp Fiction' , true , dayjs('2022-03-10') , 5);
const Grams21 = new Film(2 , '21 Grams' , true , dayjs('2022-03-17') , 4);
const starWars = new Film(3 , 'Star Wars' , false , dayjs('') , null);
const matrix = new Film(4 , 'Matrix' , false , dayjs('') , null);
const shrek = new Film(5 , 'Shrek' , false , dayjs('2022-03-21') , 3);

myLibrary.addNewFilm(pulpFIction);
myLibrary.addNewFilm(Grams21);
myLibrary.addNewFilm(starWars);
myLibrary.addNewFilm(matrix);
myLibrary.addNewFilm(shrek);





console.log(myLibrary.getrated());



