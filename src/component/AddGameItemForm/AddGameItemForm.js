import "./AddGameItemForm.css"

import BigCard from "../Card/BigCard/BigCard";
import AddGameItemFormInput from "./AddGameItemFormInput";


const AddGameItemForm = () => <BigCard className="add-game-item-form">
    <AddGameItemFormInput />
</BigCard>;

export default AddGameItemForm;