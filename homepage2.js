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

let contain = document.getElementById("products");

let num = [];
let p = 0 ;
while(p<8)
{ 
    let x = Math.floor(Math.random()*8);
    num.push(unino(x));
    console.log(num);
   
    
contain.innerHTML += `
<div class="product" onclick="tempstorage(${num[p]})"><a href="SingleProduct.html">
<img id="image" class="image" src="${pharma[num[p]].image}">

<h3 onclick = "transfer(this.id)" id="name${num[p]}" class="name">${pharma[num[p]].name}</h3>

<div class="costandcart">
<h4 class="cost"> &#8377;${pharma[num[p]].cost}</h4>
<button id="cart" onclick = "transfer(${num[p]})" class="cart">Add to Cart</button>
</div>
</a>    
</div>
` 
/*'${pharma[x].name}'*/
p++;
}

//p2
let contain2 = document.getElementById("p2");

let num2 = [];
let g = 0;
let p2 = 8 ;
while(p2<16)
{ 
    let x = Math.floor(Math.random()*8) + 8;
    num2.push(unino2(x));
    console.log(num2);
   
    
contain2.innerHTML += `
<div class="product" onclick="tempstorage(${num2[g]})"><a href="SingleProduct.html">
<img id="image" class="image" src="${pharma[num2[g]].image}">

<h3 onclick = "transfer(this.id)" id="name${num2[g]}" class="name">${pharma[num2[g]].name}</h3>

<div class="costandcart">
<h4 class="cost"> &#8377;${pharma[num2[g]].cost}</h4>
<button id="cart" onclick = "transfer(${num2[g]})" class="cart">Add to Cart</button>
</div>
</a>    
</div>
` 
/*'${pharma[x].name}'*/
p2++;
g++;
}


/*localStorage.removeItem("cart");*/
/*localStorage.clear()*/
let cartitems = [];
let cartitemsfromls = JSON.parse(localStorage.getItem("cart"));
let productqty = [];
let productqtyfromls = JSON.parse(localStorage.getItem("qty"));

if(cartitemsfromls)
{
    cartitems = cartitemsfromls;
    productqty = productqtyfromls;
}

//localStorage.removeItem("cart");
//localStorage.removeItem("qty");
function transfer(clicked){
    alert("1 " + pharma[clicked].name + " has been added to cart");
    cartitems.push(clicked);
    productqty.push(1);
    localStorage.setItem("cart",JSON.stringify(cartitems));
    localStorage.setItem("qty",JSON.stringify(productqty));
}

function tempstorage(x){
    localStorage.setItem("tempitem",x);
}

//SEARCH FUNCTION
let query = document.getElementById("search");
let home = document.getElementById("products");
let head = document.getElementById("trend");
let sect5 = document.getElementById("section-5");
let wel = document.getElementById("welcome");
let best = document.getElementById("best");
let p2d = document.getElementById("p2");
let i;

let result = document.getElementById("searchresults");
let title = document.getElementById("heading");
   title.style.display="none";

function search(){
   let svalue = query.value;
   console.log(svalue);
   svalue = svalue.toLowerCase();
   home.style.display = "none";
   head.style.display = "none";
   sect5.style.display = "none";
   wel.style.display = "none";
   best.style.display = "none";
   p2d.style.display = "none";

   result.innerHTML = "";
   for(i = 0;i<pharma.length;i++)
   {
    if(pharma[i].name.toLowerCase().includes(svalue)){
        console.log(pharma[i].name);
        title.style.display= "block"; 
        result.innerHTML += `
<div class="product" onclick="tempstorage(${i})"><a href="SingleProduct.html">
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

   if(!svalue)
   {
    window.location.reload();
   }
}

//unique number function
function unino(x){
    let i = 0;
    let ctr = 0;
    for(i = 0;i<num.length;i++)
    {
        if(x == num[i])
        {
            ctr++;
            return unino(Math.floor(Math.random()*8));
        }
    }
    if(ctr==0)
        {
            return x;
        }
}

function unino2(x){
    let i = 0;
    let ctr = 0;
    for(i = 0;i<num2.length;i++)
    {
        if(x == num2[i])
        {
            ctr++;
            return unino2(Math.floor(Math.random()*8) + 8);
        }
    }
    if(ctr==0)
        {
            return x;
        }
}