// import nock from 'nock';
import fs from 'fs';
// import path from 'path';
// import os from 'os';
import pageLoader from '../src';

const pathToPage = 'https://ru.hexlet.io/courses';
const fileName = 'ru-hexlet-io-courses.html';

// beforeEach(async () => {
//   const dtemp = await fs.mkdtemp(path.join(os.tmpdir(), 'page-loader-'), (_, dir) => {
//     console.log(dir);
//   });
//   return dtemp;
// });

// afterEach(() => {
// removeCreatedFiles();
// });

// test('default output dir', async () => {
//   const data = await pageLoader(pathToPage);
//   const pathToFile = `${process.cwd()}/${fileName}`;
//   expect(data).toBe(`${process.cwd()}/${fileName}`);
//   fs.unlinkSync(pathToFile);
// });

test('specified output dir', async () => {
  const outputDir = '/home/ulanivan';
  const pathToFile = `${outputDir}/${fileName}`;
  const result = await pageLoader(pathToPage, outputDir);
  fs.unlinkSync(result);
  expect(result).toBe(pathToFile);
});
