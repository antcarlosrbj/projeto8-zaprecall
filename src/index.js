import ReactDOM from 'react-dom';
import React from 'react';

import Welcome from './Welcome';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {

    const savedQuestions = [
        { ask: "O que é JSX?", answer: "Uma extensão de linguagem do JavaScript" },
        { ask: "O React é __", answer: "uma biblioteca JavaScript para construção de interfaces" },
        { ask: "Componentes devem iniciar com __", answer: "letra maiúscula" }
    ];

    function comparator() {
        return Math.random() - 0.5;
    }

    function restart() {
        questions = [...savedQuestions].sort(comparator);
        setGrade();
        setStatus(["notAnswered", "notAnswered", "notAnswered", "notAnswered"]);
        setAnswered([]);
        setPrintWelcome(true);
    }

    let questions = [...savedQuestions].sort(comparator);

    const [grade, setGrade] = React.useState();
    const [status, setStatus] = React.useState(["notAnswered", "notAnswered", "notAnswered", "notAnswered"]);
    const [answered, setAnswered] = React.useState([]);
    const [printWelcome, setPrintWelcome] = React.useState(true);

    function functionSetStatus(statusAnswer, index) {
        let newStatus = [...status];
        newStatus[index] = statusAnswer;
        setStatus(newStatus);

        setAnswered([...answered, statusAnswer]);
    }

    return (
        <>
            <Welcome printWelcome={printWelcome} setPrintWelcome={setPrintWelcome} grade={grade} setGrade={setGrade} questions={questions} />
            <Header />
            <Main questions={questions} status={status} functionSetStatus={functionSetStatus} answered={answered} />
            <Footer questions={questions} answered={answered} grade={grade} restart={restart} />
        </>
    );
}

ReactDOM.render(<App />, document.querySelector(".root"));