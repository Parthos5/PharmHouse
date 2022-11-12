<!DOCTYPE html>

<head>
    <link rel="stylesheet" href="login.css">

</head>

<body>
    <div class="loginformdiv">
        
        <h1 class="heading">LOGIN</h1>
        <form action="validate.php" method="POST">
       <div class="inputdiv">
            
          <div class="emaildiv">
            <p class="emailtext">Username</p>
            <input id = "usernameinput" class="emailinput" name="user" type="text" placeholder="Enter your Username">
          </div>

          <div id="password" class="emaildiv">
            <p class="emailtext">Password</p>
            <input id = "passwordinput" class="emailinput" name="password" type="text" placeholder="Password">
          </div>

          <div class="fyp">Forgot your Password?</div>

          <div class="redirectdiv">
            
            <input type="checkbox">
            <button id="loginbtn" class="loginbutton">LOG IN</button>
          
          </div>
          </form>
          


       </div>
    
    </div>
    <div class="signupdiv">
            Don't Have an account?
            
            <a href="signup.php">
            <button id="signupbtn">Sign up</button>
            </a>
          </div>
</body>