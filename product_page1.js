async function GetData(){
    let a = await fetch('https://660c1c283a0766e85dbd6f9c.mockapi.io/v1/us')
    let b = await a.json()
    return b
}
let data = await GetData()

let page = document.querySelector('.train_list')

data.map((element)=>{
    if(element.id <=3){
    let card = document.createElement('li')
        card.innerHTML = `  <img src="/img/${element.icon}" alt="">
                            <div>${element.name}</div>
                            <a href="${element.page}"><button><img src="/img/Button (2).png" alt=""></button></a>` //element.page
        page.append(card)
    }
})

function add(){
    const product = {name: data[1].name, price: data[1].price, icon: data[1].icon}
    let cardArrayS = []
    if(localStorage.getItem('cart')){
        cardArrayS = JSON.parse(localStorage.getItem('cart'))
    }
    
    cardArrayS.push(product)
    localStorage.setItem('cart', JSON.stringify(cardArrayS))
   
}
const button = document.querySelector('.add_to_cart1')
button.addEventListener('click', add)

