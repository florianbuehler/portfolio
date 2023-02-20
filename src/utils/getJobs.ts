import { opendirSync } from 'fs';
import { join } from 'path';
import process from 'process';
import { Job } from 'components/sections';
import { getParsedFileContent } from './index';

const getJobs = async () => {
  const jobsPath = join(process.cwd(), 'content/jobs');

  const directory = opendirSync(jobsPath);
  const jobs: Job[] = [];

  let file;
  while ((file = directory.readSync()) !== null) {
    const filePath = join(jobsPath, file.name);
    const job = await getParsedFileContent<Job>(filePath);

    jobs.push(job);
  }

  directory.closeSync();

  return jobs;
};

export default getJobs;
