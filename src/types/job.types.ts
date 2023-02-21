import { MDXRemoteSerializeResult } from 'next-mdx-remote';

export type Job = {
  frontmatter: {
    title: string;
    company: string;
    startDate: string;
    endDate: string;
    location: string;
    url: string;
  };
  html: MDXRemoteSerializeResult;
};
