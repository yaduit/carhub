/*car news*/"7cedde05557d4702bde4f333f992f18b"

const apiKey = "7cedde05557d4702bde4f333f992f18b";
const newsContainer = document.getElementById("news-container");

async function loadCarNews() {
  const url = `https://newsapi.org/v2/everything?q=%22car+launch%22+OR+%22new+car%22+OR+%22car+release%22&language=en&sortBy=publishedAt&pageSize=12&apiKey=${apiKey}`

  try {
    const res = await fetch(url);
    const data = await res.json();
    displayNews(data.articles);
  } catch (error) {
    newsContainer.innerHTML = `<p class="text-danger">Failed to load news.</p>`;
    console.error("Error fetching news:", error);
  }
}

function displayNews(articles) {
  newsContainer.innerHTML = "";

  articles.slice(0,3).forEach(article => {
    const col = document.createElement("div");
    col.className = "col-md-4 mb-4";

    col.innerHTML = `
      <div class="card h-100 shadow-sm">
        <img src="${article.urlToImage || 'https://via.placeholder.com/300x180'}" class="card-img-top" alt="News Image">
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">${article.title}</h5>
          <p class="card-text">${article.description || 'No description available.'}</p>
          <a href="${article.url}" target="_blank" class="btn btn-primary mt-auto">Read More</a>
        </div>
      </div>
    `;

    newsContainer.appendChild(col);
  });
}

loadCarNews();


/*car quiz*/


