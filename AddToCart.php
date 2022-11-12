<!DOCTYPE html>
<html>
  <head>
    <Title>Add To Cart Page</Title>
    <link rel="stylesheet" href="header.css">
    <script src="https://cdn.tailwindcss.com"></script>
  </head>
  <body>
    <nav class="bg-blue-600">
      <ul class="flex justify-between py-4">
          <div class="flex">
              <img src="imgs/logo.png" class="h-20">
              <a href="homepage.php">
              <li class="text-5xl  font-semibold pt-4 text-white">
                PharmHouse
              </li>
            </a>
         </div>
          <input  type="text" id="search" onkeyup = "search()" placeholder="Search Pharmhouse" class="h-10 mt-5 mr-2 pl-5">
          <a href="AddToCart.php">
            <li id="carthead">Cart</li>
        </a>
        <a href="logout.php">
          <li id ="abouthead" >Logout</li>
        </a>
         
      </ul>
  </nav>
    
    <div id="maindiv">
      
      <div id = "items" class="items">
      <h1 id="amountpro"></h1>
      <div id = "itemsline"></div>
      </div>

      <div class="checkout">
        <h1>CHECKOUT</h1>
        <button class="add" onclick = "togglePopup()">Enter Delivery Details</button>
        <p class="order">Order Summary</p>
        <div class="bill">
        <p class="totalcost">Cart Value:</p>
        <p id = "billmoney" class="billmoney"></p>
        </div>
        <a href="billing.php">
        <button id="placeorder" class="placeorder">Confirm Order</button>
      </a>
      </div>
      
    </div>


  <div class="popup" id="popup-1">
    <div class="content">
      <h1>Enter Details</h1> 
      <div class="input-field"><input id="email" name="email" placeholder="Email" class="validate"></div>
      <div class="input-field"><input id="phone" placeholder="Phone Number" class="validate"></div>
      <div class="input-field"><input  id="address1" placeholder="Address Line 1" class="validate"></div>
      <div class="input-field"><input  id="address2" placeholder="Address Line 2" class="validate"></div>
      <button id="confirm" onclick = "userdata()" class="confirm">Confirm</button>
      <div class="close-btn" onclick="togglePopup()"></div>
    </div>
    </div>

    <h1 id="heading">Search Results</h1>
    <div id="searchresults">
    
    </div>
    

    <script src="cart.js"></script>
  </body>
</html>