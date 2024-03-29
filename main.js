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
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}
//Hien thi dan sach  san pham vao gio hang
function showListCart() {
  const item = document.querySelector('.content-cart-item')
  item.innerHTML = ``
  for (let i = 0; i < listProduct.length; i++) {
    item.innerHTML += `
      <div class="cart-box-mini">
        <div> <img class="cart-img" style=" pointer-events: none;" src="${listProduct[i].img}" alt=""></div>
        <h4 class="cart-sanpham">"${listProduct[i].title}</h4>
        <h4 class="cart-price"  >${listProduct[i].price}</h4>
        <button style="font-size: 18px; color: brown; margin-left: 10px;" onClick = handleDelete(${listProduct[i].id})>Xoá</button>         
      </div> 
      
  `
  }

 
}
// add cart
let listProduct = [] //list chứa sản phẩm trong gio hang

//Thêm sản phẩm vào giỏ hàng
function addProduct(id) {
    var newProduct = {
      id: Math.random(),
      title: getAllProducts[id].title,
      img: getAllProducts[id].img,
      price: getAllProducts[id].price
    }
  listProduct.push(newProduct) //đẩy sản phẩm vào mảng
  showListCart() //gọi hàm để hiển thị sản phẩm
  localStorage.setItem('Spadd',JSON.stringify(listProduct))
 
}

//danh sach tat ca san pham
var getAllProducts = [
  {
      id: 0,
      newProduct: true,
      img: 'img/upload_4229fd8ac4874935850a75888e847287_grande.jpg',
      title: 'Pin dự phòng Anker PowerCore+ 10050 – A1310',
      price: '1,320,000 đ'
  },
  {
      id: 1,
      newProduct: true,
      img: 'img/upload_4d8a63f0e0794dec84f9432a473deb4f_grande.jpg',
      title: 'Bao Da Pin Dự Phòng Anker 10050 – A7096081',
      price: '390,000 đ'
  },
  {
      id: 2,
      newProduct: false,
      img: 'img/a1310012_td01_bao_da_grande.png',
      title: 'Pin dự phòng Anker PowerCore 20100 – A1271',
      price: '400,000 đ'
  },
  {
    id: 3,
    newProduct: true,
    img: 'img/upload_5198d14188c542dc874acec105dcf1f4_grande.jpg',
    title: 'Pin dự phòng Anker PowerCore 2023 – A1271',
    price: '400,000 đ'
  },
  {
    id: 4,
    newProduct: true,
    img: 'img/upload_e1501c9edd204e4ba2a62e4bcbc1649c_grande.jpg',
    title: 'Pin dự phòng Anker PowerCore 2192 – A1271',
    price: '500,000 đ'
  },
  {
    id: 5,
    newProduct: false,
    img: 'img/pin_20du_20phong_20anker_2010050_20-_20vang_1d79ab6e8e0c4d4199603da1bb653c03_grande.jpg',
    title: 'Pin dự phòng Anker PowerCore 2192 – A1271',
    price: '500,000 đ'
  },

]

  //tìm kiếm
  let newArr = []
  function handleSearch(value) {
    newArr = getAllProducts.filter(product => {
      return product.title.toLocaleLowerCase().includes(value.trim().toLocaleLowerCase())
    })
  
    let listResult = document.getElementById('results')
    if (value == '') {
      newArr = []
    }
    listResult.innerHTML = ``
    for (let i = 0; i < newArr.length; i++) {
      listResult.innerHTML += `
      <div class="search_all" style=" display: flex; margin-left:-43px; ">
      <img class="cart-img" style=" pointer-events: none;   width: 50px;
      height: 50px; " src="${newArr[i].img}" alt=""> 
        <li style="padding: 10px 0.75em; ">${newArr[i].title}</li>
        </div>
      `
    }
    document.getElementById("results").style.display = "block";
  
    if (value == '' ) {
      document.getElementById("results").style.display = "none";
    }
  }


//Xoa san pham
function handleDelete(id) {
  const newList = listProduct.filter(item => { //lọc tất cả sản phẩm có id khác id click xóa vào mảng mới
      return item.id != id
  })
  listProduct = newList //gán mảng mới vào danh sách sản phẩm
  showListCart()
}
//Đăng xuất
function logOut() {
  localStorage.setItem('currentUser', null)
  window.location.reload()
}

// them san pham moi vao gio hang
function showNewProduct () {
  const products = document.querySelector('.new-product')
  for (let i = 0; i < getAllProducts.length; i++) {
    if(getAllProducts[i].newProduct == true) {
      products.innerHTML += `
        <div class="sp1" ${getAllProducts[i].id}>
          <img src="${getAllProducts[i].img}" alt="">
          <h4 class="spbanchay">${getAllProducts[i].title}</h4>
          <h4 class="price">${getAllProducts[i].price}</h4>
          <button class="btn" onclick="addProduct(${getAllProducts[i].id})"> Thêm Vào Giỏ Hàng </button>
        </div>
      `    
    }
  }
}
//hien thi danh sach san pham
function showProduct () {
  const products = document.querySelector('.all-product')
  products.innerHTML= ''
  for (let i = 0; i < getAllProducts.length; i++) {
    products.innerHTML += `
      <div class="sp1" ${getAllProducts[i].id}>
        <img src="${getAllProducts[i].img}" alt="">
        <h4 class="spbanchay">${getAllProducts[i].title}</h4>
        <h4 class="price">${getAllProducts[i].price}</h4>
        <button class="btn" onclick="addProduct(${getAllProducts[i].id})"> Thêm Vào Giỏ Hàng </button>
    </div>
    
    `    
  }
}

//khi vao trang web hoac tai lai trang thi chay ham main() dau
function main() {
  showProduct()
  showNewProduct()
  const login = document.querySelector('.login')
  
  let data = localStorage.getItem('currentUser')
  let currentUser = JSON.parse(data)

  currentUser 
    ? login.innerHTML = `
    
      <h3 class"usernamelogin"> <i class="fa-solid fa-user"></i> ${currentUser?.username}</h3>
      <h3 class="logOut" onclick="logOut()" style="font-size: small;
      cursor: pointer; padding: 2px 2px 2px 0px; ">Đăng xuất</h3>
    `
    : login.innerHTML = `
      <a href="LoGin/dangnhap.html" class="login_a">ĐĂNG NHẬP/</a>
      <a href="LoGin/dangki.html" class="login_a">ĐĂNG KÍ</a>
    `
}
main()






  
