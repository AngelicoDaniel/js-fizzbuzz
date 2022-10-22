let FizzBuzz = document.getElementById('fizzbuzz');
let number = document.createElement('div');



//FizzBuzz.append(number);

for (let i = 1; i <= 100; i++) {

    if ( i % 3 === 0 && i % 5 === 0){
        box = `<div class="box-fizzbuzz">FizzBuzz</div>`
        console.log('FizzBuzz')

    } else if ( i  % 3 === 0){
        box = `<div class="box-fizz"> Fizz </div>`
        console.log('Fizz')

    } else if ( i % 5 === 0) {
        box = `<div class="box-buzz"> Buzz </div>`
        console.log('Buzz')

    } else {
        console.log(i)
        box = `<div class="box"> ${i} </div>`
    };

   FizzBuzz.innerHTML += box 
}









