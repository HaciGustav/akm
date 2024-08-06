import styles from "@/styles/header.module.css";

const Header = ({ page }) => {
  const checkPage = () => {
    switch (page) {
      case "home":
        return {
          image: "./assets/header-images/home-header.jpg",
          title: "grüß got österreich",
        };

      case "projects":
        return {
          image: "./assets/header-images/projects.jpg",
          title: "Aktivitäten & Projekte",
        };

      case "about-us":
        return {
          image: "./assets/header-images/about-us.jpg",
          title: "über uns",
        };

      case "courses":
        return {
          image: "./assets/header-images/courses.jpg",
          title: "Kurse",
        };

      case "contact":
        return {
          image: "./assets/header-images/home-header.jpg",
          title: "Wer Sind Wir?",
        };
      default:
        break;
    }
  };
  return (
    <>
      <div className={styles.header_container}>
        <div
          className={styles.header_parallax}
          style={{ backgroundImage: `url(${checkPage()?.image})` }}
        >
          <div className={styles.header_opacity}>
            <h1 className={`${styles.header_title} ${styles.border_effect} `}>
              {checkPage()?.title}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
