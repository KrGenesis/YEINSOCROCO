const products = [
    {
        id: 1,
        slug: "classic-croco",
        name: "Classic Croco",
        category: "Signature Bag",
        price: "€890",
        color: "Black",
        material: "Crocodile-inspired leather",
        description: "A timeless YEINSOCROCO handbag designed with elegance, structure and quiet confidence.",
        folder: "classic-croco"
    },
    {
        id: 2,
        slug: "mini-croco",
        name: "Mini Croco",
        category: "Evening Bag",
        price: "€690",
        color: "Ivory",
        material: "Crocodile-inspired leather",
        description: "A compact luxury piece made for refined evenings and elegant daily moments.",
        folder: "mini-croco"
    }
];

const imageNames = ["front.webp", "angle.webp", "inside.webp", "detail.webp"];

const productsGrid = document.getElementById("productsGrid");

if (productsGrid) {
    products.forEach(product => {
        productsGrid.innerHTML += `
            <article class="product-card" onclick="window.location.href='product.html?product=${product.slug}'">
                <div class="product-image">
                    <img src="./assets/bags/${product.folder}/front.webp" alt="${product.name}">
                </div>
                <p class="product-category">${product.category}</p>
                <h2>${product.name}</h2>
                <p class="product-price">${product.price}</p>
            </article>
        `;
    });
}
