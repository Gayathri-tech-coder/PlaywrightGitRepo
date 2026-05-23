//simple if:
// let a=10,b=5;
// console.log("before condition...");
// if(a<b){//10<5 F
//     console.log("inside if");// will not execute
// }
// console.log("out of if...");


//Nested if:
/*
let a=100,b=30,c=56;
if(a<b){ //100<30 F
    console.log("inside if-1");//not
    if(b<c){//30<56 T
        console.log("inside if-2"); // not executed
        if(a<c){ //100>56 T
            console.log("inside if-3");// not executed 
        }
        console.log("out of if-3");//not executed
    }
    console.log("out of if-2");//not
}
console.log("out of if-1");
*/

//if...else:
/*
let x=78,y=90;
if(x>y){//78>90 F
    console.log("inside if");
    console.log(x," is greater than ",y);
}
else{
    console.log("inside else");
    console.log(y," is greater than ",x);  
}

*/

//greatest among three numbers
let i=90, j=95, k=30;
if((i>j)&&(i>k)){
    console.log("If:",i," is greatest number.");
}
else if(j>k){
    console.log("else.if-1:",j," is greatest number.");
}
else if(i==j==k){
    console.log("else..if-2:","all are equal numbers.");
}
else{
    console.log("Else:",k," is greatest number.");
}












