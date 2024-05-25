
const list = document.querySelector('ul')
const showAllButton = document.querySelector('.show-all')
const mapAllButton = document.querySelector('.map-all')
const reduceAllbutton = document.querySelector('.reduce-all')
const filterAllButton = document.querySelector('.filter-all')
let myLi = ''


function formatCurrency(value) {
    const newCurrency = value.toLocaleString('pt-br', { minimumFractionDigits: 2 }) //sem R$ (stackoverflow.com)//

    return newCurrency
}

function showAll(productsArray) {
    myLi = ''

    productsArray.forEach((product) => {

        myLi = myLi + `
            <li>
                <img src=${product.src}>
                <p>${product.name} </p>
                <p class="item-price">R$ ${formatCurrency(product.price)}</p>
            </li>`


    })
    list.innerHTML = myLi
}

function mapAllItems() {
    const newPrices = menuOptions.map((products) => ({
        ...products, //spread operator//
        price: products.price * 0.9,

    }))
    showAll(newPrices)
}

function reduceAll() {
    const sumAll = menuOptions.reduce((acc, curr) => acc + curr.price, 0)
    list.innerHTML = `<li>
                        <p> O valor total dos itens é R$ ${formatCurrency(sumAll)}</p>
                     </li>`
}

function filterAllItems() {
    const filterJustVegan = menuOptions.filter((product) => product.vegan === true)

    showAll(filterJustVegan)
}


showAllButton.addEventListener('click', () => showAll(menuOptions))
mapAllButton.addEventListener('click', mapAllItems)
reduceAllbutton.addEventListener('click', reduceAll)
filterAllButton.addEventListener('click', filterAllItems)


