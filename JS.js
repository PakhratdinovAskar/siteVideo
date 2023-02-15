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
    
        
function createIFrame(e) {

    let iframe = document.querySelector('iframe')

    if (iframe) {
        iframe.remove()
    }

    iframe = document.createElement('iframe')
    iframe.src = e.target.alt
    iframe.style.width = '100%'
    document.querySelector('.showVideo').appendChild(iframe)
}





 