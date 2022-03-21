import React from 'react';

export default function Welcome({printWelcome, setPrintWelcome}) {
    if (printWelcome) {
        return (
            <div className="welcome">
                <div className="logo">
                    <img src='img/logo.png' alt='Logo' />
                    <p>ZapRecall</p>
                </div>
                <div className="start">
                    <button onClick={() => setPrintWelcome(false)}>Iniciar Recall!</button>
                </div>
            </div>
        );
    } else {
        return (
            <></>
        );
    }
}