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
let = amountElement = document.getElementById('amount');
        let amount = amountElement.value;
        let render = (amount) => {
            amountElement.value = amount
        }
        // Handle Plus 
        let handLePlus = () =>{
            // alert();
            amount++;
            render(amount);
        }

        // handle minus 
        let handleMins = () => {
            if(amount > 1){
                amount--;
            }
            render(amount);
        }

        amountElement.addEventListener('input',()=> {
            amount = amountElement.value;
            amount = parseInt(amount);
            amount = (isNaN(amount) || amount == 0)?1:amount;
            render(amount);
        });
// end count 