import fs from 'fs';
import os from 'os';
import nock from 'nock';

import pageLoader from '../src';

const host = 'https://ya.ru';
const fileName = 'ya-ru.html';
const html = '<div>Hello world</div>';

const homedir = os.homedir();

test('default output dir', async () => {
  const pathToFile = `${process.cwd()}/${fileName}`;

  nock(host)
    .get('/')
    .reply(200, html);

  const result = await pageLoader(host);
  fs.unlinkSync(result);
  expect(result).toBe(pathToFile);
});

test('specified output dir', async () => {
  const pathToFile = `${homedir}/${fileName}`;

  nock(host)
    .get('/')
    .reply(200, html);

  const result = await pageLoader(host, homedir);
  fs.unlinkSync(result);
  expect(result).toBe(pathToFile);
});

test('check content file', async () => {
  nock(host)
    .get('/')
    .reply(200, html);

  const path = await pageLoader(host, homedir);
  const test = fs.readFileSync(path, 'utf8');
  fs.unlinkSync(path);

  expect(test).toBe(html);
});
