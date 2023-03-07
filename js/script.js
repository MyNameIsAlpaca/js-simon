/* 
1 Generare 5 numeri casuali
2 mostrare i numeri in pagina
  - da quando vengono mostrati far partire un conto alla rovescia di 10 secondi
3 finito il conto alla rovescia i numeri vengono coperti
4 compaiono degli input dove l'utente dovrà inserire i numeri che si ricorda
5 una volta inseriti confronto i numeri con i numeri originali e calcolo quanti ne ha indovinati
*/


//collego i file html a javascript

let revealBtn = document.getElementById("reveal");

let sendBtn = document.getElementById("send")

let hiddenContainer = document.getElementById("hidden-container");

let numberOne = document.getElementById("numberOne");

let numberTwo = document.getElementById("numberTwo");

let numberThree = document.getElementById("numberThree");

let numberFour = document.getElementById("numberFour");

let numberFive = document.getElementById("numberFive");

let result = document.getElementById("result");

//creo le array per i numeri generati e i numeri inseriti

let listRandom = [];

let listNumber = [];

let point = 0;


//genero i numeri casuali che verranno aggiunti dentro all'input alla pressione del tasto

revealBtn.addEventListener("click", function(){
    numberOne.value = randomNumberGenerator(1,100);

    listRandom.push(numberOne.value)
    
    numberTwo.value = randomNumberGenerator(1,100);

    listRandom.push(numberTwo.value)
    
    numberThree.value = randomNumberGenerator(1,100);

    listRandom.push(numberThree.value)
    
    numberFour.value = randomNumberGenerator(1,100);

    listRandom.push(numberFour.value)
    
    numberFive.value = randomNumberGenerator(1,100);

    listRandom.push(numberFive.value)
    
    setTimeout(resetValue, 10000);

    revealBtn.style.display = "none";

    setTimeout(() => {
        sendBtn.style.display = "block";
      }, "10000");

});

sendBtn.addEventListener("click", function(){

    listNumber.push(numberOne.value);

    listNumber.push(numberTwo.value);

    listNumber.push(numberThree.value);

    listNumber.push(numberFour.value);

    listNumber.push(numberFive.value);

    for(let i = 0; i < listRandom.length; i++){

        if (listRandom[i] === listNumber[i]) {
            point++
        }

    }

    sendBtn.style.display = "none";

    result.innerHTML = `Hai indovinato ${point} numeri su 5`

});













//funzione per generare numeri random

function randomNumberGenerator(min, max) {
        
    let random = Math.floor(Math.random() * (max - min + 1) + min)

    return random;
  }

  //funzione per il timeOut

  function resetValue() {
    numberOne.value = "";
    numberTwo.value = "";
    numberThree.value = "";
    numberFour.value = "";
    numberFive.value = "";
  }

  //funzione per settare il display su block
