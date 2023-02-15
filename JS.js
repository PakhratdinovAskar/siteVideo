let a = undefined

document.querySelector('.menu').addEventListener('click', (event)=>{

    if(a){
        a.style.backgroundColor = ''
        event.target.style.backgroundColor = 'brown'
        a = event.target
    }else{
        event.target.style.backgroundColor = 'brown'
        a = event.target
    }

})

    
for(img of document.querySelectorAll('img')){
    img.addEventListener('click', createIFrame)
}    
    
 let count = 1       
function createIFrame(e) {

    let iframe = document.querySelector('iframe')

    iframe.remove()

    iframe = document.createElement('iframe')
    iframe.src = e.target.alt
    document.querySelector('.showVideo').appendChild(iframe)
}





 