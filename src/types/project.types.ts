import { MDXRemoteSerializeResult } from 'next-mdx-remote';

export type Project = {
  frontmatter: {
    date: string;
    title: string;
    coverUrl?: string;
    github?: string;
    external?: string;
    tech: string[];
    showInProjects: boolean;
    featured?: boolean;
    position?: number;
    company?: string;
  };
  html: MDXRemoteSerializeResult;
};
