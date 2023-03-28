

document.addEventListener('DOMContentLoaded', () => {           // nasłuchuje wczytanie elementów strony

//card options
const cardArray = [                             //tworzenie obiektów w tablicy
  {
    name: 'fries',
    img: 'images/fries.png'
  },
  {
    name: 'fries',
    img: 'images/fries.png'
  },
  {
    name: 'cheeseburger',
    img: 'images/cheeseburger.png'
  },
  {
    name: 'cheeseburger',
    img: 'images/cheeseburger.png'
  },
  {
    name: 'hotdog',
    img: 'images/hotdog.png'
  },
  {
    name: 'hotdog',
    img: 'images/hotdog.png'
  },
  {
    name: 'ice-cream',
    img: 'images/ice-cream.png'
  },
  {
    name: 'ice-cream',
    img: 'images/ice-cream.png'
  },
  {
    name: 'pizza',
    img: 'images/pizza.png'
  },
  {
    name: 'pizza',
    img: 'images/pizza.png'
  },
  {
    name: 'milkshake',
    img: 'images/milkshake.png'
  },
  {
    name: 'milkshake',
    img: 'images/milkshake.png'
  }
]

cardArray.sort(() => 0.5 - Math.random()); // ustawianie kart w randomowej kolejności

const grid = document.querySelector('.grid'); // dostęp do elementu z klasą grid
const resultDisplay = document.querySelector('#result'); // dostęp do elementu z id 
var cardsChosen = [];  //zmienna z pustą tablicą
var cardsChosenId = []; //zmienna z pustą tablicą 
var cardsWon = [];      //zmienna z pustą tablicą 

//create your board
function createBoard(){
  for (let i= 0; i < cardArray.length; i++) {     
    var card =document.createElement('img');        // zmienna, która tworzy element img
    card.setAttribute('src', 'images/blank.png');   // wstawiam atrybut src o wartości ... do elementu img 
    card.setAttribute('data-id', i);                // wstawiam atrybut data-id o wartości i do elementu img. data-* to indywidualnie tworzony atrybut w HTML.
    card.addEventListener('click', flipCard);       // dodaje nasłuchiwanie na klik, które wywołuje funkcję
    grid.appendChild(card);                         // wstawiam wszystkie elementy zmiennej card jako dziecko do rodzica div.grid
  }
}
 
//check for maches
function checkForMatch() { 
  const cards = document.querySelectorAll('img')                      //zmienna, która ma dostęp do wszystkich img
  const optionOneId = cardsChosenId[0];                               //zmienna = pierwszej pozycji w tablicy
  const optionTwoId = cardsChosenId[1];                               //zmienna = drugiej pozycji w tablicy 
  
  if (optionOneId == optionTwoId){                                    // jeśli drugi raz wybrano tą samą kartę:
    cards[optionOneId].setAttribute('src', 'images/blank.png');       // nadaj początkową wartość kart
    cards[optionTwoId].setAttribute('src', 'images/blank.png');       
    alert('You have clicked the same image!');                        // okno alert z komunikatem
  } else if (cardsChosen[0] === cardsChosen[1]) {                     // jeśli ID kart jest takie samo 
    alert ('You found a match!');                                     //komunikat
    cards[optionOneId].setAttribute('src', 'images/white.png');       //ukrywa karty
    cards[optionTwoId].setAttribute('src', 'images/white.png');
    cards[optionOneId].removeEventListener('click', flipCard);        //usuwa nasłuchiwanie elementu i wywołanie funkcji
    cards[optionTwoId].removeEventListener('click', flipCard);        
    cardsWon.push(cardsChosen);
  } else {
    cards[optionOneId].setAttribute('src', 'images/blank.png');       //w przeciwnym razie wracamy do karty zakrytej
    cards[optionTwoId].setAttribute('src', 'images/blank.png');
    alert('Sorry, try again');
  }
  cardsChosen = [];
  cardsChosenId = [];
  resultDisplay.textContent = cardsWon.length                             //każda zebrana para zwiększa array o 1 tym samym daje punkt
  if (cardsWon.length === cardArray.length/2) {
    resultDisplay.textContent = 'Congratulations! You found them all!'
  }
}

//flip your card
function flipCard() {
  let cardId = this.getAttribute('data-id');          //pobiera indeks klikniętej karty
  cardsChosen.push(cardArray[cardId].name);           //dodaje do tablicy Y nazwe z tablicy X o indeksie i 
  cardsChosenId.push(cardId);                         //dodaje do tablicy Z indeks
  this.setAttribute('src', cardArray[cardId].img);    //zmienia src dla wybranej karty
  if (cardsChosen.length === 2) {                     //jeśli wartość wybranych kart jest równa 2 realizuję ifa
    setTimeout(checkForMatch, 500);                   //metoda setTimeout, która realizuje funkcję po upływie czasu
  }

}
createBoard();  //wywołanie funkcji
})
