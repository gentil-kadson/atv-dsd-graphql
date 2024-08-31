import "./App.css";
import { About } from "./components/About";
import { Project } from "./components/Project";

const PLACEHOLDER_DATA = {
  projects: [
    {
      title: "Desenvolvimento de Aplicativo Mobile",
      description:
        "Aplicativo mobile para gerenciamento de tarefas pessoais e profissionais com integração a serviços de nuvem.",
      tecnologies: ["React Native", "Firebase", "Redux"],
      link: "#",
    },
    {
      title: "Website de E-commerce",
      description:
        "Plataforma completa de e-commerce com carrinho de compras, sistema de pagamento e área administrativa.",
      tecnologies: ["Next.js", "Node.js", "Stripe API"],
      link: "#",
    },
    {
      title: "Ferramenta de Análise de Dados",
      description:
        "Sistema para análise de grandes volumes de dados, com visualizações personalizáveis e relatórios automatizados.",
      tecnologies: ["Python", "Pandas", "Plotly"],
      link: "#",
    },
  ],
  about: {
    name: "Fulano de Tal",
    age: 30,
    description:
      "Desenvolvedor de software com 10 anos de experiência em projetos de alta complexidade.",
  },
};

function App() {
  return (
    <main>
      <section>
        <h2>Sobre mim</h2>
        <About {...PLACEHOLDER_DATA.about} />
      </section>

      <section>
        <h2>Projetos</h2>
        {PLACEHOLDER_DATA.projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </section>
    </main>
  );
}

export default App;
