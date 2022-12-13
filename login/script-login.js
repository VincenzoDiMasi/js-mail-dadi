/*ESERCIZIO 2 - Finta Login
Inventa una lista di email autorizzate
Chiedi all’utente la sua email, con un piccolo form.
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Cosa devo controllare esattamente?*/


//Creo un Array con delle mail

const emailList = ['robertdeniro@gmail.com', 'alpacino@gmail.com', 'leonardodicaprio@gmail.com', 'kevinspacey@libero.it'];

//Prendo gli elementi dal DOM

const emailElement = document.getElementById('email');
const buttonElement = document.getElementById('login');
const resultElement = document.getElementById('login-check-result');

//Creo un event listener 
buttonElement.addEventListener('click', function(){
    //Prendo il value dell'input
    const userEmail = emailElement.value;

    let isAllowed = false;

    //Verifico che la mail inserita sia valida 
    for(let i = 0; i < emailList.length; i++){
        const currentEmail = emailList[i];

        if(currentEmail === userEmail){
            isAllowed = true;
        }
    }

    //Stampo in pagina
    if(isAllowed){
        resultElement.innerHTML = `<h2>La tua email è valida!`;
    } else {
        resultElement.innerHTML = `<h2>La tua email non è valida!`;

    }
})