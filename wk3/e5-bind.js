//bind-1
var person1 = {
    firstname:'Small',
    lastname:'Black',
    getFullName: function(){
        var fullname = this.firstname+' '+this.lastname;
        return(fullname);
    }
}
var logName = function(){
    console.log('logged: '+this.getFullName());
}
var logPersonName = logName.bind(person1);
logPersonName();

//bind-2
let greet = function(fn){
    fn();
};
let person2 = {
    name:'Dog',
    hello: function(){
        console.log(`Hello ${this.name}`);
    },
    sayHello: function(){
        greet(this.hello);
    }
};
person2.sayHello();

//bind-3
let greet2 = function(fn){
    fn();
};
let newPerson = {
    name:'Dog',
    sayHello: function(){
        greet2(
            ()=>console.log(`Hello ${this.name}`)
        );
    }
};
newPerson.sayHello();