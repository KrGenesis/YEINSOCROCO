let activeProduct = null;
let activeProductImages = [];
let activeProductImageIndex = 0;

function getProductIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get("id");
}

function findProductById(productId) {
    if (!productId) {
        return null;
    }

    return products.find((product) => product.id === productId);
}

function renderProductNotFound(productId) {
    const productPage = document.getElementById("productPage");

    if (!productPage) {
        return;
    }

    productPage.innerHTML = `
        <section class="product-not-found reveal">
            <p class="section-label">Product not found</p>

            <h1>Product not found.</h1>

            <p>The selected piece does not exist or is no longer available.</p>

            <p class="debug-product-id">
                Missing ID: ${productId || "no id in URL"}
            </p>

            <a href="collection.html" class="btn btn-dark">
                Back to Collection
            </a>
        </section>
    `;

    if (typeof initRevealAnimations === "function") {
        initRevealAnimations();
    }
}

function getActiveImageSrc(index) {
    return getProductImagePath(activeProduct, activeProductImages[index]);
}

function updateProductGallery(index) {
    if (!activeProduct || activeProductImages.length === 0) {
        return;
    }

    if (index < 0) {
        activeProductImageIndex = activeProductImages.length - 1;
    } else if (index >= activeProductImages.length) {
        activeProductImageIndex = 0;
    } else {
        activeProductImageIndex = index;
    }

    const mainImage = document.getElementById("mainProductImage");
    const counter = document.getElementById("productImageCounter");

    if (mainImage) {
        mainImage.src = getActiveImageSrc(activeProductImageIndex);
        mainImage.alt = `${localize(activeProduct.name)} image ${activeProductImageIndex + 1}`;
    }

    if (counter) {
        counter.textContent = `${activeProductImageIndex + 1} / ${activeProductImages.length}`;
    }

    document.querySelectorAll(".product-thumb").forEach((thumb) => {
        thumb.classList.toggle(
            "active",
            Number(thumb.dataset.index) === activeProductImageIndex
        );
    });
}

function goToPreviousImage() {
    updateProductGallery(activeProductImageIndex - 1);
}

function goToNextImage() {
    updateProductGallery(activeProductImageIndex + 1);
}

function renderProductGallery(product, images) {
    const hasMultipleImages = images.length > 1;

    return `
        <section class="product-gallery-slider reveal">

            <div class="main-product-visual">
                <img
                    id="mainProductImage"
                    src="${getProductImagePath(product, images[0])}"
                    alt="${localize(product.name)}"
                    draggable="false"
                    onerror="this.style.display='none'; this.parentElement.classList.add('image-missing');"
                >
            </div>

            <div class="product-gallery-controls">

                <div class="product-gallery-nav-row">
                    ${
                        hasMultipleImages
                            ? `
                                <button 
                                    class="gallery-nav" 
                                    id="previousProductImage" 
                                    type="button"
                                    aria-label="Previous image"
                                >
                                    ←
                                </button>
                            `
                            : ""
                    }

                    <p class="product-image-counter" id="productImageCounter">
                        1 / ${images.length}
                    </p>

                    ${
                        hasMultipleImages
                            ? `
                                <button 
                                    class="gallery-nav" 
                                    id="nextProductImage" 
                                    type="button"
                                    aria-label="Next image"
                                >
                                    →
                                </button>
                            `
                            : ""
                    }
                </div>

                ${
                    hasMultipleImages
                        ? `
                            <div class="product-thumbnails">
                                ${images.map((imageName, index) => `
                                    <button 
                                        class="product-thumb ${index === 0 ? "active" : ""}" 
                                        type="button"
                                        data-index="${index}"
                                        aria-label="Show image ${index + 1}"
                                    >
                                        <img 
                                            src="${getProductImagePath(product, imageName)}" 
                                            alt="${localize(product.name)} thumbnail ${index + 1}"
                                            draggable="false"
                                        >
                                    </button>
                                `).join("")}
                            </div>
                        `
                        : ""
                }

            </div>

        </section>
    `;
}

function connectGalleryEvents() {
    const previousButton = document.getElementById("previousProductImage");
    const nextButton = document.getElementById("nextProductImage");

    if (previousButton) {
        previousButton.addEventListener("click", goToPreviousImage);
    }

    if (nextButton) {
        nextButton.addEventListener("click", goToNextImage);
    }

    document.querySelectorAll(".product-thumb").forEach((thumb) => {
        thumb.addEventListener("click", () => {
            updateProductGallery(Number(thumb.dataset.index));
        });
    });
}

function renderProduct() {
    const productPage = document.getElementById("productPage");

    if (!productPage) {
        return;
    }

    const productId = getProductIdFromUrl();
    const product = findProductById(productId);

    if (!product) {
        renderProductNotFound(productId);
        return;
    }

    activeProduct = product;
    activeProductImages = getProductImages(product);
    activeProductImageIndex = 0;

    document.title = `${localize(product.name)} | YEIN★SO`;

    productPage.innerHTML = `
        ${renderProductGallery(product, activeProductImages)}

        <section class="product-info reveal">
            <p class="category">
                ${getProductType(product)}
            </p>

            <h1>
                ${localize(product.name)}
            </h1>

            <p class="price">
                ${product.price}
            </p>

            <p class="description">
                ${localize(product.description)}
            </p>

            <div class="details">
                <p><strong>Maison:</strong> YEIN★SO</p>
                <p><strong>Category:</strong> ${getCategoryName(product.category)}</p>
                <p><strong>Family:</strong> ${getFamilyName(product.family)}</p>
                <p><strong>Type:</strong> ${getProductType(product)}</p>
                <p><strong>Images:</strong> ${activeProductImages.length}</p>
            </div>

            <a href="contact.html" class="btn btn-dark">
                Request Information
            </a>

            <a href="collection.html" class="back-link">
                Back to Collection
            </a>
        </section>
    `;

    connectGalleryEvents();

    if (typeof initRevealAnimations === "function") {
        initRevealAnimations();
    }
}

document.addEventListener("DOMContentLoaded", renderProduct);

window.addEventListener("languageChanged", () => {
    renderProduct();
});

document.addEventListener("keydown", (event) => {
    if (!activeProduct || activeProductImages.length <= 1) {
        return;
    }

    if (event.key === "ArrowLeft") {
        goToPreviousImage();
    }

    if (event.key === "ArrowRight") {
        goToNextImage();
    }
});