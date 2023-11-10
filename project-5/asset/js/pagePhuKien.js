const product = [
    {id: 1,  image: src="asset/images/phukien1.jpg", title: "Vớ nam nữ MWC - AT60", core: "25.000 đ" },
    {id: 2,  image: src="asset/images/phukien2.jpg", title: "Vớ nam nữ MWC - AT59", core: "30.000 đ" },
    {id: 3,  image: src="asset/images/phukien3.jpg", title: "Vớ nam nữ MWC - AT58", core: "30.000 đ" },
    {id: 4,  image: src="asset/images/phukien4.jpg", title: "Balô Túi Đeo Chéo MWC - 0837", core: "150.000 đ" },
    {id: 5,  image: src="asset/images/phukien5.jpg", title: "Dây giày thể thao bản dẹp MWC- 9006", core: "10.000 đ" },
    {id: 6,  image: src="asset/images/phukien6.jpg", title: "Dây giày Hoa Cúc MWC- 9005", core: "15.000 đ" },
    {id: 7,  image: src="asset/images/phukien7.jpg",  title: "Dây giày thể thao bản dẹp MWC- 9006", core: "10.000 đ" },
    {id: 8,  image: src="asset/images/phukien8.jpg",  title: "Dây giày thể thao bản tròn MWC- 9007", core: "15.000 đ"},
    {id: 9,  image: src="asset/images/phukien9.jpg",  title: "Vớ nam nữ MWC - AT06", core: "45.000 đ" },
    {id: 10,  image: src="asset/images/phukien10.jpg", title: "Vớ nam nữ MWC - AT16", core: "35.000 đ"  },
    {id: 11,  image: src="asset/images/phukien20.jpg",  title: "Vớ nam nữ MWC - AT106", core: "25.000 đ" },
    {id: 12,  image: src="asset/images/phukien5.jpg",title: "Vớ nam nữ MWC - AT11", core: "39.000 đ" },
    {id: 13,  image: src="asset/images/phukien10.jpg", title: "Vớ nam nữ MWC - AT13", core: "35.000 đ" },
    {id: 14,  image: src="asset/images/phukien9.jpg",  title: "Vớ nam nữ MWC - AT26", core: "39.000 đ" },
    {id: 15,  image: src="asset/images/phukien18.jpg",  title: "Vớ nam nữ MWC - AT32", core: "39.000 đ" }, 
    {id: 16,  image: src="asset/images/phukien19.jpg",  title: "Vớ nam nữ MWC - AT35", core: "39.000 đ" },

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
