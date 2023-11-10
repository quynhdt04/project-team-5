const product = [
    {id: 1, image: src="asset/images/giaynam1.jpg", title: "Giày Sandal nam - 2001 " ,core: "219.000 đ"},
    {id: 2,  image: src="asset/images/giaynam2.jpg", title: "Giày Sandal nam - 2002 " ,core: "219.000 đ"},
    {id: 3,  image: src="asset/images/giaynam3.jpg", title: "Giày Sandal nam - 2003 " ,core: "239.000 đ"},
    {id: 4,  image: src="asset/images/giaynam4.jpg", title: "Giày Sandal nam - 2004 " ,core: "239.000 đ"},
    {id: 5,  image: src="asset/images/giaynam5.jpg", title: "Giày Sandal nam - 2005 " ,core: "219.000 đ"},

    {id: 6,  image: src="asset/images/giaynam6.jpg", title: "Giày Sneaker nam - 2010 " ,core: "319.000 đ"},
    {id: 7,  image: src="asset/images/giaynam7.jpg", title: "Giày Sneaker nam - 2011 " ,core: "339.000 đ"},
    {id: 8,  image: src="asset/images/giaynam8.jpg", title: "Giày Sneaker nam - 2012 " ,core: "339.000 đ"},
    {id: 9,  image: src="asset/images/giaynam9.jpg", title: "Giày Sneaker nam - 2013 " ,core: "399.000 đ"},
    {id: 10,  image: src="asset/images/giaynam10.jpg", title: "Giày Sneaker nam - 2014 " ,core: "429.000 đ"},
    {id: 11,  image: src="asset/images/giaynam11.jpg", title: "Giày Sneaker nam - 2015 " ,core: "449.000 đ"},

    {id: 12,  image: src="asset/images/giaynam12.jpg", title: "Giày boot nam cổ thấp - 2020" ,core: "250.000 đ"},
    {id: 13,  image: src="asset/images/giaynam13.jpg", title: "Giày boot nam cổ thấp - 2021" ,core: "270.000 đ"},
    {id: 14,  image: src="asset/images/giaynam14.jpg", title: "Giày boot nam cổ thấp - 2022" ,core: "339.000 đ"},
    {id: 15,  image: src="asset/images/giaynam15.jpg", title: "Giày boot nam cổ thấp - 2023" ,core: "359.000 đ"},
    {id: 16,  image: src="asset/images/giaynam16.jpg", title: "Giày boot nam cổ cao - 2024" ,core: "339.000 đ"},
    {id: 17,  image: src="asset/images/giaynam17.jpg", title: "Giày boot nam cổ cao - 2025" ,core: "345.000 đ"},
    {id: 18,  image: src="asset/images/giaynam18.jpg", title: "Giày boot nam cổ cao - 2026" ,core: "450.000 đ"},
    {id: 19,  image: src="asset/images/giaynam19.jpg", title: "Giày boot nam cổ cao - 2027" ,core: "499.000 đ"},

    {id: 20,  image: src="asset/images/giaynam20.jpg", title: "Giày loafer nam cao cấp - 2040" ,core: "216.000 đ"},
    {id: 21,  image: src="asset/images/giaynam23.jpg", title: "Giày loafer nam sang trọng thời trang - 2041" ,core: "324.000 đ"},
    {id: 22,  image: src="asset/images/giaynam24.jpg", title: "Giày loafer nam đế bệt - 2042" ,core: "458.000 đ"},
    {id: 23,  image: src="asset/images/giaynam12.jpg", title: "Giày boot nam cổ thấp - 2020" ,core: "250.000 đ"},
    {id: 24,  image: src="asset/images/giaynam13.jpg", title: "Giày boot nam cổ thấp - 2021" ,core: "270.000 đ"},
]

//item 0, 1

//1: 0, 1, 2, 3
//2: 4, 5, 6, 7

//itemPerPage: 4, currentPage = 1

//start  = 0, end = itemPerPage

//start = (currentPage - 1) * itemPerPage
//end = currentPage * itemPerPage

let perPage = 8;
let currentPage = 1;
let start = 0;
let end = perPage;
const totalPages = Math.ceil(product.length / perPage);

const btnNext = document.querySelector('.btn-next');
const btnPrev = document.querySelector('.btn-pre');
// console.log(btnNext);

function changPage(currentPage){
    start = (currentPage - 1) * perPage;
    end = currentPage * perPage;
    console.log(start,end);
}


function renderProduct(){
    html = '';
    const content = product.map((item,index) => {
        if(index >= start && index < end){
            html += '<div class="inner-box">';
            html += ' <a href="gioi-thieu-san-pham.html" class="inner-image">';
            html += '<img src='+ item.image +' alt="">';
            html += '</a>';
            html +=  '<div class="inner-title">'+ item.title + '</div>';
            html += '<div class="inner-core">'+ item.core + '</div>';
            html += '</div>';
            return html;
        }
    })
    document.getElementById("product").innerHTML = html;
}
renderProduct();
renderListPage();


function renderListPage(){
    let html = '';
    html += `<li class="active"><a href="">${1}</a></li>`;
    for(let i = 2; i <= totalPages; i++){
        html +=`<li><a href="">${i}</a></li>`;
    }
    document.getElementById('number-page').innerHTML = html;
}


function changClick(){ 
    const currentPages = document.querySelectorAll('.number_page li');
    for(let i = 0; i < currentPages.length; i++){
        currentPages[i].addEventListener("click", () => {
            let value = i + 1;
            console.log(value);
            currentPage = value;
            $('.number_page li').removeClass('active');
            currentPages[i].classList.add('active');
            if(currentPage > 1 && currentPage < totalPages){
                $('.btn-pre').removeClass('btn-active');
                $('.btn-next').removeClass('btn-active');
            }
            if(currentPage === 1){
                $('.btn-pre').addClass('btn-active');
            }
            if(currentPage === totalPages){
                $('.btn-next').addClass('btn-active');
            }
            changPage(currentPage);
            renderProduct();
        })
    }
}
changClick();


btnNext.addEventListener("click", () => {
    currentPage++;
    if(currentPage > totalPages){
        currentPage = totalPages;
    }
    if(currentPage === totalPages){
        $('.btn-next').addClass('btn-active');
    }
    $('.btn-pre').removeClass('btn-active');
    $('.number_page li').removeClass('active');
    $(`.number_page li:eq(${currentPage-1})`).addClass('active');
    changPage(currentPage);
    renderProduct();
});

btnPrev.addEventListener("click", () => {
    currentPage--;
    if(currentPage <= 1){
        currentPage = 1;
    }
    if(currentPage === 1){
        $('.btn-pre').addClass('btn-active');
    }
    $('.btn-next').removeClass('btn-active');
    $('.number_page li').removeClass('active');
    $(`.number_page li:eq(${currentPage-1})`).addClass('active');
    changPage(currentPage);
    renderProduct();
});
