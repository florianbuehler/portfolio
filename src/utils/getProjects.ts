import { opendirSync } from 'fs';
import { join } from 'path';
import process from 'process';
import { Project } from '@components/sections';
import { getParsedFileContent } from './index';

const getProjects = () => {
  const projectsPath = join(process.cwd(), 'content/projects/other');

  const directory = opendirSync(projectsPath);
  const projects: Project[] = [];

  let file;
  while ((file = directory.readSync()) !== null) {
    const filePath = join(projectsPath, file.name);
    const project = getParsedFileContent<Project>(filePath);

    projects.push(project);
  }

  directory.closeSync();

  return projects;
};

export default getProjects;
