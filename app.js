import {data as menu} from './data.js'
let btns=document.getElementsByClassName('btn')
let itemName=document.getElementById('item-name')
let itemPrice=document.getElementById('item-price')
let item=document.getElementById('item')
let sectionDiv=document.getElementById('section-div')
function displayItems(menu){
    let items=menu.map((item)=>{
        return `<article id="item">
        <img src=${item.image} alt="">
        <div id="item-div">
            <header id="header">
                <p id="item-name">${item.name}</p>
                <p id="item-price">${item.price}</p>
            </header>
            <p>${item.des}</p>
        </div>  
    </article>`
    })
    sectionDiv.innerHTML=items
}
window.addEventListener('DOMContentLoaded',()=>{
    displayItems(menu)
})
// console.log(btns);
btns=[...btns]
btns.forEach(function (btn) {
    btn.addEventListener('click',(e)=>{
        if(e.target.dataset.id=='all'){
            return displayItems(menu)
        }
        let category=e.target.dataset.id
        let displayCategory=menu.filter((item)=>{
            return item.category===category
        })
        displayItems(displayCategory)
    })
})