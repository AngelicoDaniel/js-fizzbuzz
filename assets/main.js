let FizzBuzz = document.getElementById('fizzbuzz')

for (let i = 1; i <= 100; i++) {
    let box;
    if ( i % 3 === 0 && i % 5 === 0){
        box = `<div class="box-red">FizzBuzz </div>`
        console.log('FizzBuzz')
    } else if ( i  % 3 === 0){
        box = `<div class="box-blue"> Fizz </div>`
        console.log('Fizz')
    } else if ( i % 5 === 0) {
        box = `<div class="box-green"> Buzz </div>`
        console.log('Buzz')
    } else {
        console.log(i)
        box = `<div class="box"> ${i} </div>`
    };

   FizzBuzz.innerHTML += box 
}









