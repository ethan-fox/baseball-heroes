import "./AddGameItemFormInput.css"

import { useState } from "react";

import GamePerformanceFormInput from "./GamePerformanceFormInput/GamePerformanceFormInput";

import { FORM_INPUT_COMPONENT } from "./constant";

// const PlayerPerformanceFormInput = (props) => {

//     return <div className="player-performance">
//         <label>At-Bats</label>
//         <input
//             type="number" min="0"
//             value={inputAtBats}
//             onChange={handleInputAtBats}
//         />
//         <label>Hits</label>
//         <input
//             type="number" min="0"
//             value={inputHits}
//             onChange={handleInputHits}
//         />
//         <label>Walks</label>
//         <input
//             type="number" min="0"
//             value={inputWalks}
//             onChange={handleInputWalks}
//         />
//         <label>Strikeouts</label>
//         <input
//             type="number" min="0"
//             value={inputStrikeouts}
//             onChange={handleInputStrikeouts}
//         />
//     </div>;
// }

const AddGameItemFormInput = (props) => {

    const [selectedDate, setSelectedDate] = useState('');
    const [selectedOpponent, setSelectedOpponent] = useState('');
    const [inputAtBats, setInputAtBats] = useState('');
    const [inputHits, setInputHits] = useState('');
    const [inputWalks, setInputWalks] = useState('');
    const [inputStrikeouts, setInputStrikeouts] = useState('');

    const handleSelectedDate = (value) => setSelectedDate(value);
    const handleSelectedOpponent = (value) => setSelectedOpponent(value);
    const handleInputAtBats = (event) => setInputAtBats(event.target.value);
    const handleInputHits = (event) => setInputHits(event.target.value);
    const handleInputWalks = (event) => setInputWalks(event.target.value);
    const handleInputStrikeouts = (event) => setInputStrikeouts(event.target.value);

    const handleFormInput = (value, type) => {
        switch (type) {
            case FORM_INPUT_COMPONENT.DATE:
                handleSelectedDate(value)
                break;
            case FORM_INPUT_COMPONENT.OPPONENT:
                handleSelectedOpponent(value)
                break;
            default:
                // Worst case, we don't do anything.
                // We have a bunch of safeguards in
                //  place this shouldn't be an issue.
                break;
        }
    }

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

        setInputAtBats('')
        setInputHits('')
        setInputWalks('')
        setInputStrikeouts('')

        props.onSubmission(payload)
    }

    return <form onSubmit={handleSubmit}>
        <div className="add-game-item">
            <GamePerformanceFormInput
                selectedDate={selectedDate}
                onTextChange={handleFormInput}
            />
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