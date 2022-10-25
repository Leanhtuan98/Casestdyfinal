//Khai báo sản phẩm

var product1 = new Product("Áo Polo cao cấp màu nâu", 50000, 120000, "polo2.jpg");
var product2 = new Product("Áo Polo cao cấp màu trắng", 200000, 250000, "img/2.jpg");
arrProductAll = [product1,product2];

display(arrProductAll)

function display (arrProduct) {

    var data = "";
    for (let i = 0; i <arrProduct.length;i++) {
        data += `
        <div class="product-item">
         <div id="imgProduct">
        <a href=""><img src="${arrProduct[i].img}" alt="" width="310px" height="280px"></a>
         </div>
        </div>
        
       `
    }
    document.getElementById("displayElement").innerHTML = data;
}












//SlowSlide
function ChayQuangCao()
{
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
