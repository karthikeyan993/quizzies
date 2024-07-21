import { useEffect, useState } from "react";
import propTypes from "prop-types";
import he from "he";

export default function Question({
  data,
  index,
  setIsLoading,
  setAnswers,
  answers,
  game,
}) {
  const [options, setOptions] = useState([]);
  useEffect(() => {
    const decodedIncorrectAnswers = data.incorrect_answers.map(he.decode);
    const decodedCorrectAnswer = he.decode(data.correct_answer);

    const randomIndex = Math.floor(
      Math.random() * (decodedIncorrectAnswers.length + 1)
    );
    const newOptions = [...decodedIncorrectAnswers];
    newOptions.splice(randomIndex, 0, decodedCorrectAnswer);

    setOptions(newOptions);
  }, [data]);

  useEffect(() => {
    if (options.length > 0) {
      setIsLoading(false);
    }
  }, [options, setIsLoading]);

  const optionsElements = options.map((option, optionIndex) => {
    const selectedAnswer = answers.find((answer) => answer.id === index);
    let className = "";

    if (game) {
      className = "game-over";
      if (option === he.decode(data.correct_answer)) {
        className = " correct-answer";
      } else if (selectedAnswer && option === selectedAnswer.selected) {
        className += " wrong-answer";
      }
    }

    return (
      <div className={`radio-option ${className}`} key={optionIndex}>
        <label
          key={optionIndex}
          htmlFor={`question-${index}-option-${optionIndex}`}
        >
          <input
            type="radio"
            name={`question-${index}`}
            id={`question-${index}-option-${optionIndex}`}
            value={option}
            onChange={handleChange}
            checked={answers.some(
              (answer) => answer.id === index && answer.selected === option
            )}
          />
          {option}
        </label>
      </div>
    );
  });

  const decodedQuestion = he.decode(data.question);

  function handleChange(event) {
    setAnswers((prevAnswers) => {
      const newAnswers = [...prevAnswers];
      const answerIndex = newAnswers.findIndex((answer) => answer.id === index);
      if (answerIndex > -1) {
        newAnswers[answerIndex].selected = event.target.value;
      } else {
        newAnswers.push({ id: index, selected: event.target.value });
      }
      return newAnswers;
    });
  }

  return (
    <fieldset>
      <p>{decodedQuestion}</p>
      <div className="options-container">{optionsElements}</div>
    </fieldset>
  );
}

Question.propTypes = {
  data: propTypes.object,
  index: propTypes.number,
  setIsLoading: propTypes.func,
  setQuiz: propTypes.func,
  quiz: propTypes.array,
  setAnswers: propTypes.func,
  answers: propTypes.array,
  game: propTypes.bool,
};
