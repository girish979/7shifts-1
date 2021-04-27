// function main() {
//   let str = "//***\n1***2***3";
//   Add(str);
// }
// main();

function Add(str) {
  var result = 0;
  if (!str || str === "") {
    return parseInt(result);
  }

  var delimiter = ","; //default

  //Determine custom Delimiter.
  if (str.substring(0, 2) == "//") {
    let n = str.indexOf("\n");
    delimiter = str.substring(2, n);
    str = str.substring(n + 1);
  }

  var lines = str.split("\n");

  for (var i = 0; i < lines.length; i++) {
    let nums = lines[i].split(delimiter);
    for (var j = 0; j < nums.length; j++) {
      let parsedNum = parseInt(nums[j]);
      if (parsedNum) {
        if (parsedNum < 0) throw `Negatives not allowed ${parsedNum}`;
        if (parsedNum > 1000) continue;
        result = result + parsedNum;
      }
    }
  }

  return parseInt(result);
}

module.exports = Add;
