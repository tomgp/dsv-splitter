# dsv-splitter
Split a delimiter separated values file into a set of smaller files with values separated by the same delimeters.

The first line of the input file is assumed to be the column headings and is repeated at the top of each output file. (TODO, provide an options to not have this happen)

## command line
```
npm install -g dsv-splitter
```

```
Options:
  -f, --file [value]       a file path (required)
  -d, --delimiter [value]  (default value ',')
  -l, --lines [value]      an integer (default value 100)
  -o, --output [value]     output directory (default value your current working directory)
  -h, --help               output usage information
```
e.g. `dsvSplitter -f test-data/books.csv -o test-output/`
or `dsvSplitter --file giantSpreadSheet.tsv --delimiter "\t" --lines 1000`

## require(d)
```
const {splitDSV} = require('../');

splitDSV( commander.file, commander.delimiter, commander.lines, commander.output );
```

