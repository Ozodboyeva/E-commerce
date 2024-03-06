const favrouteNumbers = document.querySelector(".heart__image .counts");
let favoriteProductsJson = localStorage.getItem(FAVORITE);
let favoriteProducts = JSON.parse(favoriteProductsJson) || [];

function getFavouriteNum() {
  favrouteNumbers.textContent = favoriteProducts.length;
}
getFavouriteNum();
