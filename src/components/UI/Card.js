import './Card.css';
const Card = (props) => {
  return <div className={`Card ${props.checked}`}>{props.children}</div>;
};

export default Card;
