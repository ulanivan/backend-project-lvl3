import makeProjectName from '../src/utils/makeProjectName';
import makeDirName from '../src/utils/makeDirName';

describe('utils module', () => {
  test('first test path', () => {
    const res = makeProjectName('https://ya.ru');
    expect(res).toBe('ya-ru');
  });

  test('second test path', () => {
    const res = makeProjectName('https://hexlet.io/courses');
    expect(res).toBe('hexlet-io-courses');
  });

  test('test make dir name', () => {
    const res = makeDirName('hexlet-io-courses');
    expect(res).toBe('hexlet-io-courses_files');
  });
});
