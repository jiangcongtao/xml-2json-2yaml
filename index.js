'use strict';

const fs = require('fs');
const YAML = require('js-yaml');
const parser = require('xml2json');
const chalk = require('chalk');
const { exit } = require('process');
let log = console.log;

let argv = require('yargs')
  .usage(
    'Usage: $0 -i <inXmlFile> [-o <outFile>] <--tojson --compact | --toyaml>'
  )
  .describe(
    'tojson',
    'Convert to json file for the XML file specified in "-i <inXmlFile>"'
  )
  .describe('compact', 'Convert to json file in compact mode. minified')
  .describe(
    'toyaml',
    'Convert to yaml file for the XML file specified in "-i <inXmlFile>"'
  )
  .help('h')
  .alias('h', 'help')
  .epilog('Copyright (c) 2022, Nick Jiang<congtao.jiang@outlook.com>').argv;

// log({ argv });
let { i: inXmlFile, o: outFile, tojson, compact, toyaml } = argv;

if (!inXmlFile) {
  log(chalk.red(`-i <inXmlFile> is missing!`));
  exit(-1);
}

try {
  if (!tojson && !toyaml) {
    log(chalk.red(`Error: --tojson or --toyaml must be specified!`));
    exit(-1);
  }

  let fileContents = fs.readFileSync(inXmlFile, 'utf8');
  let jsonStr = parser.toJson(fileContents);
  let jsonObj = JSON.parse(jsonStr);

  // to JSON
  if (tojson) {
    if (compact) {
      jsonStr = JSON.stringify(jsonObj);
    } else {
      jsonStr = JSON.stringify(jsonObj, null, 2);
    }
    if (outFile) {
      fs.writeFileSync(outFile, `${jsonStr}`, 'utf8');
      log(chalk.green(`Done writing to ${outFile}!`));
    } else {
      log(jsonStr);
    }
  }

  // to YAML
  if (toyaml) {
    let yamlStr = YAML.dump(jsonObj, {quotingType:'"'});
    if (outFile) {
      fs.writeFileSync(outFile, `---\n${yamlStr}`, 'utf8');
      log(chalk.green(`Done writing to ${outFile}!`));
    } else {
      log(yamlStr);
    }
  }
} catch (e) {
  console.log(e);
}
