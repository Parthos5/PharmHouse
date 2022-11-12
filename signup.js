/*localStorage.clear()*/

let myusername = JSON.parse(localStorage.getItem("username"));
console.log(myusername);
let mypassword = JSON.parse(localStorage.getItem("password"));
console.log(mypassword);
let myemail = JSON.parse(localStorage.getItem("email"));
console.log(myemail);

myusername = ['abc','pqr'];
mypassword = ['abc','pqr'];
myemail = ['abc','pqr'];
localStorage.setItem("email",JSON.stringify(myemail));
localStorage.setItem("username",JSON.stringify(myusername));
localStorage.setItem("password",JSON.stringify(mypassword));


const createbtn = document.getElementById("create");
const email = document.getElementById("email");
const username = document.getElementById("username");
let password = document.getElementById("password");
console.log(mypassword);
createbtn.addEventListener("click",function(){
    console.log(mypassword);    
    myemail.push(email.value);
    myusername.push(username.value);
    mypassword.push(password.value);
    console.log(myemail);
    console.log(mypassword);
    localStorage.setItem("email",JSON.stringify(myemail));
    localStorage.setItem("username",JSON.stringify(myusername));
    localStorage.setItem("password",JSON.stringify(mypassword));
    alert("Welcome To Pharmhouse")
})
