class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards(){
    for(let i= this.cards.length; i>0 ; i--){
      let j = Math.floor(Math.random()* i--);
      let temp = this.cards[i];
      this.cards[i]= this.cards[j];
      cards[j]= temp;
    }
  }

  checkIfPair(card1, card2) {
    if( card1.innerHTML === card2.innerHTML){
      this.pairsClicked++;
      this.pairsGuessed++;
      return true;
    }else{
      this.pairsClicked++;
      return false;
    }
  }

  checkIfFinished() {
    return (this.pairsGuessed === Math.floor(this.cards.length / 2 ) );
  }

}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
