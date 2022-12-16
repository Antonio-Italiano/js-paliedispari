/* Chiedere all’utente di inserire una parola tramiite un form
   Creare una funzione per capire se la parola inserita è palindroma */


/--------------------- funzioni -----------------------------/ 

// creare una funzione che capovolge una parola
function reverseWord(word) {
    let reverse = '';
    // console.log(word)

    for(let i = word.length - 1; i >= 0; i-- ) {
        reverse += word[i];
    }
    console.log(reverse);

    let notice = word === reverse ? true : false;
    return notice;
}

/--------------------- operazioni preliminari ----------------------/

// 1 - prendere elementi Dom
const wordElement = document.getElementById('word-user');
const formElement = document.getElementById('form');
const noticeElement = document.getElementById('notice');

/--------------------- eventi dinamici ----------------------/

formElement.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const word = (wordElement.value.trim()).toLowerCase();
    console.log(word);
    
    const message = reverseWord(word) ? 'la parola è palindroma' : 'la parola non è palindroma';
    noticeElement.innerText = message;
})







