import "./AddGameItemFormInput.css"

import { useState } from "react";
import Select from "react-select";

import { TEAM_SELECT_VALUES } from "./constant";

const AddGameItemFormInput = (props) => {

    const [selectedDate, setSelectedDate] = useState('');
    const [selectedOpponent, setSelectedOpponent] = useState('');
    const [inputAtBats, setInputAtBats] = useState('');
    const [inputHits, setInputHits] = useState('');
    const [inputWalks, setInputWalks] = useState('');
    const [inputStrikeouts, setInputStrikeouts] = useState('');

    const handleSelectedDate = (event) => setSelectedDate(event.target.value);
    const handleSelectedOpponent = (event) => setSelectedOpponent(event.value);
    const handleInputAtBats = (event) => setInputAtBats(event.target.value);
    const handleInputHits = (event) => setInputHits(event.target.value);
    const handleInputWalks = (event) => setInputWalks(event.target.value);
    const handleInputStrikeouts = (event) => setInputStrikeouts(event.target.value);

    const handleSubmit = (event) => {
        event.preventDefault()

        const payload = {
            date: selectedDate,
            opponent: selectedOpponent,
            AB: inputAtBats,
            H: inputHits,
            BB: inputWalks,
            K: inputStrikeouts
        }

        setSelectedDate('')
        setSelectedOpponent('')
        setInputAtBats('')
        setInputHits('')
        setInputWalks('')
        setInputStrikeouts('')

        props.onSubmission(payload)
    }

    return <form onSubmit={handleSubmit}>
        <div className="add-game-item">
            <div className="game-performance">
                <label className="game-performance__item">Date</label>
                <input
                    className="game-performance__item"
                    type="date"
                    value={selectedDate}
                    onChange={handleSelectedDate}
                />
                <label className="game-performance__item">Opponent</label>
                <Select
                    className="game-performance__item"
                    options={TEAM_SELECT_VALUES}
                    onChange={handleSelectedOpponent}
                />
            </div>
            <div className="player-performance">
                <label>At-Bats</label>
                <input
                    type="number" min="0"
                    value={inputAtBats}
                    onChange={handleInputAtBats}
                />
                <label>Hits</label>
                <input
                    type="number" min="0"
                    value={inputHits}
                    onChange={handleInputHits}
                />
                <label>Walks</label>
                <input
                    type="number" min="0"
                    value={inputWalks}
                    onChange={handleInputWalks}
                />
                <label>Strikeouts</label>
                <input
                    type="number" min="0"
                    value={inputStrikeouts}
                    onChange={handleInputStrikeouts}
                />
            </div>
            <div className="termination-buttons">
                <button>Cancel</button>
                <button>Submit {">"}</button>
            </div>
        </div>
    </form>;
}

export default AddGameItemFormInput;