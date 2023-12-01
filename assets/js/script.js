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