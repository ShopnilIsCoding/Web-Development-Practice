const licollection = document.getElementsByClassName('hic');

for (const li of licollection) {

    console.log(li.innerText)
}

const title = document.getElementById('head')
console.log('\n' + title.getAttribute('id') + '\n' + title.classList)
title.classList.remove('gf')
console.log('\n' + title.classList)
title.setAttribute('title', 'This is a title bro')
let changetext = document.getElementsByClassName('ab')[0]
changetext.innerHTML = '<h3> Hi Bro I modified This</h3>'
const ul = document.querySelectorAll('ul')
const newli = document.createElement('li')
newli.innerText = 'this line added by js'
const newli2 = document.createElement('p')
newli2.innerText = "this also added by js using append"
title.appendChild(newli)
title.appendChild(newli2)