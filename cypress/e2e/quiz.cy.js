// Cypress End-to-End Tests
describe('Tech Quiz Application', () => {
  beforeEach(() => {
    // Visit the application before each test
    cy.visit('/');
  });

  it('should display the start button on the home page', () => {
    cy.get('button').contains('Start Quiz').should('be.visible');
  });

  it('should start the quiz and display the first question when the start button is clicked', () => {
    cy.get('button').contains('Start Quiz').click();
    cy.contains('Which of the following statements').should('be.visible'); // Update with your first question
  });

  it('should allow the user to answer a question and display the next question', () => {
    cy.get('button').contains('Start Quiz').click();
    cy.get('.option').eq(1).click(); // Click on the second option
    cy.contains('Next Question').click();
    cy.contains('Question 2').should('be.visible'); // Update for your second question
  });

  it('should display the score after all questions are answered', () => {
    cy.get('button').contains('Start Quiz').click();
    cy.get('.option').eq(1).click(); // Answer question 1
    cy.contains('Next Question').click();
    cy.get('.option').eq(0).click(); // Answer question 2
    cy.contains('View Score').click();
    cy.contains('Quiz Completed').should('be.visible');
    cy.contains('Your score').should('exist');
  });

  it('should allow the user to restart the quiz after completion', () => {
    cy.get('button').contains('Start Quiz').click();
    cy.get('.option').eq(1).click();
    cy.contains('Next Question').click();
    cy.get('.option').eq(0).click();
    cy.contains('View Score').click();
    cy.get('button').contains('Take New Quiz').click();
    cy.contains('Start Quiz').should('be.visible');
  });
});

// Cypress Component Tests
describe('Quiz Component Tests', () => {
  beforeEach(() => {
    // Mock data for the quiz questions
    const questions = [
      {
        question: 'What is 2 + 2?',
        options: ['1', '2', '3', '4'],
        answer: '4',
      },
      {
        question: 'Which programming language is used for React?',
        options: ['Python', 'Java', 'JavaScript', 'Ruby'],
        answer: 'JavaScript',
      },
    ];

    cy.mount(<Quiz questions={questions} />);
  });

  it('should render the quiz component with the first question', () => {
    cy.contains('What is 2 + 2?').should('be.visible');
  });

  it('should render the options for a question', () => {
    cy.get('.option').should('have.length', 4);
    cy.get('.option').eq(0).contains('1');
    cy.get('.option').eq(3).contains('4');
  });

  it('should display the next question when an option is clicked', () => {
    cy.get('.option').contains('4').click();
    cy.contains('Which programming language is used for React?').should(
      'be.visible'
    );
  });

  it('should display the score when all questions are answered', () => {
    cy.get('.option').contains('4').click();
    cy.get('.option').contains('JavaScript').click();
    cy.contains('Quiz Completed').should('be.visible');
    cy.contains('Your score').should('exist');
  });
});
