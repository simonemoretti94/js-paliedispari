//script

//Palindrome number

let check;

function palindrome (word) {
    
    if (isNaN(word) === true) {
        let n = word.length - 1;
        for(let i = 0; i < word.length, n >= 0; i++, n--){
            if (word[i] === word[n]) {
                console.log('word index: ',i, ' ',word[i], 'is the same as word index: ', n, ' ', word[n]);
                check = true;
            }
            else {
                check = false;
            }
        } 
    }
    else {
        console.log('You wrote a number!');
    }
    
    if (check === false) {
        alert('The word you wrote isn\'t palindrome!');
    }
}

const chosenWord = prompt('Please write a palindrome word: ');

console.log('You choosed: ',chosenWord);

palindrome(chosenWord);


//Even && Odd

let evenOrOdd;
let inputNumber;

const machineNumber  = function machineRandNumber(min, max) {
    console.log((max - min) + 1);

    console.log(Math.random());

    console.log(Math.random() * ((max - min) + 1));
    
    evenOrOdd = prompt("plese write below lowercase 'even' or 'odd'"); //using inside the function

    inputNumber = Number(prompt('Then, please write below a number 1 <= n <= 5'));
    
    return Math.floor(Math.random() * ((max - min) + min));

}

function winner (input1, input2) {
    
    
    console.log( 'user input: ',inputNumber, ' machine rand: ', machine_number_output);
    
    const sum = input1 + input2;

    if (sum % 2 === 0 && evenOrOdd === 'even') {
        console.log(sum, 'is even, user wins!');
    }
    else if (sum % 2 === 0 && evenOrOdd === 'odd') {
        console.log(sum, 'is even, you choosed odd. Game over!');
    }
    else if (sum % 2 !== 0 && evenOrOdd === 'even') {
        console.log(sum, 'is odd, you choosed even. Game over!');
    }
    else {
        console.log(sum, 'is even, User wins!');
    }
}

const machine_number_output = machineNumber(1, 5) 

winner(inputNumber, machine_number_output);

