// get value A
let a = parseInt($('#inputA').val())
// get value B
let b = parseInt($('#inputB').val())




$("#mult").on("click", function(){
  multiply();
});



function multiply(){
  // get value A
  let a = parseInt($('#inputA').val())
  // get value B
  let b = parseInt($('#inputB').val())

  //  calculate A*B and save into C
  let c = a * b;
  console.log(c);
  // display result in result
}

function add(){
  //  calculate A+B and save into C
  let c = (a+b);
  console.log(c);
  // display result in result
}

function sub(){
  //  calculate A-B and save into C
  let c = a - b;
  console.log(c);
  // display result in result
}

function div(){
  //  calculate A/B and save into C
  let c = a / b;
  console.log(c);
  // display result in result
}
