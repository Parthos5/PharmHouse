<?php
session_start();
?>
<!DOCTYPE html>

<html>
    <link rel="stylesheet" href="homepage.css">
    <script src="https://cdn.tailwindcss.com"></script>

    <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">

</head>

<body>
    <nav class="bg-blue-600">
        <ul class="flex justify-between py-4">
            <div class="flex">
                <img src="imgs/logo.png" class="h-20">
                <li class="text-5xl  font-semibold pt-4 text-white">
                  PharmHouse
                </li>
           </div>
            <input  type="text" id="search" onkeyup = "search()" placeholder="Search Pharmhouse" class="h-10 mt-5 mr-2 pl-5">
        </div>
            <a href="AddToCart.php">
            <li id="carthead">Cart</li>
        </a>
        <a href="logout.php">
            <li id ="abouthead">Logout</li>
        </a>
           
        </ul>
    </nav>

    <div class="titles">
    <h1 id="trend">Frequently Purchased</h1>
    <p id="welcome" >Welcome <?php echo $_SESSION['user'];?>!</p>
    </div>
    <div id="products">
        
    
    </div>

    <div id="section-5">
        
        <h1>Remove the hassle with Pharmhouse</h1>
        <a href="AddtoCart.html">
        <button id="hassle">Go To Cart</button>
        </a>

       </div>
       <h1 id="best">Best Selling Products</h1>
       <div  id="p2" class="products">
       
    </div>

       <h1 id="heading">Search Results</h1>
    <div id="searchresults">
    
    </div>

    <div class="section-6">
            <div class="companyinfodiv">
                <div>Account
                    
                    <div class="aboutdiv">
                      <p>About us</p>
                    </div>
                
                </div>
                
                  
                <div class="linksdiv">
                    USEFUL LINKS
                    <a href="login.php">
                    <p>Logout</p>
                    </a>
                    <p>Sign Up</p>
                    <p></p>
                </div>
        
            
            </div>
        
        </div>
    
    <script src="homepage2.js"></script>
    
   


</body>

</html>