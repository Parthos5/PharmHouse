const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '5f7e9004dbmsh6c4a45bd3364fc2p187d89jsncd2642547937',
		'X-RapidAPI-Host': 'drug-info-and-price-history.p.rapidapi.com'
	}
};

fetch('https://drug-info-and-price-history.p.rapidapi.com/1/druginfo?drug=xanax', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

/*myobj = data[index];
index++;
*/
let productObj = [];
let cartbtn = document.getElementById("cartbtn");
cartbtn.addEventListener("click", function (e){
  let name = document.getElementById("name");
  let publisher = document.getElementById("publisher");
  let cost = document.getElementById("cost");
  let products = localStorage.getItem("products");
  if (products == null) {
    productObj = [];
  }

  else {
    productObj = JSON.parse(products);
  }
  let myObj = {
    a: a.value,
    Name : name.value,
    Publisher : publisher.value,
    b: b.value,
    Cost: cost.value
  }
  

  myObj = data[index];
  index++;
  productObj.push(myObj);
  localStorage.setItem("product", JSON.stringify(productObj));
  showproduct();
});

function showproduct() {
  let products = localStorage.getItem("products");
  if (products == null) {
    let productObj = [];
  }
  else {    
    productObj = JSON.parse(product);
  }
  console.log(productObj);
  let html = "";
  productObj.forEach(function (element ,index) {
    html += `
        
        <div id="product">
            <img src="imgs/crocin.jpg" alt="">
            <h3 id="name">Crocin 650 (Advanced)</h3>
            <p id="publisher">Publisher</p>
            <p id="cost">Rs. 50/-         </p>
            <div class="cartbtndiv">
            <button id="cartbtn">Add to Cart</button>
            </div>
            `
  });
  
  
  let productelm = document.getElementById('product');
  if (productObj.length != 0) {
    productelm.innerHTML = html;
  }
  else{
    productelm.innerHTML = `<h4 style='color: black;'>Nothing to display</h4>`;
  }
}
