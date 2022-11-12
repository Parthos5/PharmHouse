let json = {
    "meds" : [
        {
            "name": "Cetaphil Gentle Skin Cleanser - 125ml",
            "cost":  "240",
            "image": "imgsmed/0.webp"},
        
            {
                "name": "Vicks Vaporub 50ml",
                "cost":  "150",
                "image": "imgsmed/1.webp"},
                {
                    "name": "Dettol Neem Bathing Soap Bar",
                    "cost":  "135",
                    "image": "imgsmed/2.webp"},
                    
                    {"name": "GrazeWhite Cream 15gm",
                    "cost":  "263",
                    "image": "imgsmed/3.webp"},
                
                    {"name": "Sevenseas Original Capsule 100`s",
                    "cost":  "255",
                    "image": "imgsmed/4.webp"},
                
                    {"name": "Himalaya Purifying Neem Face Wash 150ml",
                    "cost":  "175",
                    "image": "imgsmed/5.webp"},
                
                    {"name": "Liveasy Ortho Care Acupressure Slippers - Men (black) Size 10",
                    "cost":  "341",
                    "image": "imgsmed/6.webp"},
                
                    {"name": "Nivea Soft Light Moisturizer Of 100 Ml",
                    "cost":  "122.48",
                    "image": "imgsmed/7.webp"},
                    {
                        "name": "Nivea Body Milk Lotion 400ml",
                        "cost":  "291",
                        "image": "imgsmed/8.webp"},
                    
                        {
                            "name": "Odonil Room Spray Rose Garden 220ml",
                            "cost":  "160",
                            "image": "imgsmed/9.webp"},
                            {
                                "name": "Cadbury Bournvita Nutrition Drink Jar Of 1000 G",
                                "cost":  "410",
                                "image": "imgsmed/10.webp"},
                                
                                {"name": "Bpl Smart Oxy Finger Tip Pulse Black Oximeter (black)",
                                "cost":  "1875",
                                "image": "imgsmed/11.webp"},
                            
                                {"name": "Philips Bt3241/15 Smart Beard Trimmer- Power Adapt Technology For Precise Trimming",
                                "cost":  "2145",
                                "image": "imgsmed/12.webp"},
                            
                                {"name": "Omron Hem-7124  Bp Monitor",
                                "cost":  "1894",
                                "image": "imgsmed/13.webp"},
                            
                                {"name": "Stayfree Cottony Xl 18s",
                                "cost":  "120",
                                "image": "imgsmed/14.webp"},
                            
                                {"name": "Dettol Antiseptic 200ml",
                                "cost":  "207.78",
                                "image": "imgsmed/15.webp"},
//new

                                {
                                    "name": "All Out Ultra Mosquito Repellant Combi Pack (machine + 2 Refills)",
                                    "cost":  "150",
                                    "image": "imgsmed/16.webp"},
        
            {
                "name": "All Out Ultra Mosquito Repellant Refills (pack Of 2)",
                "cost":  "128.20",
                "image": "imgsmed/17.webp"},
                {
                    "name": "DGodrej Good Knight Gold Flash Mosquito Repellent (machine + 2 Refills) - Combo Pack-1 Unit",
                    "cost":  "178",
                    "image": "imgsmed/18.webp"},
                    
                    {"name": "Harpic Power Plus Original Toilet Cleaner  Bottle Of 200 Ml",
                    "cost":  "35",
                    "image": "imgsmed/19.webp"},
                
                    {"name": "Prega News Pregnancy Test Kit",
                    "cost":  "46",
                    "image": "imgsmed/20.webp"},
                
                    {"name": "3 Ply Mask Packet Of 100",
                    "cost":  "780",
                    "image": "imgsmed/21.webp"},
                
                    {"name": "Hot Water Bag - Relieves Pain - Relaxes Sore Muscles - Improves Blood Supply - Blue - 2l",
                    "cost":  "244",
                    "image": "imgsmed/22.webp"},
                
                    {"name": "Captain Zack Zoey Shiny & Mew Cat Shampoo, 200 Ml",
                    "cost":  "258.48",
                    "image": "imgsmed/23.webp"},

                    {"name": "Calcimax Forte Plus Strip Of 30 Tablets",
                    "cost":  "228.31",
                    "image": "imgsmed/24.webp"},
                            ]
};

let pharma = json["meds"];



/*localStorage.removeItem("cart");*/
let drugindex = JSON.parse(localStorage.getItem("tempitem"));
console.log(drugindex);
let state = JSON.parse(localStorage.getItem("cart"));

let container = document.getElementById("container");

container.innerHTML += `
<img src="${pharma[drugindex].image}" class="productimg">
    <div class="middle">
    <p class="name">${pharma[drugindex].name}</p>
    <div class = "nameqty">
    <p class="cost">&#8377;${pharma[drugindex].cost}</p>
    <div class="qty">
    <p>Qty: <p>
    <input id="inputqty" type="number" min="1" max="20" value="1"/>
    </div>
    </div>
    </div>
    <div class="right">
      <p class="noofitems">${state.length} items added in cart</p>
    <button class="addtocart" onclick = "store(${drugindex})">Add to Cart</button>
    <a href="homepage.php">
    <button class="backtohome">Back to Home</button>
    </a>
    </div>
	`

let cartitems = [];
let cartitemsfromls = JSON.parse(localStorage.getItem("cart"));
let productqty = [];
let qty = document.getElementById("inputqty");
let productqtyfromls = JSON.parse(localStorage.getItem("qty"));
console.log(typeof parseInt(qty.value));
if(cartitemsfromls)
{
    cartitems = cartitemsfromls;
    productqty = productqtyfromls;
}

function store(clicked){
    alert(qty.value + " " + pharma[clicked].name + "s has been added to cart");
    cartitems.push(clicked);
    productqty.push(parseInt((qty.value)));
    localStorage.setItem("cart",JSON.stringify(cartitems));
    localStorage.setItem("qty",JSON.stringify(productqty));
}



//SEARCH FUNCTION
let query = document.getElementById("search");
let home = document.getElementById("container");
let i;

let result = document.getElementById("searchresults");
let title = document.getElementById("heading");
   title.style.display="none";

function search(){
   let svalue = query.value;
   console.log(svalue);
   svalue = svalue.toLowerCase();
   container.style.display = "none";
   result.innerHTML = "";
   for(i = 0;i<pharma.length;i++)
   {
    if(!svalue)
   {
    window.location.reload();
   }
    if(pharma[i].name.toLowerCase().includes(svalue)){
        console.log(pharma[i].name);
        title   .style.display= "block"; 
        result.innerHTML += `
<div class="sproduct" onclick="tempstorage(${i})"><a href="SingleProduct.html">
<img id="image" class="image" src="${pharma[i].image}">

<h3 onclick = "transfer(this.id)" id="name${i}" class="name">${pharma[i].name}</h3>

<div class="costandcart">
<h4 class="cost" ">₹${pharma[i].cost}</h4>
<button id="cart" onclick = "transfer(${i})" class="cart">Add to Cart</button>
</div>
</a>    
</div>
`       
    }
   }
}


function tempstorage(x){
    localStorage.setItem("tempitem",x);
}