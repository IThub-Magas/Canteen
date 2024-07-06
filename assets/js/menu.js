document.addEventListener("DOMContentLoaded", () => {
    const products = [
        { id: 0, imgSrc: "./assets/images/image/1.png", productName: "Ягненок", productWeight: "Вес: 225 г", productDescription: "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком", productPrice: "620 ₽" },
        { id: 1, imgSrc: "./assets/images/image/2.png", productName: "Индейка", productWeight: "Вес: 225 г", productDescription: "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком", productPrice: "450 ₽" },
        { id: 2, imgSrc: "./assets/images/image/3.png", productName: "Гусь", productWeight: "Вес: 225 г", productDescription: "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком", productPrice: "7900 ₽" },
        { id: 3, imgSrc: "./assets/images/image/4.png", productName: "Утка", productWeight: "Вес: 225 г", productDescription: "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком", productPrice: "3230 ₽" },
        { id: 4, imgSrc: "./assets/images/image/1.png", productName: "Ягненок", productWeight: "Вес: 225 г", productDescription: "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком", productPrice: "620 ₽" },
        { id: 5, imgSrc: "./assets/images/image/2.png", productName: "Индейка", productWeight: "Вес: 225 г", productDescription: "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком", productPrice: "450 ₽" },
        { id: 6, imgSrc: "./assets/images/image/3.png", productName: "Гусь", productWeight: "Вес: 225 г", productDescription: "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком", productPrice: "7900 ₽" },
        { id: 7, imgSrc: "./assets/images/image/4.png", productName: "Утка", productWeight: "Вес: 225 г", productDescription: "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком", productPrice: "3230 ₽" }
    ];

    function createProductCards(array) {
        return array.map(product => {
            const productCard = document.createElement("div");
            productCard.className = "swiper-slide productCard";
            productCard.id = `productCard${product.id}`;
            productCard.innerHTML = `
                <img src="${product.imgSrc}" alt="${product.productName}">
                <div class="productCard_podBlock1">
                    <p class="productName">${product.productName}</p>
                    <p class="productWeight">${product.productWeight}</p>
                    <p class="productDescription">${product.productDescription}</p>
                </div>
                <div class="productCard_podBlock2">
                    <p class="productPrice">${product.productPrice}</p>
                </div>`;
            return productCard;
        });
    }
    

    const swiperContainers = document.querySelectorAll(".swiper-wrapper");
    swiperContainers.forEach(container => {
        const productCards = createProductCards(products);
        productCards.forEach(card => container.appendChild(card));
    });

    new Swiper(".mySwiper", {
        slidesPerView: 4,
        spaceBetween: 30,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        keyboard: true,
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 10
            },
            480: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 30
            }
        }
    });
});
