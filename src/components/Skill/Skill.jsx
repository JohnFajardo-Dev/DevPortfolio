import "./Skill.css";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faPython,
  faAndroid,
  faNpm,
  faNode,
  faLinux,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Componente individual para representar una habilidad
function Skill({ name }) {
  // Mapeo de nombres de habilidades a iconos correspondientes
  const iconMapping = {
    HTML: faHtml5,
    CSS: faCss3Alt,
    JavaScript: faJs,
    React: faReact,
    Python: faPython,
    Android: faAndroid,
    Npm: faNpm,
    Node: faNode,
    Linux: faLinux,
  };

  // Obtener el ícono correspondiente al nombre de habilidad
  const icon = iconMapping[name];

  return (
    <div className="skill">
      <FontAwesomeIcon icon={icon} size="5x" />
      <p>{name}</p>
    </div>
  );
}

// Componente contenedor que renderiza una lista de habilidades
function SkillsContainer() {
  // Lista de habilidades a mostrar
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Python",
    "Android",
    "Npm",
    "Node",
    "Linux",
  ];

  return (
    <div className="skills">
      {/* Mapear cada habilidad a un componente Skill */}
      {skills.map((skill, index) => (
        <Skill key={index} name={skill} />
      ))}
    </div>
  );
}

export default SkillsContainer;
