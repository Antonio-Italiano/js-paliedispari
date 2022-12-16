/* L’utente sceglie pari o dispari e inserisce un numero da 1 a 5 tramiite un form.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. */ 

// Elementi DOM
const playerNumber = document.getElementById('player');
const selectOption = document.getElementById('select');
const computerElement = document.getElementById('computer');
const resultElement = document.getElementById('result');
const button = document.getElementById('btn');





// event listner bottone
button.addEventListener('click', function() {

    // recupero value 
    const selectValue = selectOption.value;
    console.log(selectValue);
    
    const numberValue = parseInt(playerNumber.value.trim());
    console.log(numberValue)

    // condizione in cui la value ritorna risultati voluti
    if (numberValue < 1 || numberValue > 5) {
        alert ('il numero inserito deve essere compreso tra 1 e 5');
    }
    
    // genero il numero random del computer da 1 a 5 con la funzione
    function getRandomNumber(min, max) {
        max++;

        const randomNumber = Math.floor(Math.random() * (max - min)) + min;
        return randomNumber;
    }
    // assegno il minimo e il massimo della funzione
    const computer = parseInt(getRandomNumber(1, 5)); 
    console.log(computer);

    // sommo il numero generato dal computer e lo sommo con quello dell'User
    const sumNumbers = numberValue + computer;
    console.log(sumNumbers);
    
    // stabilisco se la somma e pari o dispari con una funzione
    function isEven(sumNumbers) {

        if(isNaN(sumNumbers % 2 === 0)) {
            return true;
        } else { return false; }
    }
    
    
    // variabile d'appoggio 
   let winner;
    
    // condizioni per stabilire chi ha vinto
    if (selectValue == 'pari' && isEven(sumNumbers) == true) {
        console.log('ha vinto l\'User');
        winner = 'hai vinto';
    } else if (selectValue == 'dispari' && isEven(sumNumbers) == false) {
        console.log('ha vinto l\'User');
        winner = 'hai vinto';
    } else {
        winner = 'hai perso';
    }

    
    // 3 - Stampo in pagina il risultato
    playerNumber.innerText ='numero player: ' + numberValue ;
    computerElement.innerText ='numero computer: ' +  computer ;
    resultElement.innerText = winner ;
})
