let FizzBuzz = document.getElementById('fizzbuzz')

for (let i = 1; i <= 100; i++) {
    let box;
    if ( i % 3 === 0 && i % 5 === 0){
        box = `<div>FizzBuzz </div>`
        console.log('FizzBuzz')
    } else if ( i  % 3 === 0){
        box = `<div> Fizz </div>`
        console.log('Fizz')
    } else if ( i % 5 === 0) {
        box = `<div> FizzBuzz </div>`
        console.log('Buzz')
    } else {
        console.log(i)
        box = `<div> ${i} </div>`
    };

   FizzBuzz.innerHTML += box 
}









