const btn=document.getElementById('btn')
const colourId=document.getElementById('Colour-id')
const wrap=document.getElementById('wrap')
const hexaValue=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']

btn.addEventListener('click',function(){
    color='#'
    for(i=1;i<=6;i++){
        color +=randomeHex()
    }
    wrap.style.backgroundColor=color
    colourId.innerHTML=color
    // colourId.textContent=

})

function randomeHex() {

    GeneratedIndex=Math.floor(Math.random()*16)
    return hexaValue[GeneratedIndex]
}