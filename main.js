'use strict';

const SUITS = ['♠', '♣', '♦', '♥'];
const RED_SUITS = ['♦', '♥'];
const AVAILABLE_SIGNS = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

class Game {
  render() {

  }
}

class Stack {
  constructor(cards, onCardsSelected) {
    this.state = {
      cards: cards,
    }

    this._element.addEventListener('click', (event) => {
      const card = event.target.closest('.card');

      if (!card) {
        return;
      }

      onCardsSelected()
    });
  }

  render() {

  }

  canAccept(cards) {
    return true;
  }

  addCards(cards) {
    this.render();
  }

  removeCards() {
    this.render()
  }
}

class Card {
  constructor(card) {
    this.element.addEventListener('click', () => {
      this.element.dispatchEvent(new CustomEvent('cardSelected', {
        detail: card,
      }))
    })
  }

  render() {

  }

  toggle(isOpen) {
    this.state
  }
}
