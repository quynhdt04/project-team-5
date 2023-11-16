var imgMain = document.querySelector('.img-main');
var listImg = document.querySelectorAll('.list-image img');
var prevBnt = document.querySelector('.prev');
var nextBnt = document.querySelector('.next');

var currentIndex = 0;


function updateImageByIndex(index){

    document.querySelectorAll('.list-image div').forEach(item=>{
        item.classList.remove('act')
    })

    currentIndex = index;
    imgMain.src = listImg[index].getAttribute('src')
    listImg[index].parentElement.classList.add('act')
}

listImg.forEach((imgElement, index)=>{

    imgElement.addEventListener('click', e=>{
        imgMain.style.opacity = '0'

        setTimeout(() => {
            updateImageByIndex(index)
            imgMain.style.opacity = '1'
        }, 400);
    })
})

prevBnt.addEventListener('click', e=>{

    if(currentIndex == 0){
        currentIndex = listImg.length - 1
    }
    else{
        currentIndex--
    }

    imgMain.style.animation = ''
    setTimeout(() => {
        updateImageByIndex(currentIndex)
        imgMain.style.animation = 'slideLeft 0.4s ease-in-out forwards'
    }, 200);
})

nextBnt.addEventListener('click', e=>{

    if(currentIndex == listImg.length-1){
        currentIndex = 0
    }
    else{
        currentIndex++
    }

    imgMain.style.animation = ''
    setTimeout(() => {
        updateImageByIndex(currentIndex)
        imgMain.style.animation = 'slideRight 0.4s ease-in-out forwards'
    }, 200);
})

updateImageByIndex(0)


// count 
// let = amountElement = document.getElementById('amount');
//         let amount = amountElement.value;
//         let render = (amount) => {
//             amountElement.value = amount
//         }
//         // Handle Plus 
//         let handLePlus = () =>{
//             // alert();
//             amount++;
//             render(amount);
//         }

//         // handle minus 
//         let handleMins = () => {
//             if(amount > 1){
//                 amount--;
//             }
//             render(amount);
//         }

//         amountElement.addEventListener('input',()=> {
//             amount = amountElement.value;
//             amount = parseInt(amount);
//             amount = (isNaN(amount) || amount == 0)?1:amount;
//             render(amount);
//         });
// end count 


//cart

// const btn = document.getElementById("add-product");
// // console.log(btn);

// btn.addEventListener("click", function(e){
//     let productImg = document.querySelector(".main .img-main").src
//     console.log(productImg)
//     let productName = document.querySelector("#content-title").innerText
//     console.log(productName)
//     let productPrice = document.querySelector("#core span").innerText
//     console.log(productPrice)
//     addCart(productPrice, productImg, productName)
// })

// function addCart(productPrice, productImg, productName){
//     let addTr = document.createElement("tr")
//     let cartItem = document.querySelectorAll("tbody tr")
//     for(let i = 0; i < cartItem.length; i++){
//         let productT = document.querySelectorAll(".name")
//         if(productT[i].innerHTML == productName){
//             alert("Sản phẩm đã được thêm vào giỏ hàng")
//             return;
//         }
//     }
//     let trContent = '<td><img src="'+productImg+'" alt=""><span class="name">'+productName+'</span></td> <td> <p><span>'+productPrice+'</span><sup>đ</sup></p></td><td><input type="number" value="1" min="0"></td><td><span class="cart-delete">Xóa</span></td>'
//     addTr.innerHTML = trContent
//     let cartTable = document.querySelector("tbody")
//     cartTable.append(addTr)
//     cartTotal()
//     deleteCart()
//     notification()
// }

// function cartTotal(){
//     let cartItem = document.querySelectorAll("tbody tr")
//     let total = 0
//     for(let i = 0; i < cartItem.length; i++){
//         let inputValue = cartItem[i].querySelector("input").value;
//         let productPrice = cartItem[i].querySelector("p span").innerHTML
//         let totalTam = inputValue * productPrice * 1000
//         total = total + totalTam 
//     }
//     let cartTotal = document.querySelector(".price-total span")
//     // let cartPrice = document.querySelector("")
//     cartTotal.innerHTML = total.toLocaleString('de-DE')
//     inputChange()
// }

// function deleteCart(){
//     let cartItem = document.querySelectorAll("tbody tr")
//     for(let i = 0; i < cartItem.length; i++){
//         let product = document.querySelectorAll(".cart-delete")
//         product[i].addEventListener("click", function(e){
//             let cartDelete = e.target
//             let cartItem = cartDelete.parentElement.parentElement
//             cartItem.remove()
//             cartTotal()
//         })
//     }
// }

// function inputChange(){
//     let cartItem = document.querySelectorAll("tbody tr")
//     for(let i =0; i < cartItem.length; i++){
//         let inputValue = cartItem[i].querySelector("input")
//         inputValue.addEventListener("change", function(){
//             cartTotal()
//         })
//     }
// }



// const cartShop = document.querySelector("#cartshop")
// // console.log(cartShop)
// const btnClose = document.querySelector(".fa-x")

// cartShop.addEventListener("click", () =>{
//     document.querySelector(".cart").style.display = "block"
// })

// btnClose.addEventListener("click", () =>{
//     document.querySelector(".cart").style.display = "none"
// })


// document.addEventListener('DOMContentLoaded', function() {
//     document.querySelector('.notReload').addEventListener('click', function(event) {
//                 event.preventDefault();  
//       });

// });  

// function Logout() {
//     // localStorage.removeItem(‘token’);
//     window.location.href = "index.html"//chuyển hướng đến trang chủ
// }



// function notification(){
//     const order = document.getElementById("closeOrder");
//     console.log(order);
//     order.addEventListener("click", () =>{
//         alert("Mua hàng thành công");
//     })
// }


const shopping = document.getElementById("shopping");
console.log(shopping);

shopping.addEventListener("click", () =>{
    alert("Bạn phải đăng nhập mới mua được hàng");
})