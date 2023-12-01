
let list = document.getElementById('product');
let filter = document.querySelector('.header .inner-social .inner-search');
let listProducts = [
     // balo
     { id: 1, image: src = "asset/images/balo1.jpg", title: "Balô MWC BALO- 1208", core: "250.000 đ" },
     { id: 2, image: src = "asset/images/balo2.jpg", title: "Balô MWC BALO- 1204", core: "250.000 đ" },
     { id: 3, image: src = "asset/images/balo3.jpg", title: "Balô MWC BALO- 1203", core: "235.000 đ" },
     { id: 4, image: src = "asset/images/balo4.jpg", title: "Balô Túi Đeo Chéo MWC - 0837", core: "150.000 đ" },
     { id: 5, image: src = "asset/images/balo5.jpg", title: "Balô MWC BALO- 1207", core: "295.000 đ" },
     { id: 6, image: src = "asset/images/balo6.jpg", title: "Balô MWC BALO- 1206", core: "295.000 đ" },
     { id: 7, image: src = "asset/images/balo7.jpg", title: "Balô MWC BALO- 1205", core: "250.000 đ" },
     { id: 8, image: src = "asset/images/balo8.jpg", title: "Balô MWC BALO- 1187", core: "195.000 đ" },
     { id: 9, image: src = "asset/images/balo9.jpg", title: "Balô MWC BALO- 1193", core: "295.000 đ" },
     { id: 10, image: src = "asset/images/balo10.jpg", title: "Balô MWC BALO- 1201", core: "250.000 đ" },
     { id: 11, image: src = "asset/images/balo11.jpg", title: "Balô MWC BALO- 1200", core: "295.000 đ" },
     { id: 12, image: src = "asset/images/balo12.jpg", title: "Balô MWC BALO- 1199", core: "275.000 đ" },
     { id: 13, image: src = "asset/images/balo13.jpg", title: "Balô MWC BALO- 1198", core: "275.000 đ" },
     { id: 14, image: src = "asset/images/balo14.jpg", title: "Balô MWC BALO- 1197", core: "275.000 đ" },
     { id: 15, image: src = "asset/images/balo15.jpg", title: "Balô MWC BALO- 1196", core: "295.000 đ" },
     { id: 16, image: src = "asset/images/balo16.jpg", title: "Balô MWC BALO- 1195", core: "295.000 đ" },
     { id: 17, image: src = "asset/images/balo20.jpg", title: "Balô MWC BALO- 1192", core: "235.000 đ" },
     { id: 18, image: src = "asset/images/balo18.jpg", title: "Balô MWC BALO- 1185", core: "295.000 đ" },
     { id: 19, image: src = "asset/images/balo19.jpg", title: "Balô MWC BALO- 1183", core: "195.000 đ" },
     { id: 20, image: src = "asset/images/balo2.jpg", title: "Balô MWC BALO- 1191", core: "295.000 đ" },
     { id: 21, image: src = "asset/images/balo15.jpg", title: "Balô MWC BALO- 1189", core: "250.000 đ" },
     { id: 22, image: src = "asset/images/balo8.jpg", title: "Balô MWC BALO- 1188", core: "250.000 đ" },
     { id: 23, image: src = "asset/images/balo4.jpg", title: "Balô MWC BALO- 1190", core: "295.000 đ" },
     { id: 24, image: src = "asset/images/balo22.jpg", title: "Balô MWC BALO- 1187", core: "295.000 đ" },
     //giay nam
     {id: 25, image: src="asset/images/giaynam1.jpg", title: "Giày Sandal nam - 2001 " ,core: "219.000 đ"},
     {id: 26,  image: src="asset/images/giaynam2.jpg", title: "Giày Sandal nam - 2002 " ,core: "219.000 đ"},
     {id: 27,  image: src="asset/images/giaynam3.jpg", title: "Giày Sandal nam - 2003 " ,core: "239.000 đ"},
     {id: 28,  image: src="asset/images/giaynam4.jpg", title: "Giày Sandal nam - 2004 " ,core: "239.000 đ"},
     {id: 29,  image: src="asset/images/giaynam5.jpg", title: "Giày Sandal nam - 2005 " ,core: "219.000 đ"},
 
     {id: 30,  image: src="asset/images/giaynam6.jpg", title: "Giày Sneaker nam - 2010 " ,core: "319.000 đ"},
     {id: 31,  image: src="asset/images/giaynam7.jpg", title: "Giày Sneaker nam - 2011 " ,core: "339.000 đ"},
     {id: 32,  image: src="asset/images/giaynam8.jpg", title: "Giày Sneaker nam - 2012 " ,core: "339.000 đ"},
     {id: 33,  image: src="asset/images/giaynam9.jpg", title: "Giày Sneaker nam - 2013 " ,core: "399.000 đ"},
     {id: 34,  image: src="asset/images/giaynam10.jpg", title: "Giày Sneaker nam - 2014 " ,core: "429.000 đ"},
     {id: 35,  image: src="asset/images/giaynam11.jpg", title: "Giày Sneaker nam - 2015 " ,core: "449.000 đ"},
 
     {id: 36,  image: src="asset/images/giaynam12.jpg", title: "Giày boot nam cổ thấp - 2020" ,core: "250.000 đ"},
     {id: 37,  image: src="asset/images/giaynam13.jpg", title: "Giày boot nam cổ thấp - 2021" ,core: "270.000 đ"},
     {id: 38,  image: src="asset/images/giaynam14.jpg", title: "Giày boot nam cổ thấp - 2022" ,core: "339.000 đ"},
     {id: 39,  image: src="asset/images/giaynam15.jpg", title: "Giày boot nam cổ thấp - 2023" ,core: "359.000 đ"},
     {id: 40,  image: src="asset/images/giaynam16.jpg", title: "Giày boot nam cổ cao - 2024" ,core: "339.000 đ"},
     {id: 41,  image: src="asset/images/giaynam17.jpg", title: "Giày boot nam cổ cao - 2025" ,core: "345.000 đ"},
     {id: 42,  image: src="asset/images/giaynam18.jpg", title: "Giày boot nam cổ cao - 2026" ,core: "450.000 đ"},
     {id: 43,  image: src="asset/images/giaynam19.jpg", title: "Giày boot nam cổ cao - 2027" ,core: "499.000 đ"},
 
     {id: 44,  image: src="asset/images/giaynam20.jpg", title: "Giày loafer nam cao cấp - 2040" ,core: "216.000 đ"},
     {id: 45,  image: src="asset/images/giaynam23.jpg", title: "Giày loafer nam sang trọng thời trang - 2041" ,core: "324.000 đ"},
     {id: 46,  image: src="asset/images/giaynam24.jpg", title: "Giày loafer nam đế bệt - 2042" ,core: "458.000 đ"},
     {id: 47,  image: src="asset/images/giaynam12.jpg", title: "Giày boot nam cổ thấp - 2020" ,core: "250.000 đ"},
     {id: 48,  image: src="asset/images/giaynam13.jpg", title: "Giày boot nam cổ thấp - 2021" ,core: "270.000 đ"},
     //giay nu
     {id: 49, image: src="asset/images/giaynu20.jpg", title: "Giày Sandal nữ - 3001 " ,core: "256.000 đ"},
     {id: 50, image: src="asset/images/giaynu2.jpg", title: "Giày Sandal nữ - 3002 " ,core: "388.000 đ"},
     {id: 51, image: src="asset/images/giaynu3.jpg", title: "Giày Sandal nữ quai ngang - 3003 " ,core: "275.000 đ"},
     {id: 52, image: src="asset/images/giaynu17.jpg", title: "Giày Sandal nữ gót vuông - 3004 " ,core: "299.000 đ"},
     {id: 53, image: src="asset/images/giaynu5.jpg", title: "Giày Sandal nữ gót vuông - 3005 " ,core: "289.000 đ"}, 
     {id: 54, image: src="asset/images/giaynu6.jpg", title: "Giày Sandal nữ đế cao - 3006 " ,core: "315.000 đ"},
     {id: 55, image: src="asset/images/giaynu7.jpg", title: "Giày Sandal nữ đế cao - 3007 " ,core: "319.000 đ"},
     {id: 56, image: src="asset/images/giaynu8.jpg", title: "Giày cao gót nữ - 3010" ,core: "449.000 đ"},
     {id: 57, image: src="asset/images/giaynu9.jpg", title: "Giày cao gót nữ - 3011" ,core: "457.000 đ"},
     {id: 58, image: src="asset/images/giaynu10.jpg", title: "Giày cao gót nữ - 3012" ,core: "432.000 đ"},
     {id: 59, image: src="asset/images/giaynu11.jpg", title: "Giày cao gót nữ - 3013" ,core: "461.000 đ"},
     {id: 60, image: src="asset/images/giaynu22.jpg", title: "Giày cao gót nữ - 3014" ,core: "437.000 đ"},
     {id: 61, image: src="asset/images/giaynu13.jpg", title: "Giày cao gót nữ - 3015" ,core: "429.000 đ"},
     {id: 62, image: src="asset/images/giaynu14.jpg", title: "Giày cao gót nữ - 3016" ,core: "489.000 đ"},
     {id: 63, image: src="asset/images/giaynu15.jpg", title: "Giày boot nữ cổ thấp - 3020 " ,core: "331.000 đ"},
     {id: 64, image: src="asset/images/giaynu21.jpg", title: "Giày boot nữ cổ thấp - 3021 " ,core: "375.000 đ"},
     {id: 65, image: src="asset/images/giaynu17.jpg", title: "Giày boot nữ cổ thấp - 3022 " ,core: "415.000 đ"},
     {id: 66, image: src="asset/images/giaynu22.jpg", title: "Giày boot nữ cổ cao - 3023 " ,core: "519.000 đ"},
     {id: 67, image: src="asset/images/giaynu19.jpg", title: "Giày boot nữ cổ cao - 3024 " ,core: "519.000 đ"},
     {id: 68, image: src="asset/images/giaynu20.jpg", title: "Giày bút bê nữ - 3030" ,core: "180.000 đ"},
     {id: 69, image: src="asset/images/giaynu21.jpg", title: "Giày bút bê nữ - 3031" ,core: "150.000 đ"},
     {id: 70, image: src="asset/images/giaynu22.jpg", title: "Giày bút bê nữ - 3032" ,core: "170.000 đ"},
     {id: 71, image: src="asset/images/giaynu4.jpg", title: "Giày bút bê nữ - 3033" ,core: "180.000 đ"},
     {id: 72, image: src="asset/images/giaynu12.jpg", title: "Giày thể thao nữ - 3050" ,core: "589.000 đ"},
     //sp bán chạy
     {id: 73,  image: src="asset/images/phukien1.jpg", title: "Vớ nam nữ MWC - AT60", core: "25.000 đ" },
     {id: 74,  image: src="asset/images/giaynam2.jpg", title: "Giày Thể Thao Nam MWC NATT- 5462", core: "275.000 đ" },
     {id: 75,  image: src="asset/images/giaynu3.jpg",  title: "Giày sandal nữ MWC NUSD- 2420", core: "235.000 đ" },
     {id: 76,  image: src="asset/images/balo4.jpg", title: "Balô Túi Đeo Chéo MWC - 0837", core: "150.000 đ" },
     {id: 77,  image: src="asset/images/giaynam5.jpg", title: "Dây giày thể thao bản dẹp MWC- 9006", core: "10.000 đ" },
     {id: 78,  image: src="asset/images/giaynu6.jpg",  title: "Giày thể thao nữ MWC NUTT- A114", core: "345.000 đ" },
     {id: 79,  image: src="asset/images/balo7.jpg",  title: "Balô MWC BALO- 1178", core: "295.000 đ"  },
     {id: 80,  image: src="asset/images/giaynu8.jpg",  title: "Giày thể thao nữ MWC NUTT- 0782", core: "295.000 đ" },
     {id: 81,  image: src="asset/images/phukien9.jpg",  title: "Giày thể thao nữ MWC NUTT- A114", core: "345.000 đ" },
     {id: 82,  image: src="asset/images/phukien10.jpg", title: "Vớ nam nữ MWC - AT16", core: "35.000 đ"  },
     {id: 83,  image: src="asset/images/giaynu10.jpg",  title: "Giày búp bê MWC NUBB- 2289", core: "150.000 đ" },
     {id: 84,  image: src="asset/images/giaynu5.jpg",title: "Dép nữ MWC NUDE- 8333", core: "235.000 đ" },
     {id: 85,  image: src="asset/images/phukien10.jpg", title: "Vớ nam nữ MWC - AT13", core: "35.000 đ" },
     {id: 86,  image: src="asset/images/balo9.jpg",  title: "Balô MWC BALO- 1182", core: "195.000 đ" },
     {id: 87,  image: src="asset/images/giaynu18.jpg",   title: "Dép nữ MWC NUDE- 8324", core: "195.000 đ"}, 
     {id: 88,  image: src="asset/images/giaynu19.jpg", title: "Giày thể thao nữ MWC NUTT- 0782", core: "295.000 đ" },
     //phụ kiện
     {id: 89,  image: src="asset/images/phukien1.jpg", title: "Vớ nam nữ MWC - AT60", core: "25.000 đ" },
     {id: 90,  image: src="asset/images/phukien2.jpg", title: "Vớ nam nữ MWC - AT59", core: "30.000 đ" },
     {id: 91,  image: src="asset/images/phukien3.jpg", title: "Vớ nam nữ MWC - AT58", core: "30.000 đ" },
     {id: 92,  image: src="asset/images/phukien4.jpg", title: "Balô Túi Đeo Chéo MWC - 0837", core: "150.000 đ" },
     {id: 93,  image: src="asset/images/phukien5.jpg", title: "Dây giày thể thao bản dẹp MWC- 9006", core: "10.000 đ" },
     {id: 94,  image: src="asset/images/phukien6.jpg", title: "Dây giày Hoa Cúc MWC- 9005", core: "15.000 đ" },
     {id: 95,  image: src="asset/images/phukien7.jpg",  title: "Dây giày thể thao bản dẹp MWC- 9006", core: "10.000 đ" },
     {id: 96,  image: src="asset/images/phukien8.jpg",  title: "Dây giày thể thao bản tròn MWC- 9007", core: "15.000 đ"},
     {id: 97,  image: src="asset/images/phukien9.jpg",  title: "Vớ nam nữ MWC - AT06", core: "45.000 đ" },
     {id: 98,  image: src="asset/images/phukien10.jpg", title: "Vớ nam nữ MWC - AT16", core: "35.000 đ"  },
     {id: 99,  image: src="asset/images/phukien20.jpg",  title: "Vớ nam nữ MWC - AT106", core: "25.000 đ" },
     {id: 100,  image: src="asset/images/phukien5.jpg",title: "Vớ nam nữ MWC - AT11", core: "39.000 đ" },
     {id: 101,  image: src="asset/images/phukien10.jpg", title: "Vớ nam nữ MWC - AT13", core: "35.000 đ" },
     {id: 102,  image: src="asset/images/phukien9.jpg",  title: "Vớ nam nữ MWC - AT26", core: "39.000 đ" },
     {id: 103,  image: src="asset/images/phukien18.jpg",  title: "Vớ nam nữ MWC - AT32", core: "39.000 đ" }, 
     {id: 104,  image: src="asset/images/phukien19.jpg",  title: "Vớ nam nữ MWC - AT35", core: "39.000 đ" }, 

];
let productFilter = listProduct;

