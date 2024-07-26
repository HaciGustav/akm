import styles from "@/styles/projects.module.css";
import Card from "./Card";

const mockData = [
  {
    title: "Camp Projekte",
    image: "/assets/projects/camp.jpg",
    desc: "Wir organisieren für unsere Mitglieder Camps für unterschiedliche Altersgruppen. Von Jugendlichen der Mädchen und Jungs bis hin zu Erwachsenen organisieren wir solche Camps. Dadurch wird auf der einen Seite das Soziale gefördert, auf der anderen Seite sind Weiterbildungsseminare eingebaut. Unsere Haupttermine finden in den Weihnachtsferien und Sommerferien statt. Je nach Jahreszeit bereichern wir unser Programm mit diversen Aktivitäten. Vom Rodeln bis hin zu Barbeque-Abende, und mit vielen In- und Outdoor Aktivitäten wird für viel Bewegung, Sport und Spaß gesorgt. Die Camps finden in unterschiedlichen Jugend- und Gästehäuser in ganz Österreich statt, sodass gleichzeitig auch Österreich und seine Natur erkundet werden kann.",
  },
  {
    title: "Story Time",
    image: "/assets/projects/storytime.jpg",
    desc: "In den Corona-Zeiten, wo noch der Lockdown galt und wir nicht zusammenkommen konnten, wollten wir unseren Bezug zu den Kindern nicht verlieren. Dies ermöglichten wir mit einem 8 wöchigem Projekt namens 'Storytime'. In diesem Projekt haben einige Freiwillige unserer Jugendgruppe den Kindern der Kindergruppe Geschichten vorgelesen und somit auch ethische Werte behandelt. Dieses Projekt hat sowohl der Jugendgruppe als auch der Kindergruppe in schweren Zeiten für Abwechslung gesorgt. Der Kontakt wurde auch von den Eltern als gut aufgefasst.",
  },
  {
    title: "Laß Uns Deutsch Sprechen!",
    image: "/assets/projects/deutsch.jpg",
    desc: "In diesem Projekt wurden für Asylbewerber, die noch keine Aufenthaltsbewilligung hatten und noch in Asylheime lebten, 8 Wochen lang (zwei mal die Woche) Deutsch für Einsteiger beigebracht. Frauen und Kinder waren die Zielgruppen dieses Projektes. Es wurden Wörter, Phrasen und Aussagen behandelt, damit die Teilnehmerinnen diese im Alltag verwenden können, bis sie sich zu einem aufrechten Kurs anmelden konnten. Dieser Basickurs erfolgte über Zoom in der Corona-Zeit und hat den Teilnehmerinnen den Einstieg ins Deutsche erleichtert. Die Freiwilligen erlernten durch eine Mentorin, die erlernte Geschichtenerzählerin ist, auf welcher Art und Weise man Kindern Geschichten erzählt, und die Mentorin hat sie durch dieses Projekt mit wiederholenden Meetings über Zoom begleitet. Die Corona-Zeit wurde somit etwas bunter gestaltet für die Teilnehmer.",
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
