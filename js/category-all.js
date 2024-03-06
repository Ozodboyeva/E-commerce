let categoryCards = document.querySelector(".category__cards");
let searchingPart = document.querySelector(".search");
let paginationPart = document.querySelector(".pagination");
let categorySelect = document.querySelector(".select-dropdown");
let categoryName = localStorage.getItem(CATEGORY) || "all";
let search = "";
let page = 0;
let limit = 16;
let pages;
//mapping pages
function getAllcards({ name, description, price, rating, image }) {
  return `
     <div class="category__card">
              <div class="category__card__image">
                <img
                  src=${image}
                  alt="rasm"
                />
              </div>
              <div class="category__dis">
                <img src="../images/pages/index/heart.svg" alt="" />
              </div>
              <div class="category__discount">${name}</div>
              <div class="category__card__items">
                <div class="category__card__texts">
                  <div class="category__card__num">
                    <h2 class="category__card_money">${price}₽</h2>
                  </div>
                </div>
                <div class="category__card-item">
                  <a href="./article.html" class="category__card__main">
                    ${description}
                  </a>
                  <div class="category__stars">
                    <img src="../images/pages/index/star.png" alt="star" />
                    <img src="../images/pages/index/star.png" alt="star" />
                    <img src="../images/pages/index/star (1).png" alt="star" />
                    <img src="../images/pages/index/star (1).png" alt="star" />
                    <img src="../images/pages/index/star (1).png" alt="star" />
                  </div>

                  <button class="category__btn">В корзину</button>
                </div>
              </div>
            </div>
     `;
}

function getProducts() {
  categoryCards.innerHTML = "";

  //searching by name and description
  let searchProducts = allProducts.filter(
    (pr) =>
      pr.name.toLowerCase().includes(search) ||
      pr.description.toLowerCase().includes(search)
  );
  //filtering select
  if (categoryName !== "all") {
    searchProducts = searchProducts.filter(
      (pr) => pr.category === categoryName
    );
  }
  // pagination codes
  let start = page * limit;
  let end = start + limit;
  searchProducts.slice(start, end).forEach((pr) => {
    let card = getAllcards(pr);
    categoryCards.innerHTML += card;
  });

  //pagination
  pages = Math.ceil(searchProducts.length / limit);
  if (pages > 1) {
    paginationPart.innerHTML = `
 <a href="#" class="page-link" onclick="getPage('-')">&laquo;</a>
`;
    for (let i = 0; i < pages; i++) {
      paginationPart.innerHTML += `
     <a href="#" onclick="getPage(${i})" class="page-link ${
        page == i ? "active" : ""
      }">${i + 1}</a>
    `;
    }

    paginationPart.innerHTML += `
 <a href="#"class="page-link" onclick="getPage('+')"
 >&raquo;</a>
`;
  } else {
    paginationPart.innerHTML = "";
  }
}
getProducts();

function getPage(p) {
  if (p == "+") {
    page++;
  } else if (p == "-") {
    page--;
  } else {
    page = p;
  }
  getProducts();
}

searchingPart.addEventListener("keyup", function () {
  search = this.value.trim().toLowerCase();
  page = 0;
  getProducts();
});
// searching done

//categories mapping
categorySelect.innerHTML = `<option value='all'>All</option>`;
category.forEach(({ category, name }) => {
  // console.log(category);
  categorySelect.innerHTML += `<option ${
    category === categoryName ? "selected" : ""
  } value= '${category}'>${name}</option>`;
});

categorySelect.addEventListener("change", function () {
  categoryName = this.value;
  console.log(categoryName);
  localStorage.setItem(CATEGORY, category);
  getProducts();
});

// let priceWithDiscount = (1 - discount / 100) * price; // discountdan keyingi narxi
discount = price - priceWithDiscount;

let discountlar = [disc1, disc2];
