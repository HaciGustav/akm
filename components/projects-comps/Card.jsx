import styles from "@/styles/projects.module.css";
import { useEffect, useState } from "react";
const Card = ({ data }) => {
  const [description, setDescription] = useState("");
  const [openDesc, setOpenDesc] = useState(false);

  const showDescription = () => {
    if (!openDesc) {
      setDescription(data?.desc);
      setOpenDesc(true);
    } else {
      setDescription(data?.desc?.substring(0, 250) + "...");
      setOpenDesc(false);
    }
  };

  useEffect(() => {
    const tempDesc =
      data?.desc?.length > 250
        ? data?.desc?.substring(0, 250) + "..."
        : data?.desc;
    setDescription(tempDesc);
  }, [data]);

  return (
    <div className={styles.card_container}>
      <img
        className={styles.card_img}
        src="./assets/header-images/projects.jpg"
      />
      <div className={styles.card_info_wrapper}>
        <h2>Project Title</h2>
        <p>{description}</p>
        <div className={styles.btn_readmore_wrapper}>
          <span onClick={showDescription} className={styles.btn_readmore}>
            {openDesc ? "Weniger" : "Mehr"} Lesen
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
