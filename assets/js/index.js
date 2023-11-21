const visor = document.getElementById('result')
const btn = document.getElementsByClassName('digit')
var arr = [...btn]
const reset = document.getElementById('reset')
const del = document.getElementById('del')
const equals = document.getElementById('equals')

arr.forEach((element, index) => {
    element.addEventListener('click', event => {
        if(visor.innerText == 'Infinity' || visor.innerText == 'Too Long' || visor.innerText == 'Error'){
            visor.innerHTML = ''
        }
        if(visor.innerText.length == 0){
            if(event.target.innerHTML != '/' && 
               event.target.innerHTML != '.' && 
               event.target.innerHTML != 'x' && 
               event.target.innerHTML != '-' && 
               event.target.innerHTML != '+'){
                visor.innerHTML += element.innerHTML
            }
        }
        else if(visor.innerText.length == 1 && visor.innerText.substring(visor.innerText.length - 1, visor.innerText.length) == '0'){
            if(event.target.innerHTML != '/' && event.target.innerHTML != '.' && event.target.innerHTML != 'x' && event.target.innerHTML != '-' && event.target.innerHTML != '+'){
                visor.innerHTML = element.innerHTML
            }
            else{
                visor.innerHTML += element.innerHTML
            }
        }
        else if(visor.innerText.length <= 13 && visor.parentElement.offsetWidth === 350){
            if(visor.innerText.substring(visor.innerText.length - 1, visor.innerText.length) == '/' ||
               visor.innerText.substring(visor.innerText.length - 1, visor.innerText.length) == '.' ||
               visor.innerText.substring(visor.innerText.length - 1, visor.innerText.length) == 'x' ||
               visor.innerText.substring(visor.innerText.length - 1, visor.innerText.length) == '-' ||
               visor.innerText.substring(visor.innerText.length - 1, visor.innerText.length) == '+'){
                if(event.target.innerHTML != '/' && event.target.innerHTML != '.' && event.target.innerHTML != 'x' && event.target.innerHTML != '-' && event.target.innerHTML != '+'){
                    visor.innerHTML += element.innerHTML
                }
            }
            else if(visor.innerText.substring(visor.innerText.length - 1, visor.innerText.length) == '0' &&
                   (visor.innerText.substring(visor.innerText.length - 2, visor.innerText.length) == 'x0' ||
                    visor.innerText.substring(visor.innerText.length - 2, visor.innerText.length) == '-0' ||
                    visor.innerText.substring(visor.innerText.length - 2, visor.innerText.length) == '+0' ||
                    visor.innerText.substring(visor.innerText.length - 2, visor.innerText.length) == '/0')){
                if(event.target.innerHTML != '/' && event.target.innerHTML != '.' && event.target.innerHTML != 'x' && event.target.innerHTML != '-' && event.target.innerHTML != '+'){
                    visor.innerHTML = visor.innerHTML.slice(0, -1)
                    visor.innerHTML += element.innerHTML
                }
                else{
                    visor.innerHTML += element.innerHTML
                }    
            }
            else{
                visor.innerHTML += element.innerHTML
            }
        }
        else if(visor.innerText.length <= 18 && visor.parentElement.offsetWidth === 600){
            if(visor.innerText.substring(visor.innerText.length - 1, visor.innerText.length) == '/' ||
               visor.innerText.substring(visor.innerText.length - 1, visor.innerText.length) == '.' ||
               visor.innerText.substring(visor.innerText.length - 1, visor.innerText.length) == 'x' ||
               visor.innerText.substring(visor.innerText.length - 1, visor.innerText.length) == '-' ||
               visor.innerText.substring(visor.innerText.length - 1, visor.innerText.length) == '+'){
                if(event.target.innerHTML != '/' && event.target.innerHTML != '.' && event.target.innerHTML != 'x' && event.target.innerHTML != '-' && event.target.innerHTML != '+'){
                    visor.innerHTML += element.innerHTML
                }
            }
            else if(visor.innerText.substring(visor.innerText.length - 1, visor.innerText.length) == '0' &&
                   (visor.innerText.substring(visor.innerText.length - 2, visor.innerText.length) == 'x0' ||
                    visor.innerText.substring(visor.innerText.length - 2, visor.innerText.length) == '-0' ||
                    visor.innerText.substring(visor.innerText.length - 2, visor.innerText.length) == '+0' ||
                    visor.innerText.substring(visor.innerText.length - 2, visor.innerText.length) == '/0')){
                if(event.target.innerHTML != '/' && event.target.innerHTML != '.' && event.target.innerHTML != 'x' && event.target.innerHTML != '-' && event.target.innerHTML != '+'){
                    visor.innerHTML = visor.innerHTML.slice(0, -1)
                    visor.innerHTML += element.innerHTML
                }
                else{
                    visor.innerHTML += element.innerHTML
                }    
            }
            else{
                visor.innerHTML += element.innerHTML
            }
        }
    })
})

reset.addEventListener('click', () => {
    visor.innerHTML = ''
})

del.addEventListener('click', () => {
    if(visor.innerText == 'Infinity' || visor.innerText == 'Too Long' || visor.innerText == 'Error'){
        visor.innerHTML = ''
    }
    else{
        visor.innerHTML = visor.innerHTML.slice(0, -1)
    }
})

equals.addEventListener('click', () => {
    if(visor.innerText.length != 0){
       if(visor.innerText.substring(visor.innerText.length - 1, visor.innerText.length) == '/' ||
          visor.innerText.substring(visor.innerText.length - 1, visor.innerText.length) == '.' ||
          visor.innerText.substring(visor.innerText.length - 1, visor.innerText.length) == 'x' ||
          visor.innerText.substring(visor.innerText.length - 1, visor.innerText.length) == '-' ||
          visor.innerText.substring(visor.innerText.length - 1, visor.innerText.length) == '+'){
            visor.innerHTML = 'Error'
        }
        else{
            if(visor.innerText.indexOf('+') > 0 || 
               visor.innerText.indexOf('-') > 0 || 
               visor.innerText.indexOf('x') > 0 || 
               visor.innerText.indexOf('/') > 0){
                var newVisor = visor.innerHTML.replaceAll('x', '*')
                var result = eval(`${newVisor}`)
                var confirm = result.toString()
                if(isNaN(result)){
                    visor.innerHTML = 'Error'
                }
                else if(confirm.length > 18 && visor.parentElement.offsetWidth == '600'){
                    visor.innerHTML = 'Too Long'
                }
                else if(confirm.length > 13 && visor.parentElement.offsetWidth == '350'){
                    visor.innerHTML = 'Too Long'
                }
                else{
                    visor.innerHTML = result
                }
            }
        }
    }
})