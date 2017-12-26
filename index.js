function getValue0() {
	document.calci.output.value += "0";
}

function getValue1() {
	document.calci.output.value += "1";
}

function getValue2() {
	document.calci.output.value += "2";
}

function getValue3() {
	document.calci.output.value += "3";
}

function getValue4() {
	document.calci.output.value += "4";
}

function getValue5() {
	document.calci.output.value += "5";
}

function getValue6() {
	document.calci.output.value += "6";
}

function getValue7() {
	document.calci.output.value += "7";
}

function getValue8() {
	document.calci.output.value += "8";
}

function getValue9() {
	document.calci.output.value += "9";
}

function doAdd() {
	document.calci.output.value += "+";
}

function doSub() {
	document.calci.output.value += "-";
}

function doMulti() {
	document.calci.output.value += "*";
}

function doDiv() {
	document.calci.output.value += "/";
}

function getDot() {
	document.calci.output.value += ".";
}

function evalu() {
	var result = eval(document.calci.output.value);
	document.calci.output.value = result;
}

function doClear() {
	document.calci.output.value = '';
}