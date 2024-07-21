import { useEffect, useState } from "react";
import Question from "./Question";

export default function Game() {
  const [quiz, setQuiz] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [answers, setAnswers] = useState([]);
  const [game, setGame] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      const response = await fetch(
        "https://opentdb.com/api.php?amount=5&category=11&difficulty=easy&type=multiple"
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      const resultsWithIds = data.results.map((item, index) => ({
        ...item,
        id: `${index + 1}`,
      }));
      console.log(resultsWithIds);
      setQuiz(resultsWithIds);
    } catch (e) {
      console.error("Error fetching data:", e);
    }
  }

  function handleClick() {
    if (game) {
      console.log("play again");
      setGame(false);
      setCorrectCount(0);
      setAnswers([]);
      // setIsLoading(true);
      getData();
    } else {
      let count = 0;
      quiz.forEach((question, index) => {
        const answer = answers.find((a) => a.id === index + 1);
        if (answer && answer.selected === question.correct_answer) {
          count++;
        }
      });
      console.log(`Number of correct answers: ${correctCount}`);
      setCorrectCount(count);
      setGame(true);
    }
  }

  const questions = quiz.map((data, index) => (
    <Question
      setIsLoading={setIsLoading}
      data={data}
      key={index}
      index={index + 1}
      setQuiz={setQuiz}
      quiz={quiz}
      setAnswers={setAnswers}
      answers={answers}
      game={game}
    />
  ));

  return (
    <section className="quiz-container">
      {questions}
      <div className="submit-wrapper">
        {game && <p>You scored {correctCount}/5 correct answers</p>}
        {!isLoading && (
          <button onClick={handleClick} className="submit-btn">
            {game ? "Play again" : "Check answers"}
          </button>
        )}
      </div>
    </section>
  );
}
