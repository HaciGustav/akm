import axios from "axios";
import useAxios from "./useAxios";
import {
  fetchFail,
  fetchStart,
  getSuccess,
  stopLoading,
} from "@/redux/slices/settingsSlice";
import { useDispatch } from "react-redux";
import { toastErrorNotify, toastSuccessNotify } from "@/utils/ToastNotify";

const useApiCalls = () => {
  const { axiosWithToken, axiosInstance } = useAxios();

  const dispatch = useDispatch();

  const getAKMData = async (url, dataName) => {
    dispatch(fetchStart());
    let response = null;
    try {
      const { data } = await axiosInstance.get(url);
      dispatch(getSuccess({ data, dataName: dataName }));
      response = data;
    } catch (error) {
      dispatch(fetchFail({ message: "" }));
    } finally {
      dispatch(stopLoading());
    }
    return response;
  };

  const deleteAKMData = async (url) => {
    try {
      const { data } = await axiosInstance.delete(url);
      toastSuccessNotify("Data wurde erfolgreich gelöscht");
    } catch (error) {
      toastErrorNotify("Etwas ist schiefgelaufen");
    } finally {
      dispatch(stopLoading());
    }
  };

  const postAKMData = async (url, postData) => {
    try {
      const { data } = await axiosInstance.post(url, postData);
      toastSuccessNotify("Data wurde erfolgreich erstellt");
    } catch (error) {
      toastErrorNotify("error?.response?.data");
    } finally {
      dispatch(stopLoading());
    }
  };

  const getAnnouncements = () =>
    getAKMData("/api/announcements", "announcements");
  const getProjects = () => getAKMData("/api/projects", "projects");
  const getEvents = () => getAKMData("/api/events", "events");
  const getCourses = () => getAKMData("/api/courses", "courses");

  const deleteAnnouncement = (id) =>
    deleteAKMData("/api/announcement?id=" + id);
  const deleteProject = (id) => deleteAKMData("/api/project?id=" + id);
  const deleteEvent = (id) => deleteAKMData("/api/event?id=" + id);
  const deleteCourse = (id) => deleteAKMData("/api/course?id=" + id);

  const postAnnouncement = (data) => postAKMData("/api/announcement", data);
  const postProjects = (data) => postAKMData("/api/project", data);
  const postEvent = (data) => postAKMData("/api/event", data);
  const postCourse = (data) => postAKMData("/api/course", data);

  return {
    getAnnouncements,
    getProjects,
    getEvents,
    getCourses,
    deleteAnnouncement,
    deleteProject,
    deleteEvent,
    deleteCourse,
    postAnnouncement,
    postProjects,
    postEvent,
    postCourse,
  };
};
export default useApiCalls;
