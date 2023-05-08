import fs from 'fs';
import os from 'os';
import nock from 'nock';

import pageLoader from '../src';

const host = 'https://ya.ru';
const fileName = 'ya-ru.html';
const dirName = 'ya-ru_files';
let html = '';

const homedir = os.homedir();

beforeAll(() => {
  html = fs.readFileSync(`${__dirname}/__fixtures__/page.html`, 'utf8');
});

describe('check output dir', () => {
  test('default output dir', async () => {
    const dir = `${process.cwd()}/${dirName}`;
    const pathToFile = `${dir}/${fileName}`;

    nock(host)
      .get('/')
      .reply(200, html);

    const result = await pageLoader(host);
    fs.rmSync(dirName, { recursive: true, force: true });

    expect(result).toBe(pathToFile);
  });

  test('specified output dir', async () => {
    const dir = `${homedir}/${dirName}`;
    const pathToFile = `${dir}/${fileName}`;

    nock(host)
      .get('/')
      .reply(200, html);

    const result = await pageLoader(host, homedir);

    fs.rmSync(dir, { recursive: true, force: true });

    expect(result).toBe(pathToFile);
  });
});

describe('check content file', () => {
  test('first', async () => {
    nock(host)
      .get('/')
      .reply(200, html);

    const path = await pageLoader(host);
    const resHtml = fs.readFileSync(path, 'utf8');

    fs.rmSync(dirName, { recursive: true, force: true });

    expect(resHtml).toBe(html);
  });
});
