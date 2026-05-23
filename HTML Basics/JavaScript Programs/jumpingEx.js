console.log('Jumping Statement:');
// for(let i=1;i<=10;i++){
//     console.log(i);
//     if(i==5){
//         console.log("condition reached!");
//         break; //stops
//     }
// }
// console.log('out of loop');

/*
for(let i=1;i<=10;i++){
    if(i==5 || i==7){
        console.log("condition reached!");
        continue; //skips current iteration
    }
    console.log(i);
}
console.log('out of loop');
*/

/*
let employees = ['John','Kiran','Wilson','Aqil'];
for(let i of employees){
    if(i=='Kiran'){
        console.log('Hello',i,', Salary and Bonus is Credited.');
        continue;
    }
    console.log('Hello',i,', Salary is Credited.');
}
*/

//switch case:
/*
let fan = 'On';
switch(fan){
    case 'On':
        console.log('Switch is On');
        break;
    case 'Off':
        console.log('Switch is Off');
        break
    default:
        console.log('Not Working');
}
*/

//Days of the Week Schedule:
/*
let day='Tuesday';
switch(day){
    case 'Sunday':
        console.log('It is Holiday!');
        break;
    case 'Monday':
        console.log('We have staff meeting.');
        break;
    case 'Tuesday':
        console.log('Today is Presentation.');
        break;
    case 'Saturday':
        console.log('Client Meeting.');
        break;
    default:
        console.log('No Schedule.'); 
        
}
*/

let emp = [{a:'one',b:'two'}, {a:'c',b:'d'}]//array of objects
for(let i of emp){
    console.log(i.a);
    
}











