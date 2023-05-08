import fs from 'fs';
import axios from 'axios';

import makeProjectName from './utils/makeProjectName';
import makeDirName from './utils/makeDirName';

const fsPromises = fs.promises;

const pageLoader = (pathToPage, outputDir = process.cwd()) => {
  const projectName = `${makeProjectName(pathToPage)}`;
  const fileName = `${projectName}.html`;
  const allPathToNewDir = `${outputDir}/${makeDirName(projectName)}`;
  const pathToLoadedFile = `${allPathToNewDir}/${fileName}`;

  return axios.get(pathToPage)
    .then(({ data }) => fsPromises.mkdir(allPathToNewDir)
      .then(() => fsPromises.writeFile(pathToLoadedFile, data)))
    .then(() => pathToLoadedFile);
};

export default pageLoader;
