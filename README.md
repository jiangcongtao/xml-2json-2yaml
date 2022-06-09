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

## MIT License

(The MIT License)

Copyright (c) 2022, Nick Jiang <congtao.jiang@outlook.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
