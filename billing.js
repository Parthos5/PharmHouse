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

//userdata
let userdata = [];
userdata = JSON.parse(localStorage.getItem("userData"));
console.log(userdata);

let add = document.getElementById("address");
add.innerHTML += userdata[2] + "," + userdata[3];

let phone = document.getElementById("phone");
phone.innerHTML += userdata[1];


//products
let products = document.getElementById("products");
let purchased = [];
let purchasedqty = [];
purchased = JSON.parse(localStorage.getItem("cart"));
purchasedqty = JSON.parse(localStorage.getItem("qty"));
let totalcost = 0;

let i =0;
while(i<purchased.length)
{
    products.innerHTML += `<div id="purchased" class="purchased">
                            <p>${pharma[purchased[i]].name}</p>
                            <div class="qtycost">
                            <p id="qty">QTY:${purchasedqty[i]}</p>
                            <p id="cost">Cost:&#8377;${pharma[purchased[i]].cost*(purchasedqty[i])}
                            </div>
                            </div>  
                            ` 
    totalcost += parseInt(pharma[purchased[i]].cost*(purchasedqty[i]));
    i++;
}

products.innerHTML += `<div id="Total">Total &#8377;${totalcost}</div>`;

//orderdone

function order()
{
    alert("Your Order has been Placed");
}

     $("body").on("click", "#pdf", function () {
            html2canvas($('#container')[0], {
                onrendered: function (canvas) { 
                     var data = canvas.toDataURL();
                     var docDefinition = {
                         content: [{
                             image: data,
                             width: 500
                        }]
                     };
                     pdfMake.createPdf(docDefinition).download("customer-details.pdf");
                }
             });
        });
