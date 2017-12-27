function doAdd() {
	dispOperator("+");
}

function doSub() {
	dispOperator("-");
}

function doMulti() {
	dispOperator("*");
}

function doDiv() {
	dispOperator("/");
}

function getValue(value) {
	if (document.calci.equalsClicked.value == "true") {
		document.calci.output.value = value;
		document.calci.equalsClicked.value = "false";
	} else {
		document.calci.output.value += value;
	}
}

function evalu() {
	document.calci.equalsClicked.value = "true";
	var result = eval(document.calci.output.value);
	document.calci.output.value = result;
	document.calci.storedNum.value = '';
}

function doClear() {
	document.calci.output.value = '';
	document.calci.storedNum.value = '';
}

function dispOperator(operator) {
	var output = document.calci.output.value;
	var lastChar = output.substring(output.length - 1);
	var operatorPresent = false;
	document.calci.equalsClicked.value = "false";
	if (lastChar.indexOf('+') != -1) {
		operatorPresent = true;
	} else if (lastChar.indexOf('-') != -1) {
		operatorPresent = true;
	} else if (lastChar.indexOf('*') != -1) {
		operatorPresent = true;
	} else if (lastChar.indexOf('/') != -1) {
		operatorPresent = true;
	}
	if (operatorPresent == false) {
		document.calci.output.value += operator;
	}
	document.calci.storedNum.value = output + operator;
}

function clEntry() {
	var output = document.calci.output.value;
	var lastChar = output.substring(document.calci.storedNum.value.length - 1);
	if (lastChar.indexOf('+') != -1) {
		output = output.substring(0, document.calci.storedNum.value.length);
	} else if (lastChar.indexOf('-') != -1) {
		output = output.substring(0, document.calci.storedNum.value.length);
	} else if (lastChar.indexOf('*') != -1) {
		output = output.substring(0, document.calci.storedNum.value.length);
	} else if (lastChar.indexOf('/') != -1) {
		output = output.substring(0, document.calci.storedNum.value.length);
	} else {
		output = document.calci.storedNum.value;
	}
	document.calci.output.value = output;
}