function useLightTheme(){
    document.body.style.color = '#212529' //style -> propriedade para manipular os estilos do elemento
    document.body.style.backgroundColor = '#f1f5f9'
}
function useDarkTheme(){
    document.body.style.color = '#f1f5f9'
    document.body.style.backgroundColor = '#212529'
}

function switchTheme(){
    document.body.classList.toggle('is-light')//toggle --> alternar entre as classes
    document.body.classList.toggle('is-dark')
}

document.getElementById('lightBtn').addEventListener('click',useLightTheme)
document.getElementById('darkBtn').addEventListener('click',useDarkTheme)
document.getElementById('switchBtn').addEventListener('click', switchTheme)