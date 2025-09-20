'use strict'

const calcAverage = (a,b,c) => {
    return (a+b+c)/3;
}

let scoreDolphins = calcAverage(44,23,71);
let scoreKoalas = calcAverage(65,54,49);

function checkWinner(scoreDolphins, scoreKoalas){
    if(scoreDolphins > scoreKoalas){
        console.log("Dolphins win ("+scoreDolphins+ ") vs. (" +scoreKoalas+ ")");
    }
    else if(scoreKoalas > scoreDolphins){
        console.log("Koalas win (" +scoreKoalas+ ") vs. (" +scoreDolphins+ ")");
    }
    else{
        console.log("No team wins");
    }

}

    console.log("===TEST DATA 1===");
    checkWinner(scoreDolphins,  scoreKoalas);

    console.log("===TEST DATA 1===");
    checkWinner(scoreDolphins,  scoreKoalas);

