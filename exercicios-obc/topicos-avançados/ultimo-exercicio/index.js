// faz a requisicao e mostra na tela
function renderArticle(articleData){
    const article = document.createElement('article')
    article.classList.add('article')
    article.id = `article-${articleData.id}`

    const name = document.createElement('h3')
    name.classList.add('articleData-name')
    name.textContent = articleData.name

    const value = document.createElement('h3')
    value.classList.add('articleData-value')
    value.innerHTML = articleData.value

    article.append(name,value)
    document.querySelector('#article').appendChild(article)
}

async function fetchArticle(){
    const articles = await fetch('http://localhost:3000/articles').then(res => res.json())
    articles.forEach(renderArticle)
}

document.addEventListener('DOMContentLoaded', () => {
    fetchArticle()
})