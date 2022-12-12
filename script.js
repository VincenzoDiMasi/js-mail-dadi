console.log('JS OK')

/*ESERCIZIO 1 - Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Stampiamo in pagina i due tiri e il risultato*/

//Prendo gli elementi dal DOM
const buttonElement = document.getElementById('roll-button');
const userNumElement = document.getElementById('user-number');
const cpuNumElement = document.getElementById('cpu-number');
const winnerElement = document.getElementById('winner');


//Creo delle variabili per i numeri che usciranno
let usererNumber = 0;
let cpuNumber = 0;

//Aggancio even listener al button
buttonElement.addEventListener('click', function(){
    
    //Genero i numeri random
    for(let i = 0; i < 2; i++){

        const randomNumber = Math.floor(Math.random() * 6) + 1;
        console.log(randomNumber);

        if (i === 0){
            userNumber = randomNumber;
        } else {
            cpuNumber = randomNumber;
        }

    }     

        //Verifico chi abbia vinto
            
        let result = 'Hai perso!'

        if(userNumber > cpuNumber){
            result = 'Hai vinto!';
        } else if (userNumber === cpuNumber){
            result = 'Abbiamo pareggiato!';
        }

       

        //Stampo in pagina
        userNumElement.innerText = 'Il tuo numero è: ' + userNumber;
        cpuNumElement.innerText = 'Il mio numero è: ' + cpuNumber;
        winnerElement.innerText = result;

})

//--------------------------------------------------------------------

/*ESERCIZIO 2 - Finta Login
Inventa una lista di email autorizzate
Chiedi all’utente la sua email, con un piccolo form.
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Cosa devo controllare esattamente?*/
