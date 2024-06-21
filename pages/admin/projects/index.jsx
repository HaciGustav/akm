import axios from "axios";
import React, { useEffect } from "react";

const ProjectsEdit = () => {
  const testApi = async () => {
    try {
      const { data } = await axios.post(
        "http://localhost:3000/api/projects/post",
        {
          name: "asdasdasdadasd",
        }
      );
      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    testApi();
  }, []);

  return <div>ProjectsEdit</div>;
};

export default ProjectsEdit;
