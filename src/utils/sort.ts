import { Job, Project } from 'types';

export const sortJobsByDate = (job1: Job, job2: Job) => {
  return -(Date.parse(job1.frontmatter.startDate) - Date.parse(job2.frontmatter.startDate));
};

export const sortProjectsByDate = (project1: Project, project2: Project) => {
  return -(Date.parse(project1.frontmatter.date) - Date.parse(project2.frontmatter.date));
};

export const sortProjectsByPosition = (project1: Project, project2: Project) => {
  if (!project1.frontmatter.position || !project2.frontmatter.position) {
    return 0;
  }

  return project1.frontmatter.position - project2.frontmatter.position;
};
