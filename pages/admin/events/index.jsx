import useApiCalls from "@/hooks/useApiCalls";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import css from "@/styles/projects.module.css";
import EventEditModal from "@/components/events_section/EventEditModal";

const EventEditCard = ({ data }) => {
  const router = useRouter();
  const { deleteEvent } = useApiCalls();
  const handleDelete = () => deleteEvent(data.id).then(() => router.reload());

  return (
    <div className={css.card_container}>
      <img className={css.card_img} src={data.image} />
      <div className={css.card_info_wrapper}>
        <h4>{data.title}</h4>

        <div className={css.btn_readmore_wrapper}>
          <span onClick={handleDelete} className={css.btn_delete}>
            Löschen
          </span>
        </div>
      </div>
    </div>
  );
};

const Events = () => {
  const [events, setEvents] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const { getEvents } = useApiCalls();

  useEffect(() => {
    getEvents().then((res) => setEvents(res));
  }, []);
  return (
    <section className={css.section_container}>
      <EventEditModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
      {events.map((item, index) => (
        <EventEditCard key={item.title + index} data={item} />
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

export default Events;
