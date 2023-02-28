import "./Button.css"

const Button = (props) => <button
    className={`button ${props.className}`}
    style={props.style}
>{props.children}</button>

export default Button;