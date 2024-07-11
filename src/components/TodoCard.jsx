
const TodoCard = ({ title, description }) => {
    return ( 
        <li>
            <h3>{title}</h3>
            <p>{description}</p>
        </li>
     );
}
 
export default TodoCard;