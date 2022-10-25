//Khai báo sản phẩm

var product1 = new Product("Áo Polo nâu", 50000, 120000, "img/1.jpg");
var product2 = new Product("Áo Polo đen", 200000, 250000, "img/2.jpg");
var product3 = new Product("Áo Polo trắng", 200000, 250000, "img/3.jpg");
var product4 = new Product("Áo sơ mi xanh", 200000, 250000, "img/4.jpg");
var product5 = new Product("Áo sơ mi trắng", 200000, 250000, "img/5.jpg");
var product6 = new Product("Áo sơ mi đen", 200000, 250000, "img/6.jpg");

arrProductAll = [product1, product2, product3, product4, product5, product6];

display(arrProductAll)

function display(arrProduct) {

    var data = "";
    for (let i = 0; i < arrProduct.length; i++) {
        data += `
        <div class="product-item">
         <div id="imgProduct">
        <a href=""><img src="${arrProduct[i].image}" alt="" width="245px" height="280px"></a>
         </div>
         <div id="nameProduct">
         <a href="">${arrProduct[i].name}</a>
        </div>
        <div id="price1">
        <span id="price1">${arrProduct[i].price} VND</span>
        <span id="price2">${arrProduct[i].priceOld} VND</span>
        </div>
        <div id="btn-product">
                           <button type="submit" id="btn-edit" onclick="editProduct(${i})">Sửa</button>
                            <button type="submit" id="btn-delete" onclick="delProduct(${i})">Xóa</button>
                         </div>
        </div>
        
       `
    }
    document.getElementById("displayElement").innerHTML = data;
}


//SlowSlide
function ChayQuangCao() {
    let sliders = document.getElementsByClassName("mySlides")
    let myIndex = 0
    for (let i = 0; i < sliders.length; i++) {
        sliders[i].style.display = "none"
    }
    sliders[myIndex].style.display = "block"
    setInterval(function () {
        console.log(sliders.length)
        for (let i = 0; i < sliders.length; i++) {
            sliders[i].style.display = "none"
        }

        sliders[myIndex].style.display = "block"
        myIndex++
        if (myIndex === sliders.length) {
            myIndex = 0
        }
    }, 2000);
}
