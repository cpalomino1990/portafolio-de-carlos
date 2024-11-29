let header = document.getElementById('Header')

window.addEventListener('scroll', ()=>{
    let scroll = window.scrollY
    if(scroll>10){
        header.style.backgroundColor = '#e27f7fff';
       
    }else{
        header.style.backgroundColor = "transparent"  
    }
              
})

let header1 = document.getElementById('Header')

window.addEventListener('scroll', ()=>{
    let scroll = window.scrollY
    if(scroll>10){
        header1.style.boxShadow =  '4px 4px 14px'
       
    }else{
        header1.style.boxShadow =  '0px 0px 0px'
    }
              
})
