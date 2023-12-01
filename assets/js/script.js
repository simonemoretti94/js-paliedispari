//script

//Palindrome number


function palindrome (word) {
    
    if (isNaN(word) === true) {
        let n = word.length - 1;
        for(let i = 0; i < word.length, n >= 0; i++, n--){
            if (word[i] === word[n]) {
                console.log('word index: ',i, ' ',word[i], 'is the same as word index: ', n, ' ', word[n]);
            }
            else {
                break;
            }
        } 
    }
    else {
        console.log('You wrote a number!');
    }
}

const chosenWord = prompt('Please write a palindrome word: ');

console.log('You choosed: ',chosenWord);

palindrome(chosenWord);


//Even && Odd

const machineNumber  = function machineRandNumber(min, max) {
    console.log((max - min) + 1);

    console.log(Math.random());

    console.log(Math.random() * ((max - min) + 1));

    return Math.floor(Math.random() * ((max - min) + 1));

}

function winner (input1, input2) {
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
    else if (sum % 2 === 0 || sum % 2 !== 0 && evenOrOdd !== 'even' || evenOrOdd !== 'odd') {
        console.log('Something went wrong. Exit');
    }
    else {
        console.log(sum, 'is even, User wins!');
    }
}

const evenOrOdd = prompt("plese write below lowercase 'even' or 'odd'");

const inputNumber = Number(prompt('Then, please write below a number 1 <= n <= 5'));


console.log('machine rand: ', machineRandNumber(1, 5));
