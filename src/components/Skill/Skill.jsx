import "./Skill.css";
import "../../App.css";

function Skill(props) {
  return (
    <div className={`skill ${props.color}`}>
      <p>{props.title}</p>
    </div>
  );
}

export default Skill;
