// import nock from 'nock';
// import fs from 'fs';
// import path from 'path';
// import os from 'os';
import pageLoader from '../src';

const pathToFile = 'https://ru.hexlet.io/courses';
const fileName = 'ru-hexlet-io-courses.html';

beforeEach(async () => {
  // nock(pathToFile)
  //   .get('/')
  //   .reply(200, 'HTML CONTENT');

  // const pathToDir = await fs.mkdtemp(path.join(os.tmpdir(), 'page-loader-'));
  // const rmdir = await fs.rmdir(pathToDir);
  // const pathToLoadedFile = pageLoader(pathToFile);
  // const res = await fs.readFile(pathToLoadedFile, 'utf-8');
});

test('default output dir', async () => {
  const data = await pageLoader(pathToFile);
  expect(data).toBe(`${process.cwd()}/${fileName}`);
});

test('specified output dir', async () => {
  const outputDir = '/var/tmp';
  const data = await pageLoader(pathToFile, outputDir);
  expect(data).toBe(`${outputDir}/${fileName}`);
});
