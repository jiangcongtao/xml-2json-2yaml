# XML to json and YAML Convert Tool

Nick Jiang <congtao.jiang@outlook.com>

## Overview

The following features are supported:

- Convert `.xml` file to `.yaml`
- Convert `.xml` file to `.json`

## Usage

### Get Help

```bash
node index.js -h
```

e.g.

```bash
% node index.js -h
Usage: index.js -i <inXmlFile> [-o <outFile>] <--tojson --compact | --toyaml>

Options:
      --version  Show version number                                   [boolean]
      --tojson   Convert to json file for the XML file specified in "-i
                 <inXmlFile>"
      --compact  Convert to json file in compact mode. minified
      --toyaml   Convert to yaml file for the XML file specified in "-i
                 <inXmlFile>"
  -h, --help     Show help                                             [boolean]

Copyright (c) 2022, Nick Jiang<congtao.jiang@outlook.com>
```

### Convert `.xml` file to `.yaml`

```bash
node index.js -i ./a.xml --toyaml
node index.js -i ./a.xml --toyaml -o ./a.yaml
```

### Convert `.xml` file to `.json`

```bash
node index.js -i ./a.xml --tojson
node index.js -i ./a.xml --tojson -o ./a.json
```
