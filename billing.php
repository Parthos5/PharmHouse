    <!DOCTYPE html>

<html>

 <head>
    <link rel="stylesheet" href="billing.css">
 </head>

 <body>
    <div id="container" class="container">
    <h1 id="heading" class="heading">Your Order</h1>
    <div id="products" class="products">
        <h2 class="bought">Items purchased</h2>
    </div>

    <div id="userinfo" class="userinfo">
    <div class="address" id="address">Address: </div>
    <div class="phone" id ="phone">Phone Number: </div>
    </div>
    <button id="placeorder" name ="placeorders" class="placeorder" onclick="order()">Place Order</button>
    </div>

    <a href="AddToCart.php">
    <img class="change" src="imgs/back.png"></img>
    </a>

    <img src="imgs/pdf.png" id="pdf" class="pdf" onclick="generatepdf()">

    
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.22/pdfmake.min.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/0.4.1/html2canvas.min.js"></script>
    <script src="billing.js"></script>

 </body>

</html>
