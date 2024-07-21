# Quizzical App

Welcome to the Quizzical App, a fun and interactive quiz game built with React. You can play the quiz game online at [Quizzical Game Online](https://quizzical-game-online.netlify.app/).

## Features

- Fetches trivia questions from the Open Trivia Database (OpenTDB).
- Displays multiple-choice questions.
- Allows users to select answers and check their scores.
- Highlights correct answers in green and incorrect answers in red after submission.
- Resets the game for a new round of questions.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Fetch API**: For making HTTP requests to the Open Trivia Database.
- **CSS**: For styling the components.

## Getting Started

To run the Quizzical App locally, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/quizzical-app.git
   cd quizzical-app
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Run the development server**:

   ```bash
   npm start
   ```

   The app should now be running on [http://localhost:3000](http://localhost:3000).

## Usage

1. Open the [Quizzical Game Online](https://quizzical-game-online.netlify.app/) or run the app locally.
2. The quiz will automatically fetch and display 5 multiple-choice questions.
3. Select your answers for each question.
4. Click the "Check answers" button to see your score.
5. Correct answers will be highlighted in green, and incorrect answers will be highlighted in red.
6. Click the "Play again" button to start a new game with fresh questions.

## Code Overview

### Main Components

- **Game**: The main component that handles fetching quiz data, managing game state, and rendering questions.
- **Question**: A component that displays a single quiz question and its multiple-choice options.

### Game Component

The `Game` component handles:

- Fetching quiz data from the Open Trivia Database.
- Managing the state of the quiz, including the list of questions, user answers, and game status.
- Rendering the list of `Question` components.
- Handling the logic for checking answers and resetting the game.

### Question Component

The `Question` component handles:

- Decoding HTML entities in the question and options.
- Rendering the question and its multiple-choice options.
- Managing the selection of user answers.
- Highlighting correct and incorrect answers after the game is submitted.

### CSS Styling

The app includes custom CSS for styling the quiz components, including:

- Highlighting correct answers in green and incorrect answers in red.
- Setting the opacity of radio buttons to 0.5 when the game is over.

## Deployment

The app is deployed on Netlify at [Quizzical Game Online](https://quizzical-game-online.netlify.app/).

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes.

## License

This project is open-source and available under the MIT License.

## Acknowledgements

- Questions are fetched from the [Open Trivia Database](https://opentdb.com/).
- HTML entity decoding is done using the `he` library.

Enjoy the Quizzical App!
