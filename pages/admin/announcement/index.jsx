import useApiCalls from "@/hooks/useApiCalls";
import React, { useEffect, useState } from "react";
import css from "@/styles/projects.module.css";
import { useRouter } from "next/router";
import AnnouncementEditModal from "@/components/announcements-comps/AnnouncementEditModal";

const AnnouncementEditCard = ({ data }) => {
  const router = useRouter();
  const { deleteAnnouncement } = useApiCalls();
  const handleDelete = () => deleteAnnouncement(data.id);

  return (
    <div className={css.card_container}>
      <img className={css.card_img} src={data.image} />
      <div className={css.card_info_wrapper}>
        {/* <h4>{data.title}</h4> */}

        <div className={css.btn_readmore_wrapper}>
          <span onClick={handleDelete} className={css.btn_delete}>
            Löschen
          </span>
        </div>
      </div>
    </div>
  );
};

const Announcements = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const { getAnnouncements } = useApiCalls();
  useEffect(() => {
    getAnnouncements().then((res) => setAnnouncements(res));
  }, []);

  return (
    <section className={css.section_container}>
      <AnnouncementEditModal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
      />
      {announcements.map((item, index) => (
        <AnnouncementEditCard key={item.title + index} data={item} />
      ))}
      <div
        className={css.card_container_new}
        onClick={() => setModalOpen(true)}
      >
        <div className={css.card_info_wrapper}>
          <h4>Neu Hinzufügen</h4>

          <div className={css.btn_readmore_wrapper}></div>
        </div>
      </div>
    </section>
  );
};

export default Announcements;
