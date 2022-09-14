<h1 align="center">
  Portfolio
</h1>

<p align="center">
    <a style="text-decoration: none" href="https://www.gatsbyjs.com/" alt="Gatsby">
        <img src="https://img.shields.io/badge/framework-Gatsby-7026b9" />
    </a>
    <a style="text-decoration: none" href="https://www.typescriptlang.org/" alt="TypeScript">
        <img src="https://img.shields.io/badge/language-TypeScript-3178c6" />
    </a>
    <a style="text-decoration: none" href="https://styled-components.com/" alt="Styled Components">
        <img src="https://img.shields.io/badge/styling-Styled_Components-dd6f93" />
    </a>
    <a style="text-decoration: none" href="https://eslint.org/" alt="Eslint">
        <img src="https://img.shields.io/badge/linter-ESLint-4a31c3" />
    </a>
    <a style="text-decoration: none" href="https://prettier.io/" alt="Prettier">
        <img src="https://img.shields.io/badge/code_style-Prettier-ff69b4" />
    </a>
</p>

The second iteration of my personal portfolio.


## 🚀 Getting started

If you want to play around with the code yourself - feel free to do so 🧑🏻‍💻. First clone the project using
```shell script
git clone https://github.com/florianbuehler/portfolio.git
```
(or alternatively using SSH and `git@github.com:florianbuehler/portfolio.git`) and then navigate into the root folder of the project and run
```shell script
npm install
```
to install the required packages into the `node_modules` folder.


## 🔧 Development

Start the development server with hot reload configured with
```shell script
npm run start
```
or
```shell script
npm run develop
```
and then navigate to `http://localhost:8000` in your browser to view the latest changes.

**Note**: You'll also see a second link: `http://localhost:8000/___graphql`. This is a tool you can use, to experiment with querying your data. If you are interested, you can learn more about it in the [Gatsby Tutorial](https://www.gatsbyjs.com/docs/tutorial/part-4/#use-graphiql-to-explore-the-data-layer-and-write-graphql-queries).

To help ensuring some basic formatting and code quality standards, the project has prettier and eslint configured. That's why you can simply use
```shell script
npm run eslint
```
to see if the code matches the standards and run
```shell script
npm run fix-eslint
```
to let eslint fix it automatically where possible.


## 💫 Deployment

Build an optimized and production ready version of the website with
```shell script
npm run build
```
The production build is located in the *./public* directory and can be served by running
```shell script
npm run serve
```
