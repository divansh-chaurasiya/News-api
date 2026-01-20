function getNews() {
  let topic = document.getElementById("topic").value;

  let apiKey = "0b9e39028c0a4102b9ded748eb459b35";
  let url = `https://newsapi.org/v2/everything?q=${topic}&apiKey=${apiKey}`;

  fetch(url)
    .then(res => res.json())
    .then(data => {
      let newsDiv = document.getElementById("news");
      newsDiv.innerHTML = "";

      data.articles.slice(0,5).forEach(article => {
        newsDiv.innerHTML += `
          <div class="article">
            <h3>${article.title}</h3>
            <p>${article.source.name}</p>
          </div>
        `;
      });
    })
    .catch(err => {
      alert("News load nahi hui");
    });
}
