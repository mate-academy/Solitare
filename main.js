'use strict';

const SUITS = ['♠', '♣', '♦', '♥'];
const RED_SUITS = ['♦', '♥'];
const AVAILABLE_SIGNS = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

class Game {
  render() {

  }
}

class Stack {
  constructor(cards) {
    this.state = {
      cards: cards,
    }
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
  constructor({ suit, sign }) {
    this.state = {
      isOpen: false,
    }
  }

  render() {

  }

  toggle(isOpen) {
    this.state
  }
}
