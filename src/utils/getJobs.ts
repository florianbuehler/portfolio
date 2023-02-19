import { opendirSync } from 'fs';
import { join } from 'path';
import process from 'process';
import { Job } from 'components/sections';
import { getParsedFileContent } from './index';

const getJobs = () => {
  const jobsPath = join(process.cwd(), 'content/jobs');

  const directory = opendirSync(jobsPath);
  const jobs: Job[] = [];

  let file;
  while ((file = directory.readSync()) !== null) {
    const filePath = join(jobsPath, file.name);
    const job = getParsedFileContent<Job>(filePath);

    jobs.push(job);
  }

  directory.closeSync();

  return jobs;
};

export default getJobs;
