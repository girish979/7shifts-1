// function main() {
//   let str = "//@\n-2@3@8";
//   Add(str);
// }
// main();

function Add(str) {
  var result = 0;
  var customDelimiter = false;
  if (!str || str === "") {
    return parseInt(result);
  }

  var delimiter = ","; //default

  //Determine custom Delimiter.
  if (str.substring(0, 2) == "//") {
    let n = str.indexOf("\n");
    let delimiterString = str.substring(2, n);
    delimiter = delimiterString.split(",");
    str = str.substring(n + 1);
    customDelimiter = true;
  }

  var lines = str.split("\n");
  const getRegExp = (delimiters) =>
    new RegExp("[" + delimiters.join("|") + "]");

  for (var i = 0; i < lines.length; i++) {
    let nums;
    if (customDelimiter) nums = str.split(getRegExp(delimiter));
    else nums = lines[i].split(delimiter);

    for (var j = 0; j < nums.length; j++) {
      let parsedNum = parseInt(nums[j]);
      if (parsedNum) {
        if (parsedNum < 0) throw (`Negatives not allowed ${parsedNum}`);
        if (parsedNum > 1000) continue;
        result = result + parsedNum;
      }
    }
  }

  return parseInt(result);
}

module.exports = Add;
