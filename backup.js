/*const list = document.querySelector('ul')
const showAllButton = document.querySelector('.show-all')
const mapAllButton = document.querySelector('.map-all')
let myLi = ''
 

 function showAll(productsArray){
    myLi=''

    productsArray.forEach((product) => {
        
        myLi = myLi + `
            <li>
                <img src=${product.src}>
                <p>${product.name} </p>
                <p class="item-price">R$ ${product.price }</p>
            </li>`
    
            
    })
    list.innerHTML = myLi  
}

function mapAllItems (){
    
    const newPrices = menuOptions.map ((product) => ({
        ...product, //spread operator//
        price: product.price*0.9, //dar 10% de desconto//
       

    }))
    showAll(newPrices)
    list.innerHTML = myLi  
    console.log(newPrices)
}


showAllButton.addEventListener('click', () => showAll (menuOptions))
mapAllButton.addEventListener('click', mapAllItems)
*/