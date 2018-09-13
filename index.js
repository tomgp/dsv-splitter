const fs = require('fs');
const path = require('path');
const dsv = require('d3-dsv');

function splitDSV(file, delimiter=',', lines = 100, output=process.env.PWD){
  const inputFile = fs.readFileSync(file,'utf-8');
  const myDsv = dsv.dsvFormat(delimiter);
  const rows = myDsv.parse(inputFile);
  const fileExtension = path.extname(file);
  const fileName = path.basename(file, fileExtension);
  let i = 1;
  while(rows.length > 0){
    const chunk = rows.splice(0, Math.min(lines, rows.length));
    const outString = myDsv.format(chunk);
    const outPath = path.join(output, `${fileName}${i}${fileExtension}`);
    fs.writeFile(outPath, outString, ()=>{
      console.log(`written to ${outPath}`);
    });
    i++;
  }
}

module.exports = { splitDSV };
