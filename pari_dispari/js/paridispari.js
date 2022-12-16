/* L’utente sceglie pari o dispari e inserisce un numero da 1 a 5 tramiite un form.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. */ 


/------------------ funzioni ------------------/
// genero il numero random del computer da 1 a 5 con la funzione
function getRandomNumber(min, max) {
    max++;

    const randomNumber = Math.floor(Math.random() * (max - min)) + min;
    return randomNumber;
}
// stabilisco se la somma e pari o dispari con una funzione
function isEven(sumNumbers) {
    return sumNumbers % 2 === 0;
}

/----------------- operazioni preliminari -----------------/

// Elementi DOM
const playerNumber = document.getElementById('player');
const selectOption = document.getElementById('select');
const computerElement = document.getElementById('computer');
const resultElement = document.getElementById('result');
const form = document.getElementById('btn');



/----------------- eventi dinamici ---------------/

// event listner bottone
btn.addEventListener('click', function() {


    // recupero value 
    const number = parseInt(playerNumber.value.trim());
    console.log(number)

    const select = selectOption.value;
    console.log(select);    

    // condizione in cui la value ritorna risultati voluti
    if (isNaN(number) || number < 1 || number > 5) {
        alert ('il numero inserito deve essere compreso tra 1 e 5');
        return;
    }
    
    if (!select || (select !== 'dispari' && select !== 'pari' )) {
        alert('la scelta non è valida');
        return;
    }

    // assegno il minimo e il massimo della funzione
    const computer = parseInt(getRandomNumber(1, 5)); 
    console.log(computer);

    // sommo il numero generato dal computer e lo sommo con quello dell'User
    const sumNumbers = number + computer;
    console.log(sumNumbers);
    
    // variabile vittoria
    const rightselect = isEven(sumNumbers) ? 'pari' : 'dispari';    
    
    // condizioni per stabilire chi ha vinto
    const winner = select === rightselect ? 'player' : 'computer';

    
    // 3 - Stampo in pagina il risultato
    computerElement.innerText ='il numero del computer: ' +  computer ;
    resultElement.innerText = 'vince il : ' + winner ;


})
