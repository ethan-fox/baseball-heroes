import "./AddGameItemForm.css"

import BigCard from "../Card/BigCard/BigCard";
import AddGameItemFormInput from "./FormInput/AddGameItemFormInput";


const AddGameItemForm = () => {
    
    const handleNewGameSubmitted = (payload) => {
        console.log('In the form')
        console.log(payload)
    }
    
    return <BigCard className="add-game-item-form">
        <AddGameItemFormInput onSubmission={handleNewGameSubmitted}/>
    </BigCard>;
}

export default AddGameItemForm;