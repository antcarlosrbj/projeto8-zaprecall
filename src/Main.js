import React from 'react';

export default function Main({ questions, status, functionSetStatus, answered }) {

    let heightFooter = "playing";
    if (answered.length == questions.length) {
        heightFooter = "finished";
    };

    const startFace = [];
    questions.forEach(() => {
        startFace.push("card back");
    })

    const [face, setFace] = React.useState(startFace);

    const questionJSX = questions.map((question, index) => {
        if (face[index] == "card back") {
            let classname = "";
            let icone = "";
            let click = "";
            if (status[index] == "didntRemind") {
                classname = `question didntRemind`;
                icone = <ion-icon name="close-circle"></ion-icon>;

            } else if (status[index] == "almostDidntRemind") {
                classname = `question almostDidntRemind`;
                icone = <ion-icon name="help-circle"></ion-icon>;
                click = false;

            } else if (status[index] == "zap") {
                classname = `question zap`;
                icone = <ion-icon name="checkmark-circle"></ion-icon>;
                click = false;

            } else {
                classname = `question`;
                icone = <ion-icon name="play-outline"></ion-icon>;
                click = true;
            }
            return (
                <div className={classname} onClick={() => {
                    if (click) {
                        let newFace = [...startFace];
                        newFace[index] = "ask";
                        setFace(newFace);
                    }
                }} key={index}>
                    <p>{"Pergunta " + (index + 1)}</p>
                    {icone}
                </div>
            );
        } else if (face[index] == "ask") {
            return (
                <div className="ask" key={index}>
                    <p>{question.ask}</p>
                    <svg onClick={() => {
                        let newFace = [...startFace];
                        newFace[index] = "answer";
                        setFace(newFace);
                    }} width="40" height="26" viewBox="0 0 20 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 0C4.5 0 0 2.2 0 5C0 7.2 2.9 9.1 7 9.8V13L11 9L7 5V7.7C3.8 7.1 2 5.8 2 5C2 3.9 5 2 10 2C15 2 18 3.9 18 5C18 5.7 16.5 6.9 14 7.5V9.6C17.5 8.8 20 7.1 20 5C20 2.2 15.5 0 10 0Z" fill="#333333" />
                    </svg>
                </div>
            );
        } else if (face[index] == "answer") {
            return (
                <div className="answer" key={index}>
                    <p>{question.answer}</p>
                    <div className="options">
                        <div className="didntRemind" onClick={() => {
                            functionSetStatus("didntRemind", index);

                            let newFace = [...startFace];
                            newFace[index] = "card back";
                            setFace(newFace);
                        }}>
                            <p>Não Lembrei</p>
                        </div>
                        <div className="almostDidntRemind" onClick={() => {
                            functionSetStatus("almostDidntRemind", index);
                            
                            let newFace = [...startFace];
                            newFace[index] = "card back";
                            setFace(newFace);
                        }}>
                            <p>Quase não lembrei</p>
                        </div>
                        <div className="zap" onClick={() => {
                            functionSetStatus("zap", index);
                            
                            let newFace = [...startFace];
                            newFace[index] = "card back";
                            setFace(newFace);
                        }}>
                            <p>Zap!</p>
                        </div>
                    </div>
                </div>
            );
        } else {
            console.log("Erro na função printCard");
        }
    });

    return (
        <div className={"main " + heightFooter}>
            {questionJSX}
        </div>
    );
}