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
        { ask: "Componentes devem iniciar com __", answer: "letra maiúscula" },
        { ask: "Podemos colocar __ dentro do JSX", answer: "expressões" },
        { ask: "O ReactDOM nos ajuda __", answer: "interagindo com a DOM para colocar componentes React na mesma" },
        { ask: "Usamos o npm para __", answer: "gerenciar os pacotes necessários e suas dependências" },
        { ask: "Usamos props para __", answer: "passar diferentes informações para componentes " },
        { ask: "Usamos estado (state) para __", answer: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" }
    ];

    function comparator() { 
        return Math.random() - 0.5; 
    }

    const questions = [...savedQuestions].sort(comparator);

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
            <Welcome printWelcome={printWelcome} setPrintWelcome={setPrintWelcome} />
            <Header />
            <Main questions={questions} status={status} functionSetStatus={functionSetStatus} answered={answered} />
            <Footer questions={questions} answered={answered} />
        </>
    );
}

ReactDOM.render(<App />, document.querySelector(".root"));