# dsv-splitter
Split a delimiter separated values file into a set of smaller files

## command line
```
Options:
  -f, --file [value]       a file path
  -d, --delimiter [value]
  -l, --lines [value]      an integer
  -o, --output [value]     output directory
  -h, --help               output usage information
```

## require(d)
```
const {splitDSV} = require('../');

splitDSV( commander.file, commander.delimiter, commander.lines, commander.output );
```

