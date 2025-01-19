# Tech Quiz Application

## Description
The Tech Quiz Application is a full-stack web application that allows users to test their technical knowledge through a quiz. Users can answer multiple-choice questions, view their scores, and retake the quiz. The application includes a React frontend, Node.js/Express backend, and MongoDB database, with end-to-end testing implemented using Cypress.

## Table of Contents
- [Walkthrough Video](#walkthrough-video)
- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
- [License](#license)
- [Contributing](#contributing)
- [Questions](#questions)

## Walkthrough Video
[Click here to view the walkthrough video](https://your-walkthrough-video-link)

## Installation

### 1. Clone the repository:
```bash
git clone https://github.com/your-username/tech-quiz.git
cd tech-quiz
```
### 2. Install dependencies:
For the server:
```bash
cd server
npm install
```
For the client:
```bash
cd ../client
npm install
```
### 3. Set up the environment variables:
Create a .env file in the server directory with the following:
```bash
MONGO_URI=mongodb://localhost:27017/tech-quiz
PORT=5001
```
### 4. Start the application:
Start the server:
```bash
cd server
npm start
```
Start the client:
```bash
cd ../client
npm start
```
The client will run on http://localhost:3001 by default.

## Usage
### 1. Open the application in your browser at http://localhost:3001.
### 2. Click "Start Quiz" to begin.
### 3. Answer each question by selecting an option.
### 4. View your score at the end of the quiz.
### 5. Retake the quiz by clicking "Take New Quiz."

## Testing
Run Cypress tests:
### 1. Start the server and client as described in the [Installation](#installation) section.
### 2. Run the Cypress test suite:
```bash
npx cypress open
```
### 3. Select the tests you want to run from the Cypress interface.
The application includes both component and end-to-end tests for the quiz functionality.

## License
This project is licensed under the MIT license.

## Contributing
Fork the repo, create a feature branch, and submit a pull request.

## Questions
If you have any questions, feel free to reach out:

GitHub: anton10mata
