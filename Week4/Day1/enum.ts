
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

console.log(testresults); */  //{ pass: 'passed', fail: 'failed', skip: 'skipped' }


//heterogeneous enum-both string and number

enum browserStatus{

    open,
    close="close",
    crash="crash",
    incoginto=78,

}

console.log(browserStatus);

/* {
  '0': 'open',
  '78': 'incoginto',
  open: 0,
  close: 'close',
  crash: 'crash',
  incoginto: 78
} */

