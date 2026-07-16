let activeProduct = null;
let activeProductImages = [];
let activeProductImageIndex = 0;

function productPageText(key) {
    const lang = currentLang();

    const text = {
        productNotFound: {
            en: "Product not found.",
            fr: "Produit introuvable.",
            ko: "제품을 찾을 수 없습니다."
        },
        productMissingText: {
            en: "The selected piece does not exist or is no longer available.",
            fr: "La pièce sélectionnée n’existe pas ou n’est plus disponible.",
            ko: "선택한 피스가 존재하지 않거나 더 이상 제공되지 않습니다."
        },
        backToCollection: {
            en: "Back to Collection",
            fr: "Retour à la collection",
            ko: "컬렉션으로 돌아가기"
        },
        requestInformation: {
            en: "Request Information",
            fr: "Demander des informations",
            ko: "문의하기"
        },
        maison: {
            en: "Maison",
            fr: "Maison",
            ko: "메종"
        },
        category: {
            en: "Category",
            fr: "Catégorie",
            ko: "카테고리"
        },
        family: {
            en: "Family",
            fr: "Famille",
            ko: "패밀리"
        },
        type: {
            en: "Type",
            fr: "Type",
            ko: "타입"
        },
        images: {
            en: "Images",
            fr: "Images",
            ko: "이미지"
        }
    };

    return text[key]?.[lang] || text[key]?.en || key;
}

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

    const mainImage = document.getElementById("ysMainProductImage");
    const counter = document.getElementById("ysProductImageCounter");

    if (mainImage) {
        mainImage.src = getActiveImageSrc(activeProductImageIndex);
        mainImage.alt = `${localize(activeProduct.name)} image ${activeProductImageIndex + 1}`;
    }

    if (counter) {
        counter.textContent = `${activeProductImageIndex + 1} / ${activeProductImages.length}`;
    }

    document.querySelectorAll(".ys-thumb-button").forEach((thumb) => {
        thumb.classList.toggle(
            "active",
            Number(thumb.dataset.index) === activeProductImageIndex
        );
    });
}

function previousProductImage() {
    updateProductGallery(activeProductImageIndex - 1);
}

function nextProductImage() {
    updateProductGallery(activeProductImageIndex + 1);
}

function renderProductNotFound(productId) {
    const productPage = document.getElementById("productPage");

    if (!productPage) {
        return;
    }

    productPage.innerHTML = `
        <section class="product-not-found reveal">
            <p class="section-label">${productPageText("productNotFound")}</p>
            <h1>${productPageText("productNotFound")}</h1>
            <p>${productPageText("productMissingText")}</p>

            <p class="debug-product-id">
                Missing ID: ${productId || "no id in URL"}
            </p>

            <a href="collection.html" class="btn btn-dark">
                ${productPageText("backToCollection")}
            </a>
        </section>
    `;
}

function renderProductGallery(product, images) {
    const hasMultipleImages = images.length > 1;

    return `
        <section class="ys-gallery-shell reveal">

            <div class="ys-main-photo-wrapper">

                <img
                    id="ysMainProductImage"
                    class="ys-main-photo"
                    src="${getProductImagePath(product, images[0])}"
                    alt="${localize(product.name)}"
                    draggable="false"
                    onerror="this.style.display='none'; this.parentElement.classList.add('image-missing');"
                >

                ${
                    hasMultipleImages
                        ? `
                            <button
                                id="ysPreviousImage"
                                class="ys-image-arrow ys-image-arrow-left"
                                type="button"
                                aria-label="Previous image"
                            >
                                ‹
                            </button>

                            <button
                                id="ysNextImage"
                                class="ys-image-arrow ys-image-arrow-right"
                                type="button"
                                aria-label="Next image"
                            >
                                ›
                            </button>
                        `
                        : ""
                }

            </div>

            <div class="ys-gallery-meta">
                <p class="ys-image-count" id="ysProductImageCounter">
                    1 / ${images.length}
                </p>

                ${
                    hasMultipleImages
                        ? `
                            <div class="ys-thumb-grid">
                                ${images.map((imageName, index) => `
                                    <button
                                        class="ys-thumb-button ${index === 0 ? "active" : ""}"
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

function connectProductGallery() {
    const previousButton = document.getElementById("ysPreviousImage");
    const nextButton = document.getElementById("ysNextImage");

    if (previousButton) {
        previousButton.addEventListener("click", previousProductImage);
    }

    if (nextButton) {
        nextButton.addEventListener("click", nextProductImage);
    }

    document.querySelectorAll(".ys-thumb-button").forEach((thumb) => {
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
            <p class="category">${getProductType(product)}</p>

            <h1>${localize(product.name)}</h1>

            <p class="price">${product.price}</p>

            <p class="description">${localize(product.description)}</p>

            <div class="details">
                <p><strong>${productPageText("maison")}:</strong> YEIN★SO</p>
                <p><strong>${productPageText("category")}:</strong> ${getCategoryName(product.category)}</p>
                <p><strong>${productPageText("family")}:</strong> ${getFamilyName(product.family)}</p>
                <p><strong>${productPageText("type")}:</strong> ${getProductType(product)}</p>
                <p><strong>${productPageText("images")}:</strong> ${activeProductImages.length}</p>
            </div>

            <a href="contact.html" class="btn btn-dark">
                ${productPageText("requestInformation")}
            </a>

            <a href="collection.html" class="back-link">
                ${productPageText("backToCollection")}
            </a>
        </section>
    `;

    connectProductGallery();

    if (typeof initRevealAnimations === "function") {
        initRevealAnimations();
    }
}

document.addEventListener("DOMContentLoaded", renderProduct);

window.addEventListener("languageChanged", renderProduct);

document.addEventListener("keydown", (event) => {
    if (!activeProduct || activeProductImages.length <= 1) {
        return;
    }

    if (event.key === "ArrowLeft") {
        previousProductImage();
    }

    if (event.key === "ArrowRight") {
        nextProductImage();
    }
});