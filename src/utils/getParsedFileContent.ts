import * as fs from 'fs';
import matter from 'gray-matter';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';

type FileContent = {
  frontmatter: {
    [key in string]: string | string[] | boolean | number;
  };
  html: MDXRemoteSerializeResult;
};

const getParsedFileContent = async <C extends FileContent>(filePath: string) => {
  const fileContent = fs.readFileSync(filePath);

  const { data: frontmatter, content } = matter(fileContent);

  const html = await serialize(content || '');

  return {
    frontmatter,
    html
  } as C;
};

export default getParsedFileContent;
