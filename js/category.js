const categoryCards = document.querySelector(".category__cards");
function getCategoryCard({ id, name, image, category }) {
  return `
   <div class="category__card">
   <a href="./categories.html" onclick="getCategory('${category}')">
              <img
                class="card-img"
                src=${image}
                alt="egg"
              />
              <div class="category__card-text">
              <p>${name}</p>
              </div>
              </a>
            </div>`;
}
category.forEach((name) => {
  categoryCards.innerHTML += getCategoryCard(name);
});

function getCategory(category) {
  console.log(category);
  localStorage.setItem(CATEGORY, category);
}
