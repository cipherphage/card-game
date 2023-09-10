import React from 'react';
import { render, screen } from '@testing-library/react';
import { testDeck, testAPIMode, testCustomMode } from '../utils/testing';
import Hand from './Hand';
import Card from './Card';

// HAND component tests
describe('Hand component', function() {
  it('should render Hand component with API cards provided', function() {
    render(<Hand hand={testDeck.cards} mode={testAPIMode} />);
    
    const hand = screen.getByTestId('hand spread');
    
    expect(hand).toBeInTheDocument();
    expect(hand.children.length).toStrictEqual(4);
  });

  it('should render Hand component with custom cards provided', function() {
    render(<Hand hand={testDeck.cards} mode={testCustomMode} />);

    const hand = screen.getByTestId('hand spread');
    
    expect(hand).toBeInTheDocument();
    expect(hand.children.length).toStrictEqual(4);
  });
});

// CARD component tests
describe('Card component', function() {
  it('should render Card component with 9C API card provided', function() {
    render(<Card card={testDeck.cards[0]} index={0} mode={testAPIMode} />);

    const card = screen.getByTestId(testDeck.cards[0].code);

    expect(card).toBeInTheDocument();
    expect(card.id).toStrictEqual(testDeck.cards[0].code);
    expect(card.className).toStrictEqual('card');
    expect(card.nodeName).toStrictEqual('IMG');
  });

  it('should render Card component with custom 9C card provided', function() {

    render(<Card card={testDeck.cards[0]} index={0} mode={testCustomMode} />);

    const card = screen.getByTestId(testDeck.cards[0].code);

    expect(card).toBeInTheDocument();
    expect(card.id).toStrictEqual(testDeck.cards[0].code);
    expect(card.className).toStrictEqual('card custom-card suitCLUBS');
    expect(card.nodeName).toStrictEqual('DIV');
    expect(card.firstElementChild?.nodeName).toStrictEqual('P');
    expect(card.firstElementChild?.innerHTML).toStrictEqual('9');
  });
});