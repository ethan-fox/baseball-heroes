import "./AddGameItemForm.css"

import BigCard from "../Card/BigCard/BigCard";
import AddGameItemFormInput from "./AddGameItemFormInput/AddGameItemFormInput";


const AddGameItemForm = (props) => {
    
    const handleNewGameSubmitted = (payload) => props.onSubmission(payload);

    return <BigCard className="add-game-item-form">
        <AddGameItemFormInput onSubmission={handleNewGameSubmitted}/>
    </BigCard>;
}

export default AddGameItemForm;