/*
let b = null;
let a = [1,2,3]
console.log("Before Lines");
try {
    console.log(b.concat("")); //Error 
}
catch(error){
    console.log("Inside Catch...");
    console.log(error);
}
finally{
    console.log("Program is running..."); //always executes
}
console.log("other lines");

*/
//Promises:
/*
function getApp(){
    return new Promise((resolve,reject)=>{
        const networkSpeed = "low";
        if(networkSpeed=="high"){
            resolve("Application is installed!")
        }else{
            reject("Application is not installed!")
        }
    });
}

getApp().then((n)=>{
    console.log("inside then");
    console.log(n);
}).catch((err)=>{
    console.log("inside catch");
    console.log(err);
});
*/

//Example-2:
/*
console.log("Searching for class availability....");
const course = new Promise((res,rej)=>{
    const courseName = "Python";
    setTimeout(()=>{
        if(courseName=="Java"){
            res("Java course is Available!")
        }else{
            rej("Python is not Available!")
        }
    },3000);
});
course.then((c)=>{
console.log(c);
}).catch((err)=>{
    console.log(err);
});
*/

//Async/await:
/*
 async function myFunction(){
    await new Promise((res,rej)=>{
        setTimeout(()=>{
            console.log("Function executed!");
            res();
        },2000);
    });
}
console.log("Started!");
await myFunction();
console.log("Completed!");
*/

//Promise and async/await:

function cardValidity(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            const valid = true;
            if(valid){
                res("Card is Valid. Enter PIN : ....");
            }else{
                rej("Validity Expired!")
            }
        },2000);
    });
}

function pinVerify(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            const pin = 1234;
            if(pin==1234){
                res("Start Transaction ....");
            }else{
                rej("Invalid PIN!")
            }
        },2000);
    });
}
function transaction(){
    return new Promise((res,rej)=>{
        const mainBalance = 50000;
        setTimeout(()=>{
            const withdraw = 30000;
            if(withdraw<=mainBalance){
                res("Withdraw Success! ....");
            }else{
                rej("Insufficient Balance!")
            }
        },2000);
    });
}

async function ATMFunctionality(){
    const c = await cardValidity();
    console.log(c);
    const p = await pinVerify();
    console.log(p);
    const t = await transaction();
    console.log(t);
    console.log("Completed!!!");
    
}

ATMFunctionality();



















