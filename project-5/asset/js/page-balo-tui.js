const product = [
    {id: 1,  image: src="asset/images/balo1.jpg", title: "Balô MWC BALO- 1208", core: "250.000 đ" },
    {id: 2,  image: src="asset/images/balo2.jpg", title: "Balô MWC BALO- 1204", core: "250.000 đ" },
    {id: 3,  image: src="asset/images/balo3.jpg", title: "Balô MWC BALO- 1203", core: "235.000 đ" },
    {id: 4,  image: src="asset/images/balo4.jpg", title: "Balô Túi Đeo Chéo MWC - 0837", core: "150.000 đ" },
    {id: 5,  image: src="asset/images/balo5.jpg", title: "Balô MWC BALO- 1207", core: "295.000 đ" },
    {id: 6,  image: src="asset/images/balo6.jpg", title: "Balô MWC BALO- 1206", core: "295.000 đ" },
    {id: 7,  image: src="asset/images/balo7.jpg", title: "Balô MWC BALO- 1205", core: "250.000 đ" },
    {id: 8,  image: src="asset/images/balo8.jpg", title: "Balô MWC BALO- 1187", core: "195.000 đ" },
    {id: 9,  image: src="asset/images/balo9.jpg", title: "Balô MWC BALO- 1193", core: "295.000 đ" },
    {id: 10,  image: src="asset/images/balo10.jpg", title: "Balô MWC BALO- 1201", core: "250.000 đ" },
    {id: 11,  image: src="asset/images/balo11.jpg", title: "Balô MWC BALO- 1200", core: "295.000 đ" },
    {id: 12,  image: src="asset/images/balo12.jpg", title: "Balô MWC BALO- 1199", core: "275.000 đ" },
    {id: 13,  image: src="asset/images/balo13.jpg", title: "Balô MWC BALO- 1198", core: "275.000 đ" },
    {id: 14,  image: src="asset/images/balo14.jpg", title: "Balô MWC BALO- 1197", core: "275.000 đ" },
    {id: 15,  image: src="asset/images/balo15.jpg", title: "Balô MWC BALO- 1196", core: "295.000 đ" }, 
    {id: 16,  image: src="asset/images/balo16.jpg", title: "Balô MWC BALO- 1195", core: "295.000 đ" },
    {id: 17,  image: src="asset/images/balo20.jpg", title: "Balô MWC BALO- 1192", core: "235.000 đ" },
    {id: 18,  image: src="asset/images/balo18.jpg", title: "Balô MWC BALO- 1185", core: "295.000 đ" },
    {id: 19,  image: src="asset/images/balo19.jpg", title: "Balô MWC BALO- 1183", core: "195.000 đ" },
    {id: 20,  image: src="asset/images/balo2.jpg", title: "Balô MWC BALO- 1191", core: "295.000 đ" },
    {id: 21,  image: src="asset/images/balo15.jpg", title: "Balô MWC BALO- 1189", core: "250.000 đ" }, 
    {id: 22,  image: src="asset/images/balo8.jpg", title: "Balô MWC BALO- 1188", core: "250.000 đ" },
    {id: 23,  image: src="asset/images/balo4.jpg", title: "Balô MWC BALO- 1190", core: "295.000 đ" },
    {id: 24,  image: src="asset/images/balo22.jpg", title: "Balô MWC BALO- 1187", core: "295.000 đ" },

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
