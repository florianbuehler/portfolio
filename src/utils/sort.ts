import { Project } from 'types';

export const sortProjectsByDate = (project1: Project, project2: Project) => {
  return -(Date.parse(project1.frontmatter.date) - Date.parse(project2.frontmatter.date));
};

export const sortProjectsByPosition = (project1: Project, project2: Project) => {
  if (!project1.frontmatter.position || !project2.frontmatter.position) {
    return 0;
  }

  return project1.frontmatter.position - project2.frontmatter.position;
};
