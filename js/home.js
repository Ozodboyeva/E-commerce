const dropdown = document.querySelector(".dropdown");
const drop = document.querySelector(".drop");
const promotionCard = document.querySelector(".promotion__cards");
const promotionAnthercard = document.querySelector(
  ".promotion__another__cards"
);
const anotherCard = document.querySelector(".all");
const specialFormatCard = document.querySelector(".special__format-cards");
const articleCard = document.querySelector(".article__cards");

// Sorting data
let promotions = [];
allProducts.map((pr) => (pr.OnSale ? promotions.push(pr) : ""));
// console.log(promotions);
let anotherPromotions = [];
allProducts.map((pr) => (pr.recentlyAdded ? anotherPromotions.push(pr) : ""));
// console.log(anotherPromotions);
let anotherCards = [];
allProducts.map((pr) => (pr.OnSale ? anotherCards.push(pr) : ""));
// divider
dropdown.addEventListener("click", () => {
  drop.classList.toggle("d-none");
});

//mapping the card1
function getPromotioncard({
  name,
  category,
  description,
  price,
  rating,
  discount,
  image,
}) {
  return `
    <div class="promotion__card">
              <div class="promotion__card__image">
             <img src=${image} alt="rasm" />
              
              </div>
              <div class="promotion__dis">
                 <img src="./images/pages/index/heart.svg" alt="" />
              </div>
              <div class="promotion__discount">${discount}%</div>
              <div class="promotion__card__items">
                <div class="promotion__card__texts">
                  <div class="promotion__card__num">
                    <h2 class="promotion__card_money">${price}₽</h2>
                    <p class="promotion__card-text">С картой</p>
                  </div>
                  <div class="promotion__card__num">
                    <h2 class="promotion__card_money active">50,50₽</h2>
                    <p class="promotion__card-text">Обычная</p>
                  </div>
                </div>
                <div class="promotion__card-item">
                  <a href="./pages/products.html" class="promotion__card__main">
                    ${description}
                  </a>
                  <div class="promotion__stars">
                   <img src="./images/pages/index/star.png" alt="star" />
                    <img src="./images/pages/index/star.png" alt="star" />
                    <img src="./images/pages/index/star (1).png" alt="star" />
                    <img src="./images/pages/index/star (1).png" alt="star" />
                    <img src="./images/pages/index/star (1).png" alt="star" />
                  </div>                
                   <button class="promotion__btn">В корзину</button>
                </div>
              </div>
            </div>         
                    
                  
                 
  `;
}
promotions.forEach((cards) => {
  promotionCard.innerHTML += getPromotioncard(cards);
});

//get another promotion codes
function getpromotionAnthercard({
  name,
  category,
  description,
  price,
  rating,
  image,
}) {
  return `
  <div class="another__card">
              <div class="another__card-images">
                <img src=${image} alt="rasm" />
                <div class="heart">
                  <img src="./images/pages/index/heart.svg" alt="" />
                </div>
              </div>
              <div class="another__card-texts">
                <h3 class="another__card-num">${price} ₽</h3>
                <a class="another__card-pre" href="./pages/products.html">
                 ${description}
                </a>
                <div class="another__starts">
                  <img src="./images/pages/index/star.png" alt="star" />
                  <img src="./images/pages/index/star.png" alt="star" />
                  <img src="./images/pages/index/star (1).png" alt="star" />
                  <img src="./images/pages/index/star (1).png" alt="star" />
                  <img src="./images/pages/index/star (1).png" alt="star" />
                </div>
                <button class="another__btn">В корзину</button>
              </div>
            </div>`;
}
anotherPromotions.forEach((card) => {
  promotionAnthercard.innerHTML += getpromotionAnthercard(card);
});
// getanother promotion codes done

//Another codes
function getAnothercard({ name, category, description, price, rating, image }) {
  return `
   <div class="another__card">
              <div class="another__card-images">
                <img src=${image} alt="long" />
                <div class="heart">
                  <img src="./images/pages/index/heart.svg" alt="heart" />
                </div>
              </div>
              <div class="another__card-texts">
                <h3 class="another__card-num">${price}</h3>
                <a class="another__card-pre" href="./pages/products.html">
                 ${description}
                </a>
                <div class="another__starts">
                  <img src="./images/pages/index/star.png" alt="star" />
                  <img src="./images/pages/index/star.png" alt="star" />
                  <img src="./images/pages/index/star (1).png" alt="star" />
                  <img src="./images/pages/index/star (1).png" alt="star" />
                  <img src="./images/pages/index/star (1).png" alt="star" />
                </div>
                <button class="another__btn">В корзину</button>
              </div>
            </div>
 `;
}
anotherCards.forEach((card) => {
  anotherCard.innerHTML += getAnothercard(card);
});
//Another codes done

//special cards
function getSpecial({ name, description, image }) {
  return `
  <div class="special__format-card">
              <div class="special__format-texts">
                <h3 class="special__format-text">
                 ${name}
                </h3>
                <p class="special__format-head">
                 ${description}
                </p>
              </div>
              <div class="special__format-images">
                <img src=${image} alt="card" />
              </div>
            </div>
 `;
}
specials.forEach((info) => {
  specialFormatCard.innerHTML += getSpecial(info);
});

// last page mapping
function getArticle({ category, name, description, image }) {
  return `
  <div class="article__card">
              <div class="article__card-image">
                <img src=${image} alt="article" />
              </div>
              <div class="article__card-texts">
                <a href="#" class="article__card-link">${category} </a>
                <h2 class="article__card-text">
                  ${name}
                </h2>
                <p class="article__card-info">
                  ${description}
                </p>
                <div class="article__card-btn">Подробнее</div>
              </div>
            </div>
  `;
}
articles.forEach((artic) => {
  articleCard.innerHTML += getArticle(artic);
});
