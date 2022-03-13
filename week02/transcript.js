'use strict'

const dayjs = require('dayjs'); //creating object from the imported library

function Exam(code, name, credits, date, score, laude = false){
    this.code= code;
    this.name= name;
    this.credits= credits;
    this.date=date;
    this.score=score;
    this.laude=laude;
}

function ExamList(){
    this.list=[];

}


