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
console.log(typeof parseInt(pharma[0].cost));

let  cartelement = [];
let productqty = [];

//RENDER FUNCTION
function render(){
cartelement = [];
cartelement = JSON.parse(localStorage.getItem("cart"));
productqty = JSON.parse(localStorage.getItem("qty"));
console.log(cartelement);

let counter = document.getElementById("itemsline");

let totalcost = 0;
let i = 0;
while(i<cartelement.length)
{
counter.innerHTML += `
<div class="product">
<div class="proimg">
  <img src="${pharma[cartelement[i]].image}">
</div>
<div class="prodata">
  <div class="nameanddelete">
  <p class="name">${pharma[cartelement[i]].name}</p>
  <img src="bin.png"  onclick="deletepro(${cartelement[i]})" class="delete">
  </div>
  <div class="costqty">
  <p class="cost">&#8377;${pharma[cartelement[i]].cost}</p>
  <p class="qtycart">QTY:${productqty[i]}</p>
  </div>
</div>
</div>
` 
totalcost = totalcost +parseInt((pharma[cartelement[i]].cost)*(productqty[i]));
i++;
console.log(i);
}
console.log(totalcost);

let bill = document.getElementById("billmoney");
bill.innerHTML = "&#8377;" + totalcost;
}
render();
green();

/*localStorage.removeItem("cart");
localStorage.removeItem("qty");*/
//delete
// num is the product value
let pos = 0;

//qty data
let productqtyfromls = JSON.parse(localStorage.getItem("qty"));

if(productqtyfromls)
{
    productqty = productqtyfromls;
}

function deletepro(num)
{   
    while(num != cartelement[pos])
    {
        pos++;
    }
    console.log("pos is" + pos);
    cartelement.splice(pos,1);
    productqty.splice(pos,1);
    localStorage.setItem("cart",JSON.stringify(cartelement));
    localStorage.setItem("qty",JSON.stringify(productqty));
    window.location.reload(true);
    render();
    console.log(cartelement);
}

let amtpro = document.getElementById("amountpro");
amtpro.innerHTML = cartelement.length + " in Cart";



//POP UP FORM 
function togglePopup() {
    document.getElementById("popup-1").classList.toggle("active");
   }

//details storing in ls
//  localStorage.removeItem("userData");
function userdata()
{
    let myemail = document.getElementById("email");
    let myphone = document.getElementById("phone");
    let myadd1 = document.getElementById("address1");
    let myadd2 = document.getElementById("address2");
    let userdatap = [];
    console.log(email.value);
    if(myemail.value && myphone.value && myadd1.value && myadd2.value )
    {
    userdatap.push(myemail.value);
    userdatap.push(myphone.value);
    userdatap.push(myadd1.value);
    userdatap.push(myadd2.value);
    localStorage.setItem("userData",JSON.stringify(userdatap));
    document.getElementById("popup-1").classList.toggle("active");
    green();
    }
    else if(!myemail.value)
    {
        alert("Enter your email");
    }
    else if(!myphone.value)
    {
        alert("Enter your phone number");
    }
    else if(!myadd1.value)
    {
        alert("Enter your address");
    }
}

function green(){
let go = [];
go = JSON.parse(localStorage.getItem("userData"));
if(go.length>=2)
    {
        let place = document.getElementById("placeorder");
        place.style.color =  "white";
        place.style.backgroundColor = "green";
    }
}


//SEARCH FUNCTION
let query = document.getElementById("search");
//display none for existing elements
let home = document.getElementById("maindiv");
let head = document.getElementById("popup-1");
let title = document.getElementById("heading");
title.style.display="none";
let i;

let result = document.getElementById("searchresults");

function search(){
   let svalue = query.value;
   console.log(svalue);
   svalue = svalue.toLowerCase();
   home.style.display = "none";
   head.style.display = "none";
   result.innerHTML = "";
   for(i = 0;i<pharma.length;i++)
   {
    if(pharma[i].name.toLowerCase().includes(svalue)){
        console.log(pharma[i].name); 
        title.style.display= "block";
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

   if(!svalue)
   {
    window.location.reload(true);
   }
}

function tempstorage(x){
    localStorage.setItem("tempitem",x);
}