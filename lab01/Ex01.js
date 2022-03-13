'use strict'

let word = ["car", "played", "attribute" , "hop", "banana"];


function short (words){
let done=[...words];
        for (let x of done){
                if (x.length < 2){
                        x='';
                }
                else{
                    x=x.substring(0,2) + x.substring(x.length -2 , x.length);
                }

}return done ;}

let y = short(word);


console.log(y);