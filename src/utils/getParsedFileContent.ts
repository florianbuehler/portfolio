import * as fs from 'fs';
import matter from 'gray-matter';

type FileContent = {
  frontmatter: {
    [key in string]: string | string[] | boolean | number;
  };
  content: string;
};

const getParsedFileContent = <C extends FileContent>(filePath: string) => {
  const fileContent = fs.readFileSync(filePath);

  const { data: frontmatter, content } = matter(fileContent);

  return {
    frontmatter,
    content
  } as C;
};

export default getParsedFileContent;
