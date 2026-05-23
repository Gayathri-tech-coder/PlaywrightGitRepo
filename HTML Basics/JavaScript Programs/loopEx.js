console.log('Loop')
// 1 to 5:
/*
for(let i=1;i<=5;i++){ //6<=5 F
    console.log(i);//1, 2, 3,4, 5,
}*/

//2,4,6,8,10,12
/*
for(let i=2;i<=12;i+=2){
    console.log(i);//2, 4, 6, 8, 10, 12
    
}*/

//5 to 1:
/*
for(let i=5;i>=1;i--){
    console.log(i);  
}
*/

//Multiplication Table:
/*
let n = 5;
for(let i=1;i<=12;i++){
    console.log(n,'x',i,'=',n*i);  
}*/


//Iteration in array:

let names=['John','Francis','Kiran','Dennis'];
/*
for(let i=0;i<names.length;i++){
    console.log("Hi",names[i]);
    
}*/

/*
for(let i=names.length-1;i>=0;i--){
    console.log('Bye',names[i]); 
}*/

//Add n natural numbers: n=5 , 1+2+3+4+5
/*
let n=5;
let add = 0;
for(let i=1;i<=n;i++){
    add+=i;//add=1,add=3, add=6
}
console.log("Addition of numbers:",add);
*/


//While loop:
/*
let i=1;
while(i<=5){
    console.log(i);//1, 2,3,4, 5
    i++;//i=2,3,4, 5, 6
}*/


//do..while:
/*
let i=1;
do{
    console.log(i);
    i++;
}while(i<=5);*/

//false condition:
/*
console.log('For loop:');
for(let i=1;i>=5;i++){
    console.log(i);
    
}
console.log('While loop:');
let j=1;
while(j>=5){
    console.log(j);
    j++;
}
console.log('Do..while loop:');
let k=1;
do{
    console.log(k);
    k++;
}while(k>=5);
*/

//for...in loop:
/*
const employee = {empName:'John',department:'IT',salary:45000};
for(let i in employee){
    console.log(i,':',employee[i]);   
}*/

//for..of loop:
/*
let students = ['John','Kiran','Wilson','Aqil'];
for(let i of students){
    console.log(i);
}*/

//for..each loop:
/*
let a=[10,20,30,40]
a.forEach(i=>console.log(i));
*/
