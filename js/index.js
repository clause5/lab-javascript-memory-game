
const cards = [
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' },
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' }
];

const memoryGame = new MemoryGame(cards);



window.addEventListener('load', (event) => {
  memoryGame.shuffleCards();
  let html = '';
  memoryGame.cards.forEach((pic) => {
    html += `
      <div class="card" data-card-name="${pic.name}">
        <div class="back" name="${pic.img}"></div>
        <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
      </div>
    `;
  });

  // Add all the divs to the HTML
  document.querySelector('#memory-board').innerHTML = html;

  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', (event) => {
      // TODO: write some code here
      memoryGame.pickedCards.push(card);
      event.target.parentNode.classList.toggle('turned', memoryGame.pickedCards.length <=2);
      
      if(memoryGame.pickedCards.length === 2 ){
        
        
        if(memoryGame.checkIfPair(memoryGame.pickedCards[0],memoryGame.pickedCards[1])){
          memoryGame.pickedCards =[];
          if(memoryGame.checkIfFinished()){
            document.querySelector('#memory-board').innerHTML ='';
            document.querySelector('#memory-board').classList.add('win');
            document.querySelector('.win').removeAttribute('id');
            setTimeout(() => {
              alert('You won!!!');
              location.reload();
              
            }, 500);
          }
        }else{
          setTimeout(() => {
            memoryGame.pickedCards[0].classList.toggle('turned');
            memoryGame.pickedCards[1].classList.toggle('turned');
            memoryGame.pickedCards = [];
            
          },800);
        }
        
        document.querySelector('#pairs-clicked').innerHTML =`${memoryGame.pairsClicked}`;
        document.querySelector('#pairs-guessed').innerHTML = `${memoryGame.pairsGuessed}`;
      }


     
    });
  });
});
