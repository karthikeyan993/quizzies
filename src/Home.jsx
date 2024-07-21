import propTypes from "prop-types";

export default function Home(props) {
  return (
    <section className="home">
      <article className="home__info">
        <h1>Quizzical</h1>
        <p>
          Quizzical is a fun trivia game that challenges players with diverse
          questions across various topics, testing their knowledge and quick
          thinking skills.
        </p>
      </article>
      <button onClick={() => props.setStartGame(false)}>Start Quiz</button>
    </section>
  );
}

Home.propTypes = {
  setStartGame: propTypes.func,
};
