const productPage = document.getElementById("productPage");

const params = new URLSearchParams(window.location.search);
const productSlug = params.get("product");

const product = products.find(item => item.slug === productSlug);

if (!product) {
    productPage.innerHTML = `
        <div>
            <h1>Product not found</h1>
            <p>Please return to the collection.</p>
            <br>
            <a href="collection.html" class="btn">Back to Collection</a>
        </div>
    `;
} else {
    document.title = `${product.name} | YEINSOCROCO`;

    productPage.innerHTML = `
        <section class="product-gallery">
            ${imageNames.map(image => `
                <img src="./assets/bags/${product.folder}/${image}" alt="${product.name}">
            `).join("")}
        </section>

        <section class="product-info">
            <p class="category">${product.category}</p>
            <h1>${product.name}</h1>
            <p class="price">${product.price}</p>

            <p class="description">${product.description}</p>

            <div class="details">
                <p><strong>Color:</strong> ${product.color}</p>
                <p><strong>Material:</strong> ${product.material}</p>
                <p><strong>Brand:</strong> YEINSOCROCO</p>
            </div>

            <a href="contact.html" class="btn">Request Information</a>
        </section>
    `;
}
