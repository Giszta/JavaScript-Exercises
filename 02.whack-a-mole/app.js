const squares = document.querySelectorAll('.square');
const mole = document.querySelectorAll('.mole');
const timeLeft = document.querySelector('#time-left');
let score = document.querySelector('#score');

let result = 0;
let hitPosition;
let currentTime = 60;
let timerId = null;

//mole generate
function randomSquare() {
    squares.forEach(square => {                                    
        square.classList.remove('mole')                            // usuń 'mole' dla każdego elementu z listy clasy .square
    });

    let randomSquare = squares[Math.floor(Math.random() * 9)];     //generowanie losowego indexu 0-8
    randomSquare.classList.add('mole');                            //dodanie 'mole' do elementu z lisy clasy .square

    hitPosition = randomSquare.id;                                 // zmienna równa ID wylosowanego pola
}

//points counter
squares.forEach(square => {                                        //dla każdej pozycji .square
    square.addEventListener('mousedown', () => {                   //dodać nasłuchiwanie na kliknięcie. 'click' - klik i puszczenie; 'mousedown'-klik.
        if(square.id === hitPosition){                             //jeśli ID pola jest równe polu na którym jest mole
            result++;                                              //incrementuj result
            score.textContent = result;                            //zmień text w #score na result
            hitPosition = null;                                    //nie ma już dostępnego hitPosition - zapobieganie nabijanu pkt poprzez klikanie kilka razy 
        }
    });
});

//timer for moving the mole
function moveMole() {
    timerId = setInterval(randomSquare, 1000)                      //po jakim czasie następuje ponowne wywołanie funkcji randomSquare
};

moveMole();                                                        //wywołanie moveMole

//Timer countdown
function countDown() {
    currentTime--;                                                 //dekrementacja czasu
    timeLeft.textContent = currentTime;                            //nadpisanie czasu w html

    if(currentTime === 0){                                         //jeśli czas jest równy 0
        clearInterval(countDownTimerId);                           //metoda usuwania timera dla countDownTimerId
        clearInterval(timerId);                                     //metoda usuwania timera, która stopuje timerId 
        alert('GAME OVER! Your final score is: ' + result);         //wywołanie okna alertu
    }
};

let countDownTimerId = setInterval(countDown, 1000);                //wywołanie funkcji countDown co 1s
