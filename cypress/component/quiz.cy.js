import React from 'react';
import { mount } from '@cypress/react';
import QuizQuestion from '../../src/components/QuizQuestion';

describe('QuizQuestion Component', () => {
  it('renders a quiz question with options', () => {
    const question = {
      question: 'What is React?',
      options: ['A library', 'A framework', 'A language', 'None of the above'],
      answer: 'A library',
    };

    mount(<QuizQuestion {...question} />);
    cy.get('h2').contains('What is React?'); // Verify the question is displayed
    cy.get('button').should('have.length', 4); // Verify 4 options are rendered
  });
});
