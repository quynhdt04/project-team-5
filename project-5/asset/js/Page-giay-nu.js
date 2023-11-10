const product = [
    {id: 1, image: src="asset/images/giaynu20.jpg", title: "Giày Sandal nữ - 3001 " ,core: "256.000 đ"},
    {id: 2, image: src="asset/images/giaynu2.jpg", title: "Giày Sandal nữ - 3002 " ,core: "388.000 đ"},
    {id: 3, image: src="asset/images/giaynu3.jpg", title: "Giày Sandal nữ quai ngang - 3003 " ,core: "275.000 đ"},
    {id: 4, image: src="asset/images/giaynu17.jpg", title: "Giày Sandal nữ gót vuông - 3004 " ,core: "299.000 đ"},
    {id: 5, image: src="asset/images/giaynu5.jpg", title: "Giày Sandal nữ gót vuông - 3005 " ,core: "289.000 đ"}, 
    {id: 6, image: src="asset/images/giaynu6.jpg", title: "Giày Sandal nữ đế cao - 3006 " ,core: "315.000 đ"},
    {id: 7, image: src="asset/images/giaynu7.jpg", title: "Giày Sandal nữ đế cao - 3007 " ,core: "319.000 đ"},
    {id: 8, image: src="asset/images/giaynu8.jpg", title: "Giày cao gót nữ - 3010" ,core: "449.000 đ"},
    {id: 9, image: src="asset/images/giaynu9.jpg", title: "Giày cao gót nữ - 3011" ,core: "457.000 đ"},
    {id: 10, image: src="asset/images/giaynu10.jpg", title: "Giày cao gót nữ - 3012" ,core: "432.000 đ"},
    {id: 11, image: src="asset/images/giaynu11.jpg", title: "Giày cao gót nữ - 3013" ,core: "461.000 đ"},
    {id: 12, image: src="asset/images/giaynu22.jpg", title: "Giày cao gót nữ - 3014" ,core: "437.000 đ"},
    {id: 13, image: src="asset/images/giaynu13.jpg", title: "Giày cao gót nữ - 3015" ,core: "429.000 đ"},
    {id: 14, image: src="asset/images/giaynu14.jpg", title: "Giày cao gót nữ - 3016" ,core: "489.000 đ"},
    {id: 15, image: src="asset/images/giaynu15.jpg", title: "Giày boot nữ cổ thấp - 3020 " ,core: "331.000 đ"},
    {id: 16, image: src="asset/images/giaynu21.jpg", title: "Giày boot nữ cổ thấp - 3021 " ,core: "375.000 đ"},
    {id: 17, image: src="asset/images/giaynu17.jpg", title: "Giày boot nữ cổ thấp - 3022 " ,core: "415.000 đ"},
    {id: 18, image: src="asset/images/giaynu22.jpg", title: "Giày boot nữ cổ cao - 3023 " ,core: "519.000 đ"},
    {id: 19, image: src="asset/images/giaynu19.jpg", title: "Giày boot nữ cổ cao - 3024 " ,core: "519.000 đ"},
    {id: 20, image: src="asset/images/giaynu20.jpg", title: "Giày bút bê nữ - 3030" ,core: "180.000 đ"},
    {id: 21, image: src="asset/images/giaynu21.jpg", title: "Giày bút bê nữ - 3031" ,core: "150.000 đ"},
    {id: 22, image: src="asset/images/giaynu22.jpg", title: "Giày bút bê nữ - 3032" ,core: "170.000 đ"},
    {id: 23, image: src="asset/images/giaynu4.jpg", title: "Giày bút bê nữ - 3033" ,core: "180.000 đ"},
    {id: 24, image: src="asset/images/giaynu12.jpg", title: "Giày thể thao nữ - 3050" ,core: "589.000 đ"},
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