showProduct(productFilter);
function showProduct(productFilter){
    list.innerHTML = '';

    productFilter.forEach(item => {
        let newItem = document.createElement('div');
        newItem.classList.add('item');
      
        let newImage = document.createElement('img');
        newImage.src = item.image;
        newItem.appendChild(newImage);
      
        let newLink = document.createElement('a');
        newLink.href = 'gioi-thieu-san-pham.html';
        newLink.classList.add('inner-image');
        newLink.appendChild(newImage);
      
        let newTitle = document.createElement('div');
        newTitle.classList.add('inner-title');
        newTitle.innerText = item.title;
      
        let newCore = document.createElement('div');
        newCore.classList.add('inner-core');
        newCore.innerText = item.core;
      
        newItem.appendChild(newLink);
        newItem.appendChild(newTitle);
        newItem.appendChild(newCore);
      
        list.appendChild(newItem);
      });
}

filter.addEventListener('submit', function(event){
    event.preventDefault();
    let valueFilter = event.target.element;
    productFilter = listProducts.filter(item =>{
        if(valueFilter.title.value != ''){
            if(!item.title.includes(valueFilter.title.value)){
                return false;
            }
        }
    })
    showProduct(productFilter);
})


//#list .item img{
//    width: 100%;
//    height: 100%;
//    object-fit: cover;
//    overflow: hidden;
//}

//#list .item .title{
//    text-align: center;
//}

//#list .item .core{
//    font-size: 20px;
//    text-align: center;
//}
