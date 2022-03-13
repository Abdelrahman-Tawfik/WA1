'use strict' ;

const score = [25 , 30 , 18, 27, 28, 27, 30, 26];
const betterScore = [...score];

//delete the minimum score  
let minScore = Math.min(... betterScore);
let index = betterScore.indexOf(minScore);

betterScore.splice(index,1);


minScore = Math.min(... betterScore);
index = betterScore.indexOf(minScore);

betterScore.splice(index,1);

/*
//Alternative solution with sorting

betterScore.sort((a, b) => a - b);
betterScore.shift();
betterScore.shift();*/

//compute the avg

let avg =0;
for (const s of betterScore){
    avg +=s;
    }
avg /= betterScore.length;

avg = Math.round(avg);

betterScore.push(avg);
betterScore.push(avg);




console.log(score);
console.log(betterScore);