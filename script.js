const list = document.querySelector('.abacate')
const buttonShowAll = document.querySelector('.show-all') 
const buttonMapAll = document.querySelector('.map-all')
const sumAll = document.querySelector('.sum-all')
const filterAll = document.querySelector('.filter-all')



function showAll (productArray) {
let myLi = ''

productArray.forEach ((product) => {
    myLi = myLi +  `
         <li> 
            <img src= ${product.src}>
            <p>${product.name}</p>
            <p  class="item-price">R$ ${product.price}</p>
        </li>
    `
})

list.innerHTML = myLi
}

function mapAllItems (){
    const newPrice = menuOptions.map((product) => ({
        ...product, // Spread Operator
        price :product.price * 0.9,
   

    
    }))
    showAll(newPrice)
    // console.log(newPrice)
}

function sumAllItems () {
    const totalValue = menuOptions.reduce((acc, curr) => acc + curr.price, 0)
    
    list.innerHTML = `
        <li> 
            <p>  O valor Total dos itens  é de R$ ${totalValue}</p>
        </li>
    `
}

function filterAllItems(){
    const filterJustVegan = menuOptions.filter((product) => product.vegan===true)
    showAll(filterJustVegan)
}


buttonShowAll.addEventListener('click', () => showAll(menuOptions))
buttonMapAll.addEventListener('click', mapAllItems)
sumAll.addEventListener('click', sumAllItems)
filterAll.addEventListener('click', filterAllItems)











// function clickButton () {
//     list.innerHTML = `
//         <li> 
//             <img src="./img/xbacon.png" alt="">
//             <p>X-Bacon Egg</p>
//             <p  class="item-price">R$ 30,00</p>
//         </li>
        
// `
    
// }
