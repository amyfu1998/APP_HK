var greetSam = () =>console.log("hello~Sam");
var greetsomeone = name => console.log("hello~"+name);
var greetpeople = (name1,name2) =>console.log("hello~"+name1+" and "+name2);
var person1 = "Tom",person2 = "Sam";
greetSam();
greetsomeone(person1);
greetsomeone(person2);
greetpeople(person1,person2);