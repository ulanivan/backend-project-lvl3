// import nock from 'nock';
import fs from 'fs';
import os from 'os';
// import path from 'path';
import pageLoader from '../src';

const pathToPage = 'https://ru.hexlet.io/courses';
const fileName = 'ru-hexlet-io-courses.html';

const homedir = os.homedir();

test('default output dir', async () => {
  const pathToFile = `${process.cwd()}/${fileName}`;
  const result = await pageLoader(pathToPage);
  fs.unlinkSync(result);
  expect(result).toBe(pathToFile);
});

test('specified output dir', async () => {
  const pathToFile = `${homedir}/${fileName}`;
  const result = await pageLoader(pathToPage, homedir);
  fs.unlinkSync(result);
  expect(result).toBe(pathToFile);
});
