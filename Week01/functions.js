'use strict'

function Movie(title, genre, duration){
this.title = title;
this.genre = genre;
this.time = duration;
this.isLong = ()=>(duration>180);
}

let avatar = new Movie('Avatar', 'Sci-fi' , 2160 );
let back2theFuture = new Movie('back to the future' , 'sci-fi' , 150);

console.log(avatar);
console.log(back2theFuture.isLong());