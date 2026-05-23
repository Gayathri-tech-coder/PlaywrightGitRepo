console.log('Functions:');

//let : allows to assign diff values , var : allows to assign and declare, const : not allows to assign or declare

/*const name='Kiran';//name='Kiran'
console.log('Name before function:',name);
function welcome(){
   const name='John';
    console.log('Hello',name,',Welcome to my function!');
}
name='Dennis';
console.log('Name out of function:',name);

//call
welcome();
console.log('other lines..');
*/

//Parameterized functions
/*
function welcome(studentName){
    console.log('Hello ',studentName,',Welcome to SLA!');
}

function welcome(studentName, course){
    console.log('Hello ',studentName,',Welcome to SLA!','Course:',course);
}

welcome("John");
welcome("Kiran");
*/
/*
display();
function display(){
    console.log('This is display!');
}*/

//Addition of two values:
/*
function add(n1,n2){
    console.log(n1+n2);
}

add(90,23);
add(56,6756);

function greatest(a,b){
    if(a>b){
        console.log(a,'is greater than',b);
    }else{
        console.log(b,'is greater than',a);
        
    }
}
greatest(23,56);
*/

/*

let add = function(a,b){
    console.log(a+b);
    
}
add(10,20);
*/

//Arrow functions:
/*
let add = (a,b)=>{
    console.log(a+b);
}
add(45,20);

let display = ()=>{
    console.log("Display called!");
}
display();


let sum = (a,b) => a+b;
console.log(sum(34,56));
console.log(sum(89,45));

//even or odd:
let evenOdd = (a)=> a%2==0
console.log(evenOdd(20));
*/

//Return : returns value to function call:
/*
function total(m1,m2,m3){
    // console.log(m1+m2+m3);
    return m1+m2+m3;
}

function average(total){
    return total/3;
    
}
let t = total(89,80,90);//t=total value
console.log('Total : ',t);
let avg = average(t);
console.log('Average : ',avg);
*/

//return multiple values:
/*
function courses(){
    let c1 = 'Java', c2='Testing';
    return {c1,c2};
}
let {c1,c2} = courses();
console.log(c1,c2);
*/

//Array functions:
/*
let a = [1,2,3,4,5]; //LIFO (stack)
a.push(12); 
console.log(a);
a.pop();
console.log(a);
a.unshift(45);
console.log(a);
a.shift();
console.log(a);
// console.log(a[0]);
// delete a[0];
// console.log(a[0]);

console.log(a);
a.splice(2,1);
console.log(a);
*/

//template literals:
/*
const student = {name:'John',age:30};
// console.log('Student Name:',student.name,',Age:',student.age);
console.log(`Name : ${student.name} , Age: ${student.age}`);
*/

//map(): creates new array by applying function to each element
/*
let  n = [1,2,3,4,5];
let a = n.map(i=>i*2);
console.log(a);

const employees = [
    {empName : 'John', department:'IT'},
    {empName : 'Kiran', department:'Sales'},
    {empName : 'Dennis', department:'IT'},
]
const e = employees.map(a=>`Name: ${a.empName}, Department: ${a.department}`);
console.log(e[0]);
*/

//Filter() : creates new array based on conditions
const n = [100,34,78,9,23,60,45];
const even  = n.filter(a=> (a%2==0));
console.log(
    even
);



































