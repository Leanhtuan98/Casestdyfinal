//Khai báo và hiển thị sản phẩm

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

// Thêm sản phẩm
function addProductDisplay() {
    let dataAdd = ""
    dataAdd += `
   <div class="input-add" >
                    <input type="text" placeholder="Tên sản phẩm" id="input-name" ><br>
                    <input type="text" placeholder="Giá" id="input-price" ><br>
                    <input type="text" placeholder="Giá cũ" id="input-priceOld" ><br>
                    <input type="text" placeholder="Image" id="input-image" ><br>
                    <p id="check" style="color: red; padding: 15px 0px 0px 25px"></p>
                    <input type="submit" value="Thêm" onclick="addProduct()" id="btn-addProduct">
                     <input type="submit" value="Hủy" onclick="cancelAdd()" id="btn-cancel">
                  
                </div> 
    `
    document.getElementById("add-product").innerHTML = dataAdd;
}

function addProduct() {
    let nameProduct = document.getElementById("input-name").value;
    let imageProduct = document.getElementById("input-image").value;
    let priceProduct = document.getElementById("input-price").value;
    let priceOldProduct = +document.getElementById("input-priceOld").value;
    let check = document.getElementById("check");
    if (nameProduct == "" || imageProduct == "" || priceProduct == "" || priceOldProduct == "") {
        check.innerHTML = "Không được để trống thông tin"
    } else if (isNaN(priceProduct) || isNaN(priceOldProduct)) {
        check.innerHTML = "Giá sản phẩm phải là số "
    } else {
        var product = new Product(nameProduct, priceProduct, priceOldProduct, imageProduct);
        arrProductAll.push(product);
        display(arrProductAll);
        document.getElementById("add-product").innerHTML = ""
    }
}

function cancelAdd() {
    document.getElementById("add-product").innerHTML = ""
}
//Xóa sp
function delProduct(index) {
    if (confirm("Bạn có muốn xóa không?")) {
        arrProductAll.splice(index, 1);
        display(arrProductAll)
    }
}
//Sửa sản phẩm
function editProduct(index) {
    let nameEdit = prompt("Nhập tên mới")
    let priceEdit = +prompt("Nhập giá mới")
    let priceOlEdit = +prompt("Nhập giá cũ")
    let imageEdit = prompt("Nhập ảnh mới")
    if (nameEdit == "" || priceEdit == "" || priceOlEdit == "" || imageEdit == "") {
        alert("Không để trống thông tin")
    } else if (isNaN(priceEdit) || isNaN(priceOlEdit)) {
        alert("Giá sản phẩm là số")

    } else {
        arrProductAll[index].name = nameEdit
        arrProductAll[index].price = priceEdit
        arrProductAll[index].priceOld = priceOlEdit
        arrProductAll[index].image = imageEdit

        display(arrProductAll)
    }
}
//Tìm sản phẩm
function searchProduct() {
    let inputSearch = document.getElementById("input-find").value;
    let arrSearch = []
    for (let i = 0 ; i<arrProductAll.length;i++){
        if (inputSearch == arrProductAll[i].name){
            arrSearch.push(arrProductAll[i])
        }
    }
    display(arrSearch)
    if (arrSearch.length == 0) {
        alert("không tìm thấy sản phẩm")
        display(arrProductAll)
    }
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
