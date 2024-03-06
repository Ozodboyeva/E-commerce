let allProduct = document.querySelector(".all__products");
let searchInput = document.querySelector(".search");
let pagination = document.querySelector(".pagination");
let search = "";
let limit = 12;
let page = 0;
let pages;
//mapping products
function getallProduct({ name, category, description, price, rating, image }) {
  return `
   <div class="promotion__card">
              <div class="promotion__card__image">
                <img
                  src="${image}"
                  alt="rasm"
                />
              </div>
              <div class="promotion__dis">
                <img src="../images/pages/index/heart.svg" alt="" />
              </div>
              <div class="promotion__discount">${name}</div>
              <div class="promotion__card__items">
                <div class="promotion__card__texts">
                  <div class="promotion__card__num">
                    <h2 class="promotion__card_money">${price}₽</h2>
                   
                  </div>
                  
                </div>
                <div class="promotion__card-item">
                  <a href="${category}" class="promotion__card__main">
                    ${description}
                  </a>
                  <div class="promotion__stars">
                    <img src="../images/pages/index/star.png" alt="star" />
                    <img src="../images/pages/index/star.png" alt="star" />
                    <img src="../images/pages/index/star (1).png" alt="star" />
                    <img src="../images/pages/index/star (1).png" alt="star" />
                    <img src="../images/pages/index/star (1).png" alt="star" />
                  </div>

                  <button class="promotion__btn">В корзину</button>
                </div>
              </div>
            </div>
     `;
}
// mapping done

//searching codes
function getProducts() {
  allProduct.innerHTML = "";
  let searchProducts = productsall.filter((pr) =>
    pr.name.toLowerCase().includes(search)
  );
  let start = page * limit;
  let end = start + limit;
  searchProducts.slice(start, end).forEach((productsall) => {
    let card = getallProduct(productsall);
    allProduct.innerHTML += card;
  });

  //pagination
  pages = Math.ceil(searchProducts.length / limit);

  pagination.innerHTML = `
 <a href="#" class="page-link" onclick="getPage('-')">&laquo;</a>
`;
  for (let i = 0; i < pages; i++) {
    pagination.innerHTML += `
     <a href="#" onclick="getPage(${i})" class="page-link ${
      page == i ? "active" : ""
    }">${i + 1}</a>
    `;
  }

  pagination.innerHTML += `
 <a href="#"class="page-link" onclick="getPage('+')"
 >&raquo;</a>
`;
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

searchInput.addEventListener("keyup", function () {
  search = this.value.trim().toLowerCase();
  page = 0;
  getProducts();
});
// searching done
