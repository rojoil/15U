'use strict';

import React, {useState} from "react";
import Comment from './Comment';
import "./index.css";

function App() {
    let state;

    if (localStorage.getItem('localState')) {
        state = JSON.parse(localStorage.getItem('localState'));
    } else {
        state = [];
    }
    
    let userValue = '';
    let textValue = '';

    const [entries, setEntry] = useState(state);
    const [inputUser, handleInputUser] = useState(userValue);
    const [inputText, handleInputText] = useState(textValue);

    function onDeleteClick(ev) {
        const id = ev.target.parentElement.parentElement.getAttribute('number');
        const newState = entries.map((item, i) => {
            if (+i != +id) {
                return item;
            } else {
                return false;
            }
        }
        )

        setEntry(newState);
        localStorage.setItem('localState',JSON.stringify(newState));
    }

    function onAddClick(ev) {
        if(inputUser && inputText) {
            let stateCopy = entries.slice();
            stateCopy.push({userName: inputUser, text: inputText});
            setEntry(stateCopy);
            localStorage.setItem('localState',JSON.stringify(stateCopy));
        };
        ev.preventDefault();
    }

    function handleInputChange(ev) {
        let currentUser = ev.target.value;
        handleInputUser(currentUser);
    }

    function handleTextAreaChange(ev) {
        let currentText = ev.target.value;
        handleInputText(currentText);
    }

    return(
        <div className="app">
            <div className="comment-box">
                {
                entries.map((entry,i) => 
                {
                   if (entry) {
                    return(
                        <Comment number={i} key={i}
                        userName={entry.userName}
                        text={entry.text}
                        onClick={onDeleteClick}/>
                    )
                   }
                }
                )
                }
            </div>
            <form name="form" className="input-box">
                <input form="form" placeholder="Введите свое имя" onChange={handleInputChange}/>
                <textarea form="form" onChange={handleTextAreaChange} placeholder="Введите текст своего комментария"/>
                <button form="form" className="add-btn" onClick={onAddClick}>Добавить комментарий</button>
            </form>
        </div>
    );
}

export default App;