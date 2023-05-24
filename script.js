let button = document.querySelector('.button1')
let result = document.querySelector('.result')
let title = document.querySelector('.title')
let questions = document.querySelector('.questions')


button.onclick = function() {
  let input1 = document.querySelector('.q1').value
  console.log('input 1 is', input1)
  let input2 = document.querySelector('.q2').value
  console.log('input 2 is', input2)

  if (input1 < 5 & input2 == 'anime') {
    result.innerHTML = 'You are a science teacher.'
  }
  else if (input1 > 5 & input2 == 'anime') {
    result.innerHTML = 'You are a math teacher.'
  }
  else if (input1 < 5 & input2 == 'manga') {
    result.innerHTML = 'You are an English teacher.'
  }
  else if (input1 > 5 & input2 == 'manga') {
    result.innerHTML = 'You are a social studies teacher.'
  }
  else{
    result.innerHTML = 'You must have typed something wrong, try again!'
  }
result.style.display = 'block'
}

// issues. dont know how to reset input1 and input2 values
// buttons suddenly to the left after submit