import "./AddGameItemButton.css"

import { useState } from "react";

import { STYLES, HOVERED, CLICKED } from "./styles";

const AddGameItemButton = (props) => {

    const [styleProps, setStyle] = useState({ ...props.style, ...STYLES });

    const handleMouseEnter = () => setStyle({ ...styleProps, ...HOVERED });

    const handleMouseLeave = () => setStyle({ ...styleProps, ...STYLES });

    const handleMouseDown = () => setStyle({ ...styleProps, ...CLICKED })

    const handleMouseUp = () => setStyle({ ...styleProps, ...STYLES });

    return <button
        className={`add-game-item-button ${props.className}`}
        style={styleProps}
        onClick={props.onClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseDownCapture={handleMouseDown}
        onMouseUpCapture={handleMouseUp}
    >+ Add Game</button>;
}

export default AddGameItemButton;