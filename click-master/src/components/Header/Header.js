import React from 'react';
import './Header.css';

function Header({ guessResult, curScore, topScore }) {
    return (
        <header className="Header">
            <div className="Header-size">
                <h1 className="Header-text">
                    Click Master
                </h1>
                <h2>
                    {guessResult ? 'You guessed ' : 'Click an image to start guessing'}

                    <span className={"Header-" + guessResult}>
                        {guessResult ? guessResult + 'ly' : guessResult}
                    </span>
                </h2>
                <h2 className="Header-score">
                    Current score: {curScore} | Top score: {topScore}
                </h2>
            </div>
        </header>
    );
}

export default Header;
