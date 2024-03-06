let categoriesRow = document.querySelector(".categories-row");
function getCategoryCard({ name }) {
  return `
    <div class="categories__data">
              <a class="categories__data-href" href=""> ${name} </a>
            </div>
            `;
}

categories.forEach((category) => {
  categoriesRow.innerHTML += getCategoryCard(category);
});
