const menuEmail = document.querySelector('.navbar-email');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector("#productDetail")
const cardsContainer = document.querySelector('.cards-container');
const productDetailCloseIcon = document.querySelector(".product-detail-close");

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener("click", closedAsideProductDetail);

function toggleDesktopMenu() {
  shoppingCartContainer.classList.add('inactive');
  desktopMenu.classList.toggle('inactive');
  productDetailContainer.classList.add("inactive");
}

function toggleMobileMenu() {
  shoppingCartContainer.classList.add('inactive');
  mobileMenu.classList.toggle('inactive');
  productDetailContainer.classList.add("inactive");
  
}

function toggleCarritoAside() {
  shoppingCartContainer.classList.toggle('inactive');
  mobileMenu.classList.add('inactive');
  desktopMenu.classList.add("inactive");
  productDetailContainer.classList.add("inactive")
}

function openAsideProductDetail() {
  productDetailContainer.classList.remove("inactive")
  shoppingCartContainer.classList.add("inactive")
}

function closedAsideProductDetail(){
  productDetailContainer.classList.add("inactive")
}

const productList = [];
productList.push({
  name: 'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
  name: 'Pantalla',
  price: 220,
  image: 'https://www.lg.com/co/images/monitores/md07564045/gallery/DZ-2.jpg',
});
productList.push({
  name: 'Compu',
  price: 620,
  image: 'https://img.freepik.com/fotos-premium/imagen-fondo-grafico-computadora-portatil-pantalla-blanco-escritorio-contra-fondo-gris-definitivo-maqueta-espacio-copia_236854-28385.jpg',
});
productList.push({
  name: 'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
  name: 'Pantalla',
  price: 220,
  image: 'https://www.lg.com/co/images/monitores/md07564045/gallery/DZ-2.jpg',
});
productList.push({
  name: 'Compu',
  price: 620,
  image: 'https://img.freepik.com/fotos-premium/imagen-fondo-grafico-computadora-portatil-pantalla-blanco-escritorio-contra-fondo-gris-definitivo-maqueta-espacio-copia_236854-28385.jpg',
});

/* 
<div class="product-card">
<img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
<div class="product-info">
  <div>
    <p>$120,00</p>
    <p>Bike</p>
  </div>
  <figure>
    <img src="./icons/bt_add_to_cart.svg" alt="">
  </figure>
</div>
</div> 
 */

function renderProducts(arr) {
  for (product of arr) {
    const productCard = document.createElement('div');//Se crea una etiqueta div
    productCard.classList.add('product-card');//Se crea una clase para el div llamada product-card
  
    // product= {name, price, image} -> product.image
    const productImg = document.createElement('img');//Se crea una etiqueta img
    productImg.setAttribute('src', product.image);// Se crea el atributo src para agregar una imagen y se agrega el contenido de la caracteristica del objeto
    productImg.addEventListener("click", openAsideProductDetail)
  
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
  
    const productInfoDiv = document.createElement('div');
  
    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;
    const productName = document.createElement('p');
    productName.innerText = product.name;
  
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);
  
    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
  
    productInfoFigure.appendChild(productImgCart);
  
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);
  
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);
  
    cardsContainer.appendChild(productCard);
  }
}

renderProducts(productList);