// import nock from 'nock';
import fs from 'fs';
import os from 'os';
// import path from 'path';
import nock from 'nock';

import pageLoader from '../src';

const host = 'https://ru.hexlet.io/courses';
const fileName = 'ru-hexlet-io-courses.html';

const homedir = os.homedir();

test('default output dir', async () => {
  const pathToFile = `${process.cwd()}/${fileName}`;
  const result = await pageLoader(host);
  fs.unlinkSync(result);
  expect(result).toBe(pathToFile);
});

test('specified output dir', async () => {
  const pathToFile = `${homedir}/${fileName}`;
  const result = await pageLoader(host, homedir);
  fs.unlinkSync(result);
  expect(result).toBe(pathToFile);
});

test('check content file', async () => {
  const html = '<div>Hello world</div>';

  nock('https://ru.hexlet.io')
    .get('/courses')
    .reply(200, html);

  const path = await pageLoader(host, homedir);
  const test = fs.readFileSync(path, 'utf8');
  fs.unlinkSync(path);

  expect(test).toBe(html);
});
