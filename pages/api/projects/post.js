// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { getProjects } from "@/firebase/firebaseQueries";

export default async function handler(req, res) {
  const projects = await getProjects();
  res.status(200).json(projects);
}
