#! /usr/bin/env node

var yargs = require('yargs');

// var argv = yargs.count('a').alias('a', 'acount').argv;
// yargs
//   .usage('Usage: $0 -w [num] -h [num]')
//   .help("help")
//   .alias("help", "h")
//   .version()
//   .alias("version", "v")
//   .options({
//     "config": {
//       type: "string",
//       describe: "Path to the config file",
//       group: 'CONFIG_GROUP',
//       defaultDescription: "webpack.config.js or webpackfile.js",
//       requiresArg: true
//     },
//     "ingredient": {
//       type: 'string',
//       describe: 'choose your sandwich ingredients',
//       choices: ['peanut-butter', 'jelly', 'banana', 'pickles'],
//       alias: 'i'
//     }
//   }).epilog('copyright 2018').strict().argv;

// var argv = yargs.usage('Usage: $0 -w [num] -h [num]').demand(['w','h']).argv;
// console.log(argv);
// const parser = yargs
//   .command('lunch-train <restaurant>', 'start lunch train', function (yargs) {
//     return yargs.option('u', {
//       alias: 'url',
//       describe: 'the URL'
//     })
//   }, function (argv) {
//     console.log(argv);
//     console.log(argv.restaurant, argv.time)
//   })
//   .parse("lunch-train rudy's", {time: '12:15'});


//   yargs.parse(process.argv.slice(2), function(err, argv, output) {
//     console.log(err, argv, output);
//   });

// var argv = require('yargs')
//   .alias('i', 'ingredient')
//   .describe('i', 'choose your sandwich ingredients')
//   .choices('i', ['peanut-butter', 'jelly', 'banana', 'pickles'])
//   .help('help')
//   .argv

// yargs.command('get', 'make a get HTTP request', function (yargs) {
//   return yargs.option('u', {
//     alias: 'url',
//     describle: 'the URL to make an HTTP request to'
//   });
// }, function (argv) {
//   console.log(argv.url);
// }).help();

// yargs.showHelp();
