//Synchro : line by line
/*
console.log("one");
console.log("Two");
console.log("Three");
*/

//asynchro : I/O operatoions, network, etc.
//setTimeout():
/*setTimeout(()=> console.log("Display!!!"),2000);//2 sec
console.log("hi");
console.log("hello");
console.log("bye");
*/

/*
console.log("Asynchronization");
console.log("Hi-1");
const i = setInterval(() => {
        console.log("hi-2");
}, 1000);

console.log("hi-3");
//clear interval
setTimeout(()=>{
    clearInterval(i);
},5000);
*/

//Callbacks:
/*
function insert(employee){
    return `Employee : ${employee} is inserted`;
}

function remove(employee){
    return `Employee : ${employee} is removed`;
}
function employees(empName, op){
    return op(empName)+'  Successfully!'
}
console.log(employees("John", insert));
console.log(employees("Kiran", remove));
*/

//Callbacks in Asynchronization:

function operation(callback){
    console.log("Operation started...");
    setTimeout(()=>{
        callback("Operation Done!")
    },3000);
}
function report(result){
    console.log("Status : ",result);
}
operation(report);


