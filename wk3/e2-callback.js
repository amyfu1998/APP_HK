function greet(callback) {
    console.log('Hi!');
    var data = {
        name: 'DTD'
    };
    callback(data);
}
greet(data => {
    console.log('The callback was invoked!');
    console.log(data);
});