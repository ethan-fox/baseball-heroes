import Select from 'react-select'

import { teamSelectValues } from "./constant";

const AddGameItemFormInput = () => {
    return <form>
        <div>
            <div>
                <div>
                    <label>Date of Game</label>
                    <input type="date" />
                </div>
                <div style={{"display": "flex", "max-width": "25%"}}>
                    <label>Opponent</label>
                    <Select options={teamSelectValues}/>
                </div>
            </div>
            <div>
                <label>At-Bats</label>
                <input type="number" min="0" />
            </div>
            <div>
                <label>Hits</label>
                <input type="number" min="0" />
            </div>
            <div>
                <label>Walks</label>
                <input type="number" min="0" />
            </div>
            <div>
                <label>Strikeouts</label>
                <input type="number" min="0" />
            </div>
        </div>
        <div>
            <button>Cancel</button>
        </div>
        <div>
            <button>Submit New Game</button>
        </div>
    </form>;
}

export default AddGameItemFormInput;