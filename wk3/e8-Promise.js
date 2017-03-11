//Promise-1
let promise = new Promise((resolve, reject)=>{
   resolve();
});

promise.then(()=>{
   console.log('Work is finished!!');
});
promise.catch(()=>{
   console.log('uh oh!');
});


//Promise-2
let promise = new Promise((resolve, reject)=>{
   resolve();
});
promise
   .then(()=>console.log('Work is finished!!'))
   .then(()=>console.log('Again finished!'));


//Promise-3
let promise = new Promise((resolve, reject)=>{
   resolve();
});
promise
   .then(()=>console.log('Work is finished!!'))
   .then(()=>console.log('Again finished!'))
   .catch(()=>console.log('uh oh!'));