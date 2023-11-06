var age = 12;
var accompanied /* у супроводі */ = true;

var allowed /* дозволено */ = (age >= 13) || ((age < 13) && accompanied);
allowed;

var age = 13;
var accompanied = false;
allowed;

var age = 12;
var accompanied = false;
allowed;