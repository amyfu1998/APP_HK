var person = {
    firstname : 'Big',
    lastname: 'Tree',
    greet: function(){
        console.log(`Hello,${this.firstname} ${this.lastname}`);
    }
};
person.greet();
console.log(person['firstname']);

let name, phone;
let info = {
    name,
    phone,
    printInfo(){
        console.log(`Name: ${this.name}, Phone: ${this.phone}`);      
    }
}
info.name = "ntue";
info.phone = "1231321";
info.printInfo();