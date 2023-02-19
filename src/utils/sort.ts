import { Project } from 'types';

export const sortProjects = (project1: Project, project2: Project) => {
  return -(Date.parse(project1.frontmatter.date) - Date.parse(project2.frontmatter.date));
};
