#!/usr/bin/env node
import program from 'commander';
import pageLoader from '..';

program
  .version('1.0.0')
  .description('Page loader utility.')
  .arguments('<url>')
  .option('-o, --output [dir]', 'output dir (default: "/home/user/current-dir")')
  .action((pathToPage) => {
    pageLoader(pathToPage, program.opts().output);
  })
  .parse(process.argv);
