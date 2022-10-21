let FizzBuzz = document.querySelector('box')

for (let i = 1; i <= 100; i++) {
    let box;
    if ( i % 3 === 0 && i % 5 === 0){
        box = `<div class= "box-red" FizzBuzz </div>`
        console.log('FizzBuzz')
    } else if ( i  % 3 === 0){
        box = `<div class= "box-blue" Fizz </div>`
        console.log('Fizz')
    } else if ( i % 5 === 0) {
        box = `<div class= "box-red" FizzBuzz </div>`
        console.log('Buzz')
    } else {
        console.log(i)
    };

    FizzBuzz.innerHTML=box;
}









