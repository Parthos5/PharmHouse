let myusername = JSON.parse(localStorage.getItem("username"));
console.log(myusername);
let mypassword = JSON.parse(localStorage.getItem("password"));
console.log(mypassword);
let p =0,q=0;

let usernameinput = document.getElementById('usernameinput');
let passwordinput = document.getElementById('passwordinput');

let login = document.getElementById('loginbtn');

login.addEventListener("click",function(){

    //username
    for(let i =0;i<(myusername.length)-1;i++)
    {
        if(usernameinput.value === myusername[i])
        {
            p = i;
            break;
        }
        else{
            p = -1;
        }
    }
    if(p==-1)
    {
        alert("Enter the correct username");
    }

    //password
    for(let i =0;i<(mypassword.length)-1;i++)
    {
        if(passwordinput.value === mypassword[i])
        {
            q = i;
            break;
        }
        else{
            q = -1;
        }
    }
    if(q==-1)
    {
        alert("Enter the correct password");
    }

    if(p===q)
    {
        alert("Succesfully logged in");
        window.location="homepage.html";
    }
}
)


