// function main() {
//   var data = JSON.parse(localStorage.getItem('Spadd'))
//   var tong = 0;
//   for (let i = 0; i < data.length; i++) {

//     console.log(data[i].price); // string
//     var priceString = data[i].price;
//     var priceArray = priceString.match(/\d+/g);
//     var price = parseFloat(priceArray.join(''));
//     console.log(price);
//     tong +=price
//   }
//   console.log(tong);

// }

// main();

function tinhtongtien() {
  var data = JSON.parse(localStorage.getItem('Spadd'))
  var tong = 0;
  for (let i = 0; i < data.length; i++) {

    console.log(data[i].price); // string
    var priceString = data[i].price;
    var priceArray = priceString.match(/\d+/g);
    var price = parseFloat(priceArray.join(''));
    console.log(price);
    tong += price
    var bip = tong
    var formattedNum = bip.toLocaleString('en-US');
    console.log(formattedNum); // output: "1,320,000"
  }
  return formattedNum
}
function showListCart() {
  var data = JSON.parse(localStorage.getItem('Spadd'))
  const tensp = document.querySelector('.donhangthanhtoan_mini_sp')
  const pricesp = document.querySelector('.donhangthanhtoan_price')
  tensp.innerHTML = ``
  for (let i = 0; i < data.length; i++) {
    tensp.innerHTML += `
          <div class="ttsp" style="display:flex;">
          <h4 class="cart-sanpham" style="width:720px">${data[i].title}</h4> 
          <h4 class="cart-price" style="margin-left:220px; color:#e84545;">${data[i].price}</h4>      
          </div> 
          
      `
  }
  var tong = 0;

  pricesp.innerHTML = ``
  for (let i = 0; i < data.length; i++) {
    pricesp.innerHTML = `
            <div >
            <h4 class="cart-price" style="margin-left:60px; color:#e84545; font-size:
            15px        ">${tinhtongtien()} đ</h4>      
            </div> 
            
        `
  }

}
showListCart();
