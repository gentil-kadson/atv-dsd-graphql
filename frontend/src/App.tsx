import "./App.css";
import { About } from "./components/About";
import { Project } from "./components/Project";
import { useQuery, gql } from "@apollo/client";

type ProjectObj = {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  link?: string;
};

const GET_PROJECTS = gql`
  query GetProjects {
    getProjects {
      id
      name
      description
      technologies
      link
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(GET_PROJECTS);

  if (error)
    return (
      <section>
        <h1>An error has ocurred</h1>
        <p>{error.message}</p>
      </section>
    );

  return (
    <main>
      <section>
        <h2>Sobre mim</h2>
        <About
          age={22}
          description="Desenvolvedores profissionais em diversas tecnologias, como o Scratch, TypeScript etc. por mais de 5 anos."
          name="Ernie and Bert"
        />
      </section>

      <section>
        <h2>Projetos</h2>
        {loading ? (
          <p>Loading...</p>
        ) : (
          data.getProjects.map((project: ProjectObj) => (
            <Project key={project.id} {...project} />
          ))
        )}
      </section>
    </main>
  );
}

export default App;
