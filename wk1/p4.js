var v1 ,v;
let l1 ,l;
v=v1='10';
l=l1="38";
function test(){
  var v1 = '4';
  let l1 = '7';
  console.log(`In function: v1=${v1} ,l1=${l1}`);
}
function compare(){
  if(v1 ==v){
    if(l1 ==l)console.log(`var and let no change`);
    else console.log(`var no change ,but let is change`);
  }else{
    if(l1 ==l)console.log(`let no change ,but var is change`);
    else console.log(`var and let are change`);
  }
}
console.log(`Before function: v1=${v1} ,l1=${l1}`);
test();
console.log(`After function: v1=${v1} ,l1=${l1}`);
compare();
if(v1 <= l1){
  var v1 = '46';
  let l1 = '52';
  console.log(`In if: v1=${v1} ,l1=${l1}`);
}
console.log(`After if: v1=${v1} ,l1=${l1}`);
compare();