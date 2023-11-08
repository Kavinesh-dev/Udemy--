'use strict';
// let massMark = 75;
// let heightMark = 197;
// let massJohn = 50;
// let heightJohn = 150;

// const bmiMark = massMark / (heightMark * heightMark);
// const bmiJohn = massJohn / (heightJohn * heightJohn);

// console.log(bmiMark);
// console.log(bmiJohn);
// console.log('hey')

// const calcAverage = (one, two, three) => {
//     let total = (one + two + three) / 3;
//     return total;
// }

// let scoreDolphins =  calcAverage(96, 23, 71);
// console.log(Math.floor(scoreDolphins))
// let scoreKoalas = calcAverage(45, 65, 10);
// console.log(Math.floor(scoreKoalas));

// function checkWinner(avgDolphin, avgKoalas){
//   if(avgDolphin >=  avgKoalas){
//     console.log(`Dolphins won with the points of ${Math.floor(avgDolphin)}`)
//   } else if(avgKoalas >=  avgDolphin){
//     console.log(`Koalas won with the points of ${Math.floor(avgKoalas)}`)
//   } else {
//     console.log("No team won :)(")
//   }
// }

// checkWinner(scoreDolphins, scoreKoalas);

// console.log(x)
// console.log(name)
// var x = 'kavinesh';
// console.log(x)
// function name(){
//   console.log('im kavinesh')
// }

// var name = () => {
//   console.log('Im kavinesh');
// }

// try{
//   let num = prompt("Enter a number")
//   if(isNaN(num))
//   throw "Enter a valid Number"
//   console.log(num**2)
//   }
//   catch(error){
//   console.log(error)
//   }

var expect = function (val) {
  var toBe = function (arg) {
    if (val === arg) {
      return true;
    } else {
      throw new Error('Not Equal');
    }
  };

  var notTobe = function (num) {
    if (val !== num) {
      return true;
    } else {
      throw new Error('Equal');
    }
  };

  return {
    toBe,
    notTobe
  };
};

const hello = expect(8)
//expect(8).toBe(9);
console.log(hello.toBe(8));
console.log(hello.notTobe(8));
