import { opendirSync } from 'fs';
import { join } from 'path';
import process from 'process';
import { Project } from 'types';
import { getParsedFileContent } from './index';

const getProjects = async () => {
  const projectsPath = join(process.cwd(), 'content/projects');

  const directory = opendirSync(projectsPath);
  const projects: Project[] = [];

  let file;
  while ((file = directory.readSync()) !== null) {
    const filePath = join(projectsPath, file.name);
    const project = await getParsedFileContent<Project>(filePath);

    projects.push(project);
  }

  directory.closeSync();

  return projects;
};

export default getProjects;
