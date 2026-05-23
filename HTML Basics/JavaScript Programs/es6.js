//default arguments
/*
function myfun(name, age, phone="NA"){
    console.log(`Name is ${name}, Age is ${age}`);
    console.log('Phone to Contact ', phone);
}
myfun("John",20);// default value for phone ="NA"
myfun('Kiran',23,9898778786);
*/

//Destructure in array
let employees = ["John","Kiran","Hema","Dennis","Wilson"];
console.log(employees);
let [e1,e2,e3,e4,e5] = employees;
console.log(e1);//John
let [emp1,,,emp4,emp5]=employees;
console.log(emp4);

//String Methods:
/*
let welcome = "welcome to SLA! I am learning JS. SLA is a good place to learn."
console.log(welcome.at(4));//o
console.log(welcome.concat("Studying..."));//Join/merge
console.log(welcome);
console.log(welcome.endsWith("JS."));//true
console.log(welcome.includes("SLA! I am"));//true
console.log(welcome.indexOf("learning"));// l starts at index 21
console.log(welcome.indexOf("SLA"));//first occurrence
console.log(welcome.lastIndexOf("SLA"));//last occurrence
console.log(welcome.length);//no. of characters including spaces
console.log(welcome.replace("SLA", "Softlogic"));//first occurrence
console.log(welcome.replaceAll("SLA", "Softlogic")); //all occurrences
console.log(welcome.startsWith("welcome"));
console.log(welcome.toLowerCase());
console.log(welcome.toUpperCase());
*/



/*
let words = welcome.split(' ');
console.log(words);
let [w1,...w3] = words;
console.log("Word is ",w3);//w3 : to SLA! ..... (w1=welcome word i.e. first word)
*/



//Spread and Rest Operators:
let emp = ["John","Kiran","Hema","Dennis","Wilson"];
let newEmp = [...emp,"Lalitha","Francis"]; //...var - spread : array into single object
console.log(newEmp);

function add(...a){ //a[] - rest : variable stores array of data
    console.log(a); //a=[10,20,30,40,50]
    let sum = 0;
    for(i of a){
        sum+=i;
    }
    console.log("Addition ",sum);
}
add(10,20,30,40,50);













