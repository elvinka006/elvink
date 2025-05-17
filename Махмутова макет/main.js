document.addEventListener("DOMContentLoaded", function () {
  const sortImageBtn = document.getElementById("sort-image");
  const sortPriceBtn = document.getElementById("sort-price");
  const sortNameBtn = document.getElementById("sort-name");
  const cardsContainer = document.getElementById("cards-container");
  const cards = Array.from(document.querySelectorAll(".card"));
  const originalOrder = cards.map((card) => card.outerHTML);

  // Функция для сброса активных кнопок
  function resetActiveButtons() {
    sortImageBtn.classList.remove("active");
    sortPriceBtn.classList.remove("active");
    sortNameBtn.classList.remove("active");
  }

  // Сортировка по изображению (цвету)
  sortImageBtn.addEventListener("click", function (e) {
    e.preventDefault();
    resetActiveButtons();
    this.classList.add("active");

    const sortedCards = [...cards].sort((a, b) => {
      const imgA = a.getAttribute("data-image");
      const imgB = b.getAttribute("data-image");
      return imgA.localeCompare(imgB);
    });

    updateCardsContainer(sortedCards);
  });

  // Сортировка по цене
  sortPriceBtn.addEventListener("click", function (e) {
    e.preventDefault();
    resetActiveButtons();
    this.classList.add("active");

    const sortedCards = [...cards].sort((a, b) => {
      const priceA = parseFloat(a.getAttribute("data-price"));
      const priceB = parseFloat(b.getAttribute("data-price"));
      return priceA - priceB;
    });

    updateCardsContainer(sortedCards);
  });

  // Сортировка по названию
  sortNameBtn.addEventListener("click", function (e) {
    e.preventDefault();
    resetActiveButtons();
    this.classList.add("active");

    const sortedCards = [...cards].sort((a, b) => {
      const nameA = a.getAttribute("data-name");
      const nameB = b.getAttribute("data-name");
      return nameA.localeCompare(nameB);
    });

    updateCardsContainer(sortedCards);
  });

  // Функция для обновления контейнера с карточками
  function updateCardsContainer(sortedCards) {
    cardsContainer.innerHTML = "";
    sortedCards.forEach((card) => {
      cardsContainer.appendChild(card);
    });
  }
});
