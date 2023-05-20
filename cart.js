const shopcart = document.querySelector("#shopcart");
const overlay  = document.querySelector(".overlay");

shopcart.addEventListener("click" , ()=>{
  if(overlay.style.display === "none"){
    overlay.style.display = "block"
  }
  else{
    overlay.style.display = "none"
  }
})

let butone =  document.getElementById("butone");
butone.addEventListener("click" , pop)

function pop(){
    alert("Thank you for your Purchase");   
}

const add = document.getElementsByClassName("add");
const removepop = document.getElementById("removepop");

removepop.addEventListener("click" , rempop)

function rempop(){
  overlay.style.display = "none";
  // overlay.remove();
  // productRows.remove();
}
Array.from(add).forEach(function(add){
    add.addEventListener("click", addtocart)
})

// for(i = 0; i < add.length; i++){
//   add[i].addEventListener("click" , addtocart)
// }

function addtocart(event){
      let button = event.target;
      let cartItem = button.parentElement;
      let price = cartItem.getElementsByClassName("price")[0].innerText;
      let imageSrc = cartItem.getElementsByClassName("productImage")[0].src;
      additemtocart(price , imageSrc);
      
 
}
const productRow = document.getElementsByClassName('product-row');

function additemtocart(price , imageSrc){
    let productRow = document.createElement("div");
    productRow.classList.add("product-row");
    let productRows = document.getElementsByClassName('product-rows')[0];
    let cartImage = document.getElementsByClassName("cart-image");

    for (var i = 0; i < cartImage.length; i++){
      if (cartImage[i].src == imageSrc){
        alert ('This item has already been added to the cart')
        return;
      }
    }

    let cartRowItems = `

    <div class="product-row">
         
        <img class="cart-image" src="${imageSrc}">
        <span class ="cart-price ">${price}</span>
        <input class="product-quantity " type="number" value="1">
        <button class="remove-btn ">Remove</button>
        </div>
        <hr class = "line">
        
    `
    productRow.innerHTML = cartRowItems;
    productRows.append(productRow);
    productRow.getElementsByClassName('remove-btn')[0].addEventListener("click", removeItem)
    productRow.getElementsByClassName('product-quantity')[0].addEventListener('change', changequantity);
    updateCartPrice()

    function removeItem () {
      if(confirm("Confirm you eant to delete the item")){

        productRow.remove();

      }      
         updateCartPrice();  
        
      }
}

  function changequantity(event) {
    var input = event.target
    if (input.value <= 0){
      input.value = 1
    }
     updateCartPrice();
  }


  function updateCartPrice(){

    var total = 0;
    for(i = 0; i < productRow.length; i += 2 ){   //i = i + 2
         let cartRow = productRow[i]
         var priceElement = cartRow.getElementsByClassName('cart-price')[0]
         var quantityElement = cartRow.getElementsByClassName('product-quantity')[0]
         var price = parseFloat(priceElement.innerText.replace('$', ''))
         var quantity = quantityElement.value
         total = total + (price * quantity)
    }
    
    document.getElementsByClassName('total-price')[0].innerText =  '$' + total
    document.getElementsByClassName('count')[0].textContent = i /= 2
  }

 
