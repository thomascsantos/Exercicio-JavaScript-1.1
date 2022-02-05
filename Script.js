var a = document.getElementById('teste')
a.addEventListener('mouseenter', entrou)
a.addEventListener('mouseout', saiu)
a.addEventListener('click', clicou)
a.addEventListener('dblclick', duplo)
a.addEventListener('wheel', scroll)

function entrou() {
    a.innerHTML = 'entrou'
    a.style.background = 'blue'
}

function saiu() {
    a.innerHTML = 'saiu'
    a.style.background = 'yellow'
}

function clicou() {
    a.innerHTML = 'clicou'
    a.style.background = 'red'
}

function duplo() {
    a.innerHTML = 'duplo'
    a.style.background = 'green'
}

function scroll() {
    a.innerHTML = 'scroll'
    a.style.background = 'pink'
}