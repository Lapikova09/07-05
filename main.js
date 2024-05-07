async function GetData(){
    let a = await fetch('https://660c1c283a0766e85dbd6f9c.mockapi.io/v1/us')
    let b = await a.json()
    return b
}

let data = await GetData()

const page={
    'trainlist': document.querySelector('.train_list')
}

data.map((element)=>{
    if(element.id <=3){
    let card = document.createElement('li')
        card.innerHTML = `  <img src="/img/${element.icon}" alt="">
                            <div>${element.name}</div>
                            <a href="${element.page}"><button><img src="/img/Button (2).png" alt=""></button></a>` //element.page
        page.trainlist.append(card)
    }
})


var swiper = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true,
});

document.querySelector('#a').addEventListener("click", Show_all);
document.querySelector('#b').addEventListener("click", Go_back);

function Show_all(){
    let sw = document.querySelector('.reviews_swiper')
    let all = document.querySelector('.reviews_cont')
    let but_1 = document.querySelector('.show_all')
    let but_2 = document.querySelector('.go_back')
    let pic = document.querySelector('.swipe')
    sw.classList.remove('show')
    all.classList.add('show')
    but_1.classList.remove('show')
    but_2.classList.add('show')
    pic.classList.remove('show')
}  

function Go_back(){
    let sw = document.querySelector('.reviews_swiper')
    let all = document.querySelector('.reviews_cont')
    let but_1 = document.querySelector('.show_all')
    let but_2 = document.querySelector('.go_back')
    let pic = document.querySelector('.swipe')
    sw.classList.add('show')
    all.classList.remove('show')
    but_1.classList.add('show')
    but_2.classList.remove('show')
    pic.classList.add('show')
}