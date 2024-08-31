import "./style.css";

interface ProjectProps {
  name: string;
  description: string;
  technologies: string[];
  link?: string;
}

export function Project({
  name,
  description,
  technologies,
  link,
}: ProjectProps) {
  return (
    <article className="project">
      <h3>{name}</h3>
      <p>{description}</p>
      <ul>
        {technologies.map((technology, index) => (
          <li key={index}>{technology}</li>
        ))}
      </ul>
      {link && (
        <a href={link} target="_blank" rel="noreferrer">
          Acessar
        </a>
      )}
    </article>
  );
}
