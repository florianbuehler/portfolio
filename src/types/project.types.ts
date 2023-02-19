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
  content: string;
};
