
// NOTE while composition is a useful pattern,
//  I'm having trouble with how much duplication
//  exists re: div kwargs - feels pretty boilerplate.
const Card = (props) => <div
    className = {`card ${props.className}`}
    style = {props.style}
>{props.children}</div>

export default Card;