var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

// slide photo
function showSlides(n) {
  var i;  
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

// add cart
const btn = document.querySelectorAll('.btn')
var listProduct = [] //list chứa sản phẩm

btn.forEach(function(button, index) {
  button.addEventListener("click", function(event) {
    const product = event.target.parentElement
    const spbanchay = product.querySelector('.spbanchay').innerText
    const anh = product.querySelector('img').src
    const price = product.querySelector('.price').innerText
    const newProduct = {
      id: Math.random(),
      spbanchay: spbanchay,
      anh: anh,
      price: price
    }
    addCart(newProduct)

  });
})
//them san pham
function showListCart() {
  const item = document.querySelector('.header__notification')
  item.innerHTML = ``
  for (let i = 0; i < listProduct.length; i++) {
    item.innerHTML += `
    <div class="cart-box-mini">
      <div> <img class="cart-img" style=" pointer-events: none;" src="${listProduct[i].anh} " alt=""></div>
      <h4 class="cart-sanpham">"${listProduct[i].spbanchay}</h4>
      <h4 class="cart-price"  >${listProduct[i].price}</h4>
      <button style="font-size: 18px; color: brown; margin-left: 10px;" onClick = handleDelete(${listProduct[i].id})>Xoá</button>     
    </div>
  `
  }
}

//Thêm sản phẩm vào giỏ hàng
function addCart(newCart) {
    listProduct.push(newCart) //đẩy sản phẩm vào mảng
    showListCart() //gọi hàm để hiển thị sản phẩm
}

function handleDelete(id) {
  const newList = listProduct.filter(item => { //lọc tất cả sản phẩm có id khác id click xóa vào mảng mới
      return item.id != id
  })
  listProduct = newList //gán mảng mới vào danh sách sản phẩm
  showListCart()
}

