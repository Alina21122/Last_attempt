// Фильтрация по цене
document.getElementById("filterButton").addEventListener("click", function () {
    const minPrice = parseInt(document.getElementById("minPrice").value) || 0;
    const maxPrice = parseInt(document.getElementById("maxPrice").value) || Infinity;

    const dishes = document.querySelectorAll(".menu-card");

    dishes.forEach(dish => {
        const price = parseInt(dish.getAttribute("data-price"));
        if (price >= minPrice && price <= maxPrice) {
            dish.style.display = "block";
        } else {
            dish.style.display = "none";
        }
    });
});

// Поиск по названию или ингредиентам
document.getElementById("searchButton").addEventListener("click", function () {
    const searchQuery = document.getElementById("searchInput").value.toLowerCase().trim();
    const dishes = document.querySelectorAll(".menu-card");

    dishes.forEach(dish => {
        const title = dish.querySelector(".menu-title").textContent.toLowerCase();
        const description = dish.querySelector(".menu-description").textContent.toLowerCase();

        if (title.includes(searchQuery) || description.includes(searchQuery)) {
            dish.style.display = "block";
        } else {
            dish.style.display = "none";
        }
    });
});


// Обработчики для модального окна
document.querySelectorAll('.menu-card').forEach(card => {
    card.addEventListener('click', (e) => {
        // Проверяем, что клик не по кнопке корзины
        if (!e.target.classList.contains('menu-button')) {
            const modal = document.getElementById('modalOverlay');
            const imgSrc = card.querySelector('img').src;
            const title = card.querySelector('.menu-title').textContent;
            const description = card.querySelector('.menu-description').textContent;
            const details = card.querySelector('.menu-details').textContent;
            const price = card.querySelector('.menu-price').textContent;

            modal.querySelector('.modal-image').src = imgSrc;
            modal.querySelector('.modal-title').textContent = title;
            modal.querySelector('.modal-description').textContent = description;
            modal.querySelector('.modal-details').textContent = details;
            modal.querySelector('.modal-price').textContent = price;

            modal.style.display = 'flex';
        }
    });
});

// Закрытие модального окна
document.querySelector('.close-modal').addEventListener('click', () => {
    document.getElementById('modalOverlay').style.display = 'none';
});

document.getElementById('modalOverlay').addEventListener('click', (e) => {
    if (e.target === document.getElementById('modalOverlay')) {
        document.getElementById('modalOverlay').style.display = 'none';
    }
});
