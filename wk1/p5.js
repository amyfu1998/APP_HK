var a ='g_a';

var b ='g_b';

function A(){

	var a='A_a';

	console.log(`In function A :a=${a} , b=${b}`);

}

function B(){

	var a='B_a';

	var b='B_b';

	function C(){

		var a='C_a';

		console.log(`In function C :a=${a} , b=${b}`);

	}

	A();

	console.log(`In function B :a=${a} , b=${b}`);

	C();

}

console.log(`In global :a=${a} , b=${b}`);

B();
--------------------------------------------------
var aaa= 'juice';

var combine = () =>{

	var aaa;

	var bbb = 'apple';

	var ccc = bbb+' '+aaa;

	aaa = 'banana';

	console.log(ccc);

}

combine();