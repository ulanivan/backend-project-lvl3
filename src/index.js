import fs from 'fs';
import axios from 'axios';

const fsPromises = fs.promises;

const makeFileName = (path) => {
  const { hostname, pathname } = new URL(path);
  return `${hostname}${pathname}`.replace(/[^a-zA-Z0-9]/g, '-');
};

const pageLoader = (pathToPage, outputDir = process.cwd()) => {
  const pathToLoadedFile = `${outputDir}/${makeFileName(pathToPage)}.html`;
  return axios.get(pathToPage)
    .then(({ data }) => fsPromises.writeFile(pathToLoadedFile, data)
      .then(() => pathToLoadedFile));
};

export default pageLoader;
