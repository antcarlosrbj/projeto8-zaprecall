export default function Footer({ questions, answered }) {
    
    let quantityAnswers = "";
    const grade = questions.length;

    let heightFooter = "playing";
    if (answered.length == questions.length) {
        heightFooter = "finished";
    };
    
    if(answered.length < questions.length) {
        quantityAnswers = <p>{answered.length}/{questions.length} CONCLUÍDOS</p>;
    } else {
        if(answered.filter((value) => value != "didntRemind").length >= grade) {
            quantityAnswers = 
                <>
                    <div className="result">
                        <img src="img/party.png" alt="Parabéns"/>
                        <p>PARABÉNS!</p>
                    </div>
                    <p>Você não esqueceu de nenhum flashcard!</p>
                </>;
        } else {
            quantityAnswers = 
                <>
                    <div className="result">
                        <img src="img/sad.png" alt="Triste"/>
                        <p>PUTS!</p>
                    </div>
                    <p>Ainda faltaram alguns... Mas não desanime!</p>
                </>;
        }
    }
    
    return (
        <div className={"footer " + heightFooter}>
            <div className="quantityAnswers">
                {quantityAnswers}
            </div>
            <div className="statusAnswers">
                {answered.map((status) => {
                    if (status == "didntRemind") {
                        return (<ion-icon name="close-circle" class="close-circle"></ion-icon>);
                    } else if (status == "almostDidntRemind") {
                        return (<ion-icon name="help-circle" class="help-circle"></ion-icon>);
                    } else if (status == "zap") {
                        return (<ion-icon name="checkmark-circle" class="checkmark-circle"></ion-icon>);
                    }
                })}
            </div>
        </div>
    );
}