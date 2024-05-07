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
    /*const firstParent = e.target.parentElement
    const secondParent = firstParent.parentElement
    const releaseCont = secondParent.parentElement
    const productCont = releaseCont.parentElement
    
    const productName= productCont.querySelector('.adidas').innerText
    const productPrice= productCont.querySelector('.blue_text').innerText
    const productIcon = productCont.querySelector('.img1').src*/

    /*const product = {name: productName, price: productPrice, icon: productIcon}*/
    const uuidv4 = "10000000-1000-4000-8000-100000000000".replace(/[018]/g, c =>
        (+c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> +c / 4).toString(16)
      );

    const product = {id: uuidv4, name: data[0].name, price: data[0].price, icon: data[0].icon}
    console.log(product.name)
    let cardArrayS = []
    if(localStorage.getItem('cart')){
        cardArrayS = JSON.parse(localStorage.getItem('cart'))
    }
    
    cardArrayS.push(product)
    localStorage.setItem('cart', JSON.stringify(cardArrayS))
    
}
const button = document.querySelector('.add_to_cart')
    button.addEventListener('click', add)

/*function main(){
    const button = document.querySelector('.add_to_cart')
    button.addEventListener('click', add)
}

document.addEventListener('DOMContentLoaded', main)*/
