import React from 'react';

export default function Welcome({ printWelcome, setPrintWelcome, grade, setGrade, questions }) {

    let inputValidation = (grade >= 1 && grade <= questions.length && grade%1 == 0);

    if (printWelcome) {
        return (
            <div className="welcome">
                <div className="logo">
                    <img src='img/logo.png' alt='Logo' />
                    <p>ZapRecall</p>
                </div>
                <div className="start">
                    <input type="text" placeholder="Digite sua meta de zaps..." value={grade} onChange={(value) => setGrade(value.target.value)} />
                    {inputValidation ? <p>Clique em Iniciar Recall</p> : <p>Digite um número entre 1 e {questions.length}</p>}
                    <button 
                    className={inputValidation ? "" : "buttonDisabled"}
                    onClick={() => inputValidation ? setPrintWelcome(false) : ""}>Iniciar Recall!</button>
                </div>
            </div>
        );
    } else {
        return (
            <></>
        );
    }
}