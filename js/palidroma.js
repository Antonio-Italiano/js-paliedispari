/* Chiedere all’utente di inserire una parola tramiite un form
   Creare una funzione per capire se la parola inserita è palindroma */

// 1 - prendere elementi Dom
const wordElement = document.getElementById('word-user');
const formElement = document.getElementById('form');
const noticeElement = document.getElementById('notice');

const wordValue = wordElement.value.trim();
console.log(wordValue);

// creare una funzione che capovolge una parola
function reverseWord(word) {
    let reverse = '';
    console.log(word)

    for(let i = word.length - 1; i >= 0; i-- ) {
        reverse += word[i];
    }
    return reverse;
}

const wordReverse = reverseWord(wordValue);
console.log(wordReverse);

if (wordValue === wordReverse) {
    notice = 'la parola è palindroma'
} else {
    notice = 'la parola non è palindroma'
}

noticeElement.innerText = notice;
