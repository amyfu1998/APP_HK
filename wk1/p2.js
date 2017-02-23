var greetMe = function(){
	console.log("Hello~Tom");
}
function logGreeting(fn){
	fn();
}
logGreeting(greetMe);
