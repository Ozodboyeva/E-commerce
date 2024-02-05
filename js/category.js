const categoryCards = document.querySelector(".category__cards");
function getCategoryCard({ id, category, image }) {
  return `
   <div class="category__card">
              <img
                class="card-img"
                src=${image}
                alt="egg"
              />
              <div class="category__card-text">
                <p>${category}</p>
              </div>
            </div>`;
}
category.forEach((category) => {
  categoryCards.innerHTML += getCategoryCard(category);
});
