var s = 'A';
var sCode = s.charCodeAt(0);
document.getElementById("out1").innerHTML = sCode;
document.getElementById("out2").innerHTML = String.fromCharCode(sCode);
document.getElementById("out3").innerHTML = "+ " + spacesByCode(65) + "+";


//document.getElementById("result").innerHTML = "A</br>B&nbspB</br>C&nbsp&nbsp&nbspC</br>D&nbsp&nbsp&nbsp&nbsp&nbspD</br>E&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspE";


var output = [];
output.push("A</br>");

var numRows = sCode - 65;
var nextCharCode = 66;
var i;
for (i = 0; i < numRows; i++) {
    var thisChar = nextCharCode + i;
    output.push(String.fromCharCode(thisChar) + spacesByCode(thisChar) + String.fromCharCode(thisChar) + "<br/>");
}

// output now has A through requested. Now flip it.

for (i = output.length - 2; i >= 0; i--) {
  output.push(output[i]);
}

// if there's only row, put another A in there so is A-A not just A
if (output.length == 1) {
  output.push("A</br>");
}
document.getElementById("result").innerHTML = output.join("");



function spacesByCode(code) {
  var spaces = "";
  var numSpaces = code - 64;
  var j;
  for (j = 1; j < numSpaces; j++) {
    spaces += "&nbsp";
  }
  return spaces;
}
