import styles from "@/styles/projects.module.css";
import Card from "../Card";
import { useEffect, useState } from "react";
import useApiCalls from "@/hooks/useApiCalls";

const ProjectsSection = () => {
  const [projects, setProjects] = useState([]);

  const { getProjects } = useApiCalls();

  useEffect(() => {
    getProjects().then((res) => setProjects(res));
  }, []);

  return (
    <section className={styles.section_container}>
      {projects.map((item, index) => (
        <Card key={item.title + index} data={item} />
      ))}
    </section>
  );
};

export default ProjectsSection;
