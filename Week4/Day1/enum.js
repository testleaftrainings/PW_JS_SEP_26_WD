"use strict";
//enum-named constant
//by default it is number enum
/* enum browserStatus{

    open,
    closed,
    crashed=-78,
    incoginto
}

console.log(browserStatus); */
//string enum
/* enum testresults{

    pass="passed",
    fail="failed",
    skip="skipped"
}

console.log(testresults); */ //{ pass: 'passed', fail: 'failed', skip: 'skipped' }
//heterogeneous enum-both string and number
var browserStatus;
(function (browserStatus) {
    browserStatus[browserStatus["open"] = 0] = "open";
    browserStatus["close"] = "close";
    browserStatus["crash"] = "crash";
    browserStatus[browserStatus["incoginto"] = 78] = "incoginto";
})(browserStatus || (browserStatus = {}));
console.log(browserStatus);
/* {
  '0': 'open',
  '78': 'incoginto',
  open: 0,
  close: 'close',
  crash: 'crash',
  incoginto: 78
} */
