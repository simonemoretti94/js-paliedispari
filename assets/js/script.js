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

const evenOrOdd = prompt("plese write below lowercase 'even' or 'odd'");

const inputNumber = Number('Then, please write below a number 1 <= n <= 5');

const machineRandNumber = function getRandomInteger(min, max) {
    console.log(max - min + 1);
}