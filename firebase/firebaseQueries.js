import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import { app } from "./firebaseInit";

const db = getFirestore(app);

export const getProjects = async () => {
  const projectsCol = collection(db, "projects");
  const querySnapshot = await getDocs(projectsCol);
  const data = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  console.log(data);
  return data;
};
