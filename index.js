document.addEventListener('DOMContentLoaded',()=>{
console.log("connected")
fetchBrand()


})




function fetchBrand(){
    fetch('http://localhost:3000/brands')
    .then(resp=>resp.json())
    .then(data => {
        data.forEach(brand => {
            buildingBrandCard(brand)
            
            
        })
    })
}

function getsBrandList(){
    return document.querySelector('.brands-list')

}

function buildingBrandCard(data){
    
    let sneakerList = document.createElement('ul')
    // sneakerList.className = "hidden"
    sneakerList.style.display = 'none'
    
    let shoeList = data.shoes.forEach(shoe => buildingShoeCard(shoe, sneakerList))
    let parentDiv = document.querySelector('.brands-list')
    
    let card = document.createElement('div')
    card.className ='brand-card'
    parentDiv.appendChild(card)
    
    let createButton = document.createElement('button')
    createButton.style.display = 'none'
    
    createButton.innerText = "add a new shoe"
    card.appendChild(createButton)

    card.addEventListener('click', ()=>{
        if (event){
            sneakerList.style.display = 'block'
            createButton.style.display = 'block'
            
        }

    } )
    // createButton.addEventListener('click', renderSneakerForm())
    
    card.appendChild(sneakerList)
    let cardName = document.createElement('h3')
    cardName.innerText = data.name
    card.appendChild(cardName)
    
    let cardimg = document.createElement('img')
    cardimg.className = 'brand-image'
    cardimg.src = data.image
    card.appendChild(cardimg)


    
    
    
}

function buildingShoeCard(shoe, list){
    // let brandCard = event.target.parentElement
    
    let sneaker = document.createElement('li')
    sneaker.innerText = shoe.name
        list.appendChild(sneaker)

    //     let parentCard = event.target
    // debugger
    // let sneakerCard = document.createElement('div')
    // parentCard.appendChild(sneakerCard)
    }


function renderSneakerForm(event){
   
    let form = document.getElementsByTagName('form')
    form.style.display = "block"
  let newName = event.target.name.value
  let newPrice = event.target.price.value
 

  let newShoe = {name: newName, price: newPrice}
  fetch("http://localhost:3000/brands", {
      method: "POST",
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(newShoe)
  }).then(response => response.json())
  .then(newShoe =>buildingShoeCard(newShoe))

}



