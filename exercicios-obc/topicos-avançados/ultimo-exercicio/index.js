// faz a requisicao e mostra na tela
function renderArticle(articleData){
    const article = document.createElement('article')
    article.classList.add('article')
    article.id = `article-${articleData.id}`

    const name = document.createElement('h3')
    name.classList.add('articleData-name')
    name.textContent = articleData.name

    const value = document.createElement('p')
    value.classList.add('articleData-value')
    value.innerHTML = articleData.value

    article.append(articleData.id,name,value)
    document.querySelector('#article').appendChild(article)
}

async function fetchArticle(){
    const articles = await fetch('http://localhost:3000/articles').then(res => res.json())
    articles.forEach(renderArticle)
}

document.addEventListener('DOMContentLoaded', () => {
    fetchArticle()
    updateSaldo()
})

// deletar uma arquivo
document.querySelector('#formdelete').addEventListener("submit", (s) =>{
    const id = document.querySelector('#delete').value
    s.preventDefault()
    fetch("http://localhost:3000/articles", {
        method: "DELETE",
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify({
            "id": id
        })
    })
    .then( response => response.json())
    .then(data =>{
        data
    })
})

//mostra o saldo da conta
function updateSaldo(){
    const saldoSpan = document.querySelector('#saldo')
    const saldo = articleData.value.reduce((sum, transaction) => sum + articleData.value, 0)
    saldoSpan.textContent = saldo
}
