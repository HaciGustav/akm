import styles from "@/styles/projects.module.css";
import { useEffect, useState } from "react";
const Card = ({ data }) => {
  const [description, setDescription] = useState("");
  const [openDesc, setOpenDesc] = useState(false);

  const showDescription = () => {
    if (!openDesc) {
      setDescription(data?.text);
      setOpenDesc(true);
    } else {
      setDescription(data?.text?.substring(0, 250) + "...");
      setOpenDesc(false);
    }
  };

  useEffect(() => {
    const tempDesc =
      data?.text?.length > 250
        ? data?.text?.substring(0, 250) + "..."
        : data?.text;
    setDescription(tempDesc);
  }, [data]);

  return (
    <div
      className={styles.card_container}
      style={{ justifyContent: "flex-start" }}
    >
      <img className={styles.card_img} src={data.image} />
      <div className={styles.card_info_wrapper}>
        <h2>{data.title}</h2>
        <p>{description}</p>
        <div className={styles.btn_readmore_wrapper}>
          <span onClick={showDescription} className={styles.btn_readmore}>
            {openDesc ? "Ausklappen" : "Mehr Lesen"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
