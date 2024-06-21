import styles from "@/styles/projects.module.css";
import Card from "./Card";

const mockData = [
  {
    title: "Project",
    image: "./assets/header-images/projects.jpg",
    desc: "Österreich ist einer der bedeutendsten Kultur- und Tourismusgemeinschaften Europas, und ein soziales Land, in dem Menschen unterschiedlichster Herkunft in Frieden leben. Die Zahl der hier in Österreich lebenden türkischen Migranten liegt über dem europäischen Durchschnitt. Eine aussichtsreiche und gelungene Zukunft dieser Menschen, kann nur mit einer gelungenen Bildung, der kulturellen und sozialen Bindung an Österreich, sowie der gelebten Integration der Werte, der Österreichischen Gesellschaft, im täglichen Leben, erreicht werden.",
  },
  {
    title: "Project",
    image: "./assets/header-images/projects.jpg",
    desc: "Österreich ist einer der bedeutendsten Kultur- und Tourismusgemeinschaften Europas, und ein soziales Land, in dem Menschen unterschiedlichster Herkunft in Frieden leben. Die Zahl der hier in Österreich lebenden türkischen Migranten liegt über dem europäischen Durchschnitt. Eine aussichtsreiche und gelungene Zukunft dieser Menschen, kann nur mit einer gelungenen Bildung, der kulturellen und sozialen Bindung an Österreich, sowie der gelebten Integration der Werte, der Österreichischen Gesellschaft, im täglichen Leben, erreicht werden.",
  },
  {
    title: "Project",
    image: "./assets/header-images/projects.jpg",
    desc: "Österreich ist einer der bedeutendsten Kultur- und Tourismusgemeinschaften Europas, und ein soziales Land, in dem Menschen unterschiedlichster Herkunft in Frieden leben. Die Zahl der hier in Österreich lebenden türkischen Migranten liegt über dem europäischen Durchschnitt. Eine aussichtsreiche und gelungene Zukunft dieser Menschen, kann nur mit einer gelungenen Bildung, der kulturellen und sozialen Bindung an Österreich, sowie der gelebten Integration der Werte, der Österreichischen Gesellschaft, im täglichen Leben, erreicht werden.",
  },
  {
    title: "Project",
    image: "./assets/header-images/projects.jpg",
    desc: "Österreich ist einer der bedeutendsten Kultur- und Tourismusgemeinschaften Europas, und ein soziales Land, in dem Menschen unterschiedlichster Herkunft in Frieden leben. Die Zahl der hier in Österreich lebenden türkischen Migranten liegt über dem europäischen Durchschnitt. Eine aussichtsreiche und gelungene Zukunft dieser Menschen, kann nur mit einer gelungenen Bildung, der kulturellen und sozialen Bindung an Österreich, sowie der gelebten Integration der Werte, der Österreichischen Gesellschaft, im täglichen Leben, erreicht werden.",
  },
  {
    title: "Project",
    image: "./assets/header-images/projects.jpg",
    desc: "Österreich ist einer der bedeutendsten Kultur- und Tourismusgemeinschaften Europas, und ein soziales Land, in dem Menschen unterschiedlichster Herkunft in Frieden leben. Die Zahl der hier in Österreich lebenden türkischen Migranten liegt über dem europäischen Durchschnitt. Eine aussichtsreiche und gelungene Zukunft dieser Menschen, kann nur mit einer gelungenen Bildung, der kulturellen und sozialen Bindung an Österreich, sowie der gelebten Integration der Werte, der Österreichischen Gesellschaft, im täglichen Leben, erreicht werden.",
  },
];

const ProjectsSection = () => {
  return (
    <section className={styles.section_container}>
      {mockData.map((item, index) => (
        <Card key={item.title + index} data={item} />
      ))}
    </section>
  );
};

export default ProjectsSection;
