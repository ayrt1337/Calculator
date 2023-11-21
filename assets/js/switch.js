var buttons = document.getElementsByClassName('button')
var arr = [...buttons]

arr.forEach((element, index) => {
  element.addEventListener('click', () => {
    element.style.opacity = '1'
    if (index == 0) {
      document.getElementsByTagName('body')[0].style.backgroundColor = '#00416a'
      document.getElementById('tittle').style.color = 'white'
      document.getElementById('theme-text').style.color = 'white'
      let numbers = document.getElementsByClassName('number-choice')[0].children
      for(let i = 0; i < numbers.length; i++){
        numbers[i].style.color = 'white'
      }
      document.getElementById('equals').style.backgroundColor = 'rgba(255, 0, 0, 0.8)'
      document.getElementById('equals').style.color = 'white'
      document.getElementsByClassName('tri-state-toggle')[0].style.backgroundColor = 'black'
      document.getElementsByClassName('tri-state-toggle')[0].style.borderColor = 'black'
      document.getElementsByClassName('visor')[0].style.backgroundColor = 'black'
      document.getElementById('result').style.color = 'white'
      document.getElementsByClassName('numbers')[0].style.backgroundColor = 'black'
      document.getElementById('del').style.backgroundColor = '#003989'
      document.getElementById('reset').style.backgroundColor = '#003989'
      let digits = document.getElementsByClassName('digit')
      for(let i = 0; i < digits.length; i++){
        digits[i].style.color = 'black'
        digits[i].style.backgroundColor = 'white'
      }
    } 

    else if (index == 1) {
      document.getElementsByTagName('body')[0].style.backgroundColor = 'white'
      document.getElementById('tittle').style.color = 'black'
      document.getElementById('theme-text').style.color = 'black'
      let numbers = document.getElementsByClassName('number-choice')[0].children
      for(let i = 0; i < numbers.length; i++){
        numbers[i].style.color = 'black'
      }
      document.getElementById('equals').style.backgroundColor = '#FF5F1F'
      document.getElementById('equals').style.color = 'white'
      document.getElementsByClassName('tri-state-toggle')[0].style.backgroundColor = '#ccc'
      document.getElementsByClassName('tri-state-toggle')[0].style.borderColor = '#ccc'
      document.getElementsByClassName('visor')[0].style.backgroundColor = '#ccc'
      document.getElementById('result').style.color = 'black'
      document.getElementsByClassName('numbers')[0].style.backgroundColor = '#ccc'
      document.getElementById('del').style.backgroundColor = 'lightskyblue'
      document.getElementById('reset').style.backgroundColor = 'lightskyblue'
      let digits = document.getElementsByClassName('digit')
      for(let i = 0; i < digits.length; i++){
        digits[i].style.color = 'black'
        digits[i].style.backgroundColor = 'white'
      }
    } 

    else {
      document.getElementsByTagName('body')[0].style.backgroundColor = 'rgb(17, 0, 28)'
      document.getElementById('tittle').style.color = 'yellow'
      document.getElementById('theme-text').style.color = 'yellow'
      let numbers = document.getElementsByClassName('number-choice')[0].children
      let digits = document.getElementsByClassName('digit')
      for(let i = 0; i < numbers.length; i++){
        numbers[i].style.color = 'yellow'
      }
      for(let i = 0; i < digits.length; i++){
        digits[i].style.color = 'yellow'
        digits[i].style.backgroundColor = '#580088'
      }
      document.getElementById('equals').style.backgroundColor = 'aqua'
      document.getElementById('equals').style.color = 'black'
      document.getElementsByClassName('tri-state-toggle')[0].style.backgroundColor = 'rgb(59, 0, 90)'
      document.getElementsByClassName('tri-state-toggle')[0].style.borderColor = 'rgb(59, 0, 90)'
      document.getElementsByClassName('visor')[0].style.backgroundColor = 'rgb(59, 0, 90)'
      document.getElementById('result').style.color = 'yellow'
      document.getElementsByClassName('numbers')[0].style.backgroundColor = 'rgb(59, 0, 90)'
      document.getElementById('del').style.backgroundColor = 'rgb(148, 0, 228)'
      document.getElementById('reset').style.backgroundColor = 'rgb(148, 0, 228)'
    }

    arr
      .filter(function (item) {
        return item != element
      })
      .forEach((item) => {
        item.style.opacity = "0"
      })
  })
})