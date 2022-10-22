let FizzBuzz = document.getElementById('fizzbuzz');

//append
let number = document.createElement('div');
FizzBuzz.append(number);




for (let i = 1; i <= 100; i++) {

    if ( i % 3 === 0 && i % 5 === 0){
        number.innerHTML += `<div class="box-fizzbuzz">FizzBuzz</div>`
        console.log('FizzBuzz')

    } else if ( i  % 3 === 0){
        number.innerHTML += `<div class="box-fizz">Fizz</div>`
        console.log('Fizz')

    } else if ( i % 5 === 0) {
        number.innerHTML += `<div class="box-buzz">Buzz</div>`
        console.log('Buzz')

    } else {
        console.log(i)
        number.innerHTML += `<div class="box">${i}</div>`
    };
    
}









