// Write your code below:
const para = document.createElement('h3')
const paraText = document.createTextNode('Buy high quality fruits online')
para.appendChild(paraText)

const mainHeading = document.getElementById('main-heading')
mainHeading.appendChild(para)

para.style.fontStyle = 'italic'

const total = document.createElement('p')
const totalText = document.createTextNode('Total fruits: 4')
total.appendChild(totalText)

const list = document.querySelector('.fruits')
const divs = document.getElementsByTagName('div');
const secondDiv = divs[1]
secondDiv.insertBefore(total, list)
total.id = 'fruits-total'