import ProjectCard from "@/components/Card";
import useApiCalls from "@/hooks/useApiCalls";
import { useEffect, useState } from "react";
import css from "@/styles/projects.module.css";
import { useRouter } from "next/router";
import ProjectEditModal from "@/components/projects-comps/ProjectEditModal";

const ProjectEditCard = ({ data }) => {
  const router = useRouter();
  const { deleteProject } = useApiCalls();
  const handleDelete = () => deleteProject(data.id).then(() => router.reload());

  return (
    <div className={css.card_container}>
      <img className={css.card_img} src={data.image} />
      <div className={css.card_info_wrapper}>
        <h2>{data.title}</h2>

        <div className={css.btn_readmore_wrapper}>
          <span onClick={handleDelete} className={css.btn_delete}>
            Löschen
          </span>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const { getProjects } = useApiCalls();

  useEffect(() => {
    getProjects().then((res) => setProjects(res));
  }, []);
  return (
    <section className={css.section_container}>
      <ProjectEditModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
      {projects.map((item, index) => (
        <ProjectEditCard key={item.title + index} data={item} />
      ))}
      <div
        className={css.card_container_new}
        onClick={() => setModalOpen(true)}
      >
        <div className={css.card_info_wrapper}>
          <h2>Neu Hinzufügen</h2>

          <div className={css.btn_readmore_wrapper}></div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
