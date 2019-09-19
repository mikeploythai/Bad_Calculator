var firstNum = "";
var secondNum = "";
var input = true;
var val = "";
var screenText = "";
var cmd = "";
var ans;

// User input
function trueTxt() {
  firstNum = firstNum + val;
  setText("calcArea", screenText + firstNum);
}

function falseTxt() {
  secondNum = secondNum + val;
  setText("calcArea", screenText + secondNum);
}

function getVal() {
  if(input == true) {
    trueTxt();
  } else {
    falseTxt();
  }
}

// Buttons
onEvent("one", "click", function() {
  val = 1;
  getVal();
});

onEvent("two", "click", function() {
  val = 2;
  getVal();
});

onEvent("three", "click", function() {
  val = 3;
  getVal();
});

onEvent("four", "click", function() {
  val = 4;
  getVal();
});

onEvent("five", "click", function() {
  val = 5;
  getVal();
});

onEvent("six", "click", function() {
  val = 6;
  getVal();
});

onEvent("seven", "click", function() {
  val = 7;
  getVal();
});

onEvent("eight", "click", function() {
  val = 8;
  getVal();
});

onEvent("nine", "click", function() {
  val = 9;
  getVal();
});

onEvent("zero", "click", function() {
  val = 0;
  getVal();
});

// Commands
onEvent("plus", "click", function() {
  input = false;
  cmd = "plus";
  screenText = firstNum + "+";
  setText("calcArea", screenText);
});

onEvent("minus", "click", function() {
  input = false;
  cmd = "minus";
  screenText = firstNum + "-";
  setText("calcArea", screenText);
});

onEvent("times", "click", function() {
  input = false;
  cmd = "times";
  screenText = firstNum + "*";
  setText("calcArea", screenText);
});

onEvent("divide", "click", function() {
  input = false;
  cmd = "divide";
  screenText = firstNum + "/";
  setText("calcArea", screenText);
});

onEvent("equal", "click", function() {
  if(cmd == "plus") {
    ans = firstNum + secondNum;
  } if(cmd == "minus") {
    ans = firstNum - secondNum;
  } if(cmd == "times") {
    ans = firstNum * secondNum;
  } if(cmd == "divide") {
    ans = firstNum / secondNum;
  }
  setText("calcArea", ans);
});

onEvent("clear", "click", function() {
  setText("calcArea", "");
  screenText = "";
  firstNum = "";
  secondNum = "";
  input = true;
});