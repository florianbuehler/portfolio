export type Project = {
  frontmatter: {
    title: string;
    date: string;
    github?: string;
    external?: string;
    tech: string[];
    showInProjects: boolean;
    company?: string;
  };
  content: string;
};
