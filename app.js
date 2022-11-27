cdconst item = document.querySelectorAll(".colors__item");

window.addEventListener('keydown', (event) => {
    event.preventDefault()
    if(event.code.toLowerCase() === 'space') {
        setRendomColors()
        
    } 
})

document.addEventListener('click', (event) => {
    const type = event.target.dataset.type
    if(type === "lock"){
        
        const node = event.target.tagName.toLowerCase()==='i' ? event.target : event.target.children[0]
        node.classList.toggle('fa-lock-open')
        node.classList.toggle('fa-lock')
        
    } else if (type === 'copy') {
        copyToClickboard(event.target.textContent)
      }
})
// копирует текст при клике по нему
function copyToClickboard(text) {
    return navigator.clipboard.writeText(text)
  }

function setRendomColors(isInitial){
    const colors = isInitial ? getColorsFromHash() : []

    item.forEach((col, index) => {
        const isLocked = col.querySelector('i').classList.contains('fa-lock');
        const title = col.querySelector('h2');
        const btn = col.querySelector('button')
        //const color = chroma.random();
        
        if(isLocked){
            colors.push(title.textContent)
            return
        } 

        const color = isInitial
        ? colors[index]
        ? colors[index]
        : chroma.random()
        : chroma.random()

        if (!isInitial) {
            colors.push(color)
          }
        
        
        title.textContent = color;
        col.style.background = color;

        
        setTextColor(title, color)
        setTextColor(btn, color)

        
    })
    updateColorsHash(colors)
}

function setTextColor(title, color){
    const luminance = chroma(color).luminance()
    title.style.color = luminance > 0.5 ? "black" : "white"
}


function updateColorsHash(colors = []) {
    document.location.hash = colors
      .map((col) => {
        return col.toString().substring(1)
      })
      .join('-')
  }
  
  function getColorsFromHash() {
    if (document.location.hash.length > 1) {
      return document.location.hash
        .substring(1)
        .split('-')
        .map((color) => '#' + color)
    }
    return []
  }

setRendomColors(true)



let tthAuto = [
  {marka: 'toyota', speed: 200, ears: 2016 },
  {marka: 'nissan', speed: 220, ears: 2018 },
  {marka: 'subaru', speed: 250, ears: 2014 },
  {marka: 'lexus', speed: 280, ears: 2020 },
]

const newCar = tthAuto.map(car=>{
  return `${car.speed}+(${car.marka})`
})

console.log(newCar)