const student = {stdName:"John",age:20, course:"Java"};
console.log(student);

const employee =  new Object(); 
employee.empName = "Kiran";
employee.department = "IT";
console.log(employee);

//Constructor function:
function Users(userName, email,phone){
    this.userName = userName;
    this.email = email;
    this.phone = phone;
}
const user1 = new Users("A","abc@gmail.com","8776766343");
const user2 = new Users("B", "b@gmail.com","644553433");
console.log(user1, user2);

//object.create()
const Customer={
    type : "Regular Customer",
    displayCustomerType(){
        console.log("The Customer is",this.type);
    }
}

const c1 = Object.create(Customer);
c1.displayCustomerType();
const c2 = Object.create(Customer);
c2.type = "Irregular Customer";
c2.displayCustomerType();


//Object literals:
const userData = {
    user_name : "Francis",
    mobile : 674657575,
    age : 35
}
console.log(userData);
userData.user_name = "Francis RK";
console.log(userData);
delete userData.age;
console.log(userData);

