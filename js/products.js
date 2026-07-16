const categories = [
    {
        id: "all",
        name: {
            en: "All",
            fr: "Tout",
            ko: "전체"
        }
    },
    {
        id: "bags",
        name: {
            en: "Bags",
            fr: "Sacs",
            ko: "가방"
        }
    },
    {
        id: "wallets",
        name: {
            en: "Wallets",
            fr: "Portefeuilles",
            ko: "지갑"
        }
    },
    {
        id: "card-cases",
        name: {
            en: "Card Cases",
            fr: "Porte-cartes",
            ko: "카드 케이스"
        }
    }
];

const families = [
    {
        id: "big-bag",
        category: "bags",
        folderPath: "bags/BigBag",
        name: {
            en: "Big Bag",
            fr: "Grand Sac",
            ko: "빅 백"
        }
    },
    {
        id: "big-tote-bag",
        category: "bags",
        folderPath: "bags/BigToteBag",
        name: {
            en: "Big Tote Bag",
            fr: "Grand Sac Cabas",
            ko: "빅 토트백"
        }
    },
    {
        id: "mini-bag",
        category: "bags",
        folderPath: "bags/MiniBag",
        name: {
            en: "Mini Bag",
            fr: "Mini Sac",
            ko: "미니백"
        }
    },
    {
        id: "mini-tote-bag",
        category: "bags",
        folderPath: "bags/MiniToteBag",
        name: {
            en: "Mini Tote Bag",
            fr: "Mini Sac Cabas",
            ko: "미니 토트백"
        }
    },
    {
        id: "special",
        category: "bags",
        folderPath: "bags/Special",
        name: {
            en: "Special Pieces",
            fr: "Pièces Spéciales",
            ko: "스페셜 피스"
        }
    },
    {
        id: "business-card-cases",
        category: "card-cases",
        folderPath: "business card cases/small",
        name: {
            en: "Business Card Cases",
            fr: "Étuis Cartes de Visite",
            ko: "명함 케이스"
        }
    },
    {
        id: "bifold-wallets",
        category: "wallets",
        folderPath: "wallets/bifold wallets",
        name: {
            en: "Bifold Wallets",
            fr: "Portefeuilles Bifold",
            ko: "반지갑"
        }
    },
    {
        id: "long-wallets",
        category: "wallets",
        folderPath: "wallets/long wallets",
        name: {
            en: "Long Wallets",
            fr: "Portefeuilles Longs",
            ko: "장지갑"
        }
    },
    {
        id: "zipper-wallets",
        category: "wallets",
        folderPath: "wallets/zipper wallets",
        name: {
            en: "Zipper Wallets",
            fr: "Portefeuilles Zippés",
            ko: "지퍼 지갑"
        }
    }
];

const productDescriptions = {
    bag: {
        en: "A genuine crocodile leather bag crafted with structure, shine and presence.",
        fr: "Un sac en cuir de crocodile véritable, travaillé avec structure, éclat et présence.",
        ko: "구조적인 형태와 선명한 존재감을 담아 완성한 리얼 크로커다일 레더 백입니다."
    },
    tote: {
        en: "A genuine crocodile leather tote bag designed for elegance, volume and daily presence.",
        fr: "Un sac cabas en cuir de crocodile véritable, pensé pour l’élégance, le volume et la présence au quotidien.",
        ko: "우아한 볼륨과 데일리한 존재감을 위해 제작된 리얼 크로커다일 레더 토트백입니다."
    },
    miniBag: {
        en: "A compact genuine crocodile leather bag with a refined silhouette and strong character.",
        fr: "Un mini sac en cuir de crocodile véritable, avec une silhouette raffinée et un caractère affirmé.",
        ko: "정제된 실루엣과 강한 캐릭터를 담은 리얼 크로커다일 레더 미니백입니다."
    },
    wallet: {
        en: "A genuine crocodile leather wallet with refined texture and everyday function.",
        fr: "Un portefeuille en cuir de crocodile véritable, avec une texture raffinée et une fonction quotidienne.",
        ko: "정제된 텍스처와 실용성을 갖춘 리얼 크로커다일 레더 지갑입니다."
    },
    cardCase: {
        en: "A genuine crocodile leather card case made for refined professional essentials.",
        fr: "Un porte-cartes en cuir de crocodile véritable, conçu pour des essentiels professionnels raffinés.",
        ko: "세련된 비즈니스 에센셜을 위해 완성된 리얼 크로커다일 레더 카드 케이스입니다."
    },
    special: {
        en: "A special genuine crocodile leather piece designed with a distinctive YEIN★SO character.",
        fr: "Une pièce spéciale en cuir de crocodile véritable, conçue avec le caractère distinctif de YEIN★SO.",
        ko: "YEIN★SO만의 독보적인 캐릭터를 담은 리얼 크로커다일 레더 스페셜 피스입니다."
    }
};

const products = [
    {
        id: "big-bag",
        family: "big-bag",
        category: "bags",
        type: {
            en: "Big Bag",
            fr: "Grand sac",
            ko: "빅 백"
        },
        folderPath: "bags/BigBag",
        name: {
            en: "Big Bag",
            fr: "Grand Sac",
            ko: "빅 백"
        },
        description: productDescriptions.bag,
        price: "Price on request",
        images: ["image-1.jpg"]
    },
    {
        id: "big-bag-red-blue-pink",
        family: "big-bag",
        category: "bags",
        type: {
            en: "Big Bag",
            fr: "Grand sac",
            ko: "빅 백"
        },
        folderPath: "bags/BigBag/RedBLuePink",
        name: {
            en: "Big Bag Red Blue Pink",
            fr: "Grand Sac Rouge Bleu Rose",
            ko: "레드 블루 핑크 빅 백"
        },
        description: productDescriptions.bag,
        price: "Price on request",
        images: ["image-1.jpg"]
    },
    {
        id: "big-bag-white",
        family: "big-bag",
        category: "bags",
        type: {
            en: "Big Bag",
            fr: "Grand sac",
            ko: "빅 백"
        },
        folderPath: "bags/BigBag/White",
        name: {
            en: "White Big Bag",
            fr: "Grand Sac Blanc",
            ko: "화이트 빅 백"
        },
        description: productDescriptions.bag,
        price: "Price on request",
        images: ["image-1.jpg"]
    },
    {
        id: "big-tote-bag",
        family: "big-tote-bag",
        category: "bags",
        type: {
            en: "Tote Bag",
            fr: "Sac cabas",
            ko: "토트백"
        },
        folderPath: "bags/BigToteBag",
        name: {
            en: "Big Tote Bag",
            fr: "Grand Sac Cabas",
            ko: "빅 토트백"
        },
        description: productDescriptions.tote,
        price: "Price on request",
        featured: true,
        images: ["image-1.jpg", "image-2.jpg", "image-3.jpg"]
    },
    {
        id: "mini-bag",
        family: "mini-bag",
        category: "bags",
        type: {
            en: "Mini Bag",
            fr: "Mini sac",
            ko: "미니백"
        },
        folderPath: "bags/MiniBag",
        name: {
            en: "Mini Bag",
            fr: "Mini Sac",
            ko: "미니백"
        },
        description: productDescriptions.miniBag,
        price: "Price on request",
        images: ["image-1.jpg"]
    },
    {
        id: "black-mini-bag",
        family: "mini-bag",
        category: "bags",
        type: {
            en: "Mini Bag",
            fr: "Mini sac",
            ko: "미니백"
        },
        folderPath: "bags/MiniBag/Black",
        name: {
            en: "Black Mini Bag",
            fr: "Mini Sac Noir",
            ko: "블랙 미니백"
        },
        description: productDescriptions.miniBag,
        price: "Price on request",
        images: ["image-1.jpg"]
    },
    {
        id: "black-and-white-mini-bag",
        family: "mini-bag",
        category: "bags",
        type: {
            en: "Mini Bag",
            fr: "Mini sac",
            ko: "미니백"
        },
        folderPath: "bags/MiniBag/BlackAndWhite",
        name: {
            en: "Black And White Mini Bag",
            fr: "Mini Sac Noir et Blanc",
            ko: "블랙 앤 화이트 미니백"
        },
        description: productDescriptions.miniBag,
        price: "Price on request",
        images: ["image-1.jpg", "image-2.jpg"]
    },
    {
        id: "light-pink-dark-grey-mini-bag",
        family: "mini-bag",
        category: "bags",
        type: {
            en: "Mini Bag",
            fr: "Mini sac",
            ko: "미니백"
        },
        folderPath: "bags/MiniBag/LightPinkAndDarkGrey",
        name: {
            en: "Light Pink And Dark Grey Mini Bag",
            fr: "Mini Sac Rose Clair et Gris Foncé",
            ko: "라이트 핑크 앤 다크 그레이 미니백"
        },
        description: productDescriptions.miniBag,
        price: "Price on request",
        images: ["image-1.jpg", "image-2.jpg", "image-3.jpg"]
    },
    {
        id: "mini-tote-bag",
        family: "mini-tote-bag",
        category: "bags",
        type: {
            en: "Tote Bag",
            fr: "Sac cabas",
            ko: "토트백"
        },
        folderPath: "bags/MiniToteBag",
        name: {
            en: "Mini Tote Bag",
            fr: "Mini Sac Cabas",
            ko: "미니 토트백"
        },
        description: productDescriptions.tote,
        price: "Price on request",
        images: ["image-1.jpg"]
    },
    {
        id: "blue-mini-tote-bag",
        family: "mini-tote-bag",
        category: "bags",
        type: {
            en: "Tote Bag",
            fr: "Sac cabas",
            ko: "토트백"
        },
        folderPath: "bags/MiniToteBag/blue",
        name: {
            en: "Blue Mini Tote Bag",
            fr: "Mini Sac Cabas Bleu",
            ko: "블루 미니 토트백"
        },
        description: productDescriptions.tote,
        price: "Price on request",
        featured: true,
        images: ["image-1.jpg", "image-2.jpg", "image-3.jpg", "image-4.jpg"]
    },
    {
        id: "kets-soy",
        family: "special",
        category: "bags",
        type: {
            en: "Special Piece",
            fr: "Pièce spéciale",
            ko: "스페셜 피스"
        },
        folderPath: "bags/Special/KetS_SoY",
        name: {
            en: "KetS SoY",
            fr: "KetS SoY",
            ko: "KetS SoY"
        },
        description: productDescriptions.special,
        price: "Price on request",
        images: ["image-1.jpg"]
    },
    {
        id: "business-card-case-small",
        family: "business-card-cases",
        category: "card-cases",
        type: {
            en: "Business Card Case",
            fr: "Étui cartes de visite",
            ko: "명함 케이스"
        },
        folderPath: "business card cases/small",
        name: {
            en: "Small Business Card Case",
            fr: "Petit Étui Cartes de Visite",
            ko: "스몰 명함 케이스"
        },
        description: productDescriptions.cardCase,
        price: "Price on request",
        images: ["image-1.jpg"]
    },
    {
        id: "business-card-case-small-color",
        family: "business-card-cases",
        category: "card-cases",
        type: {
            en: "Business Card Case",
            fr: "Étui cartes de visite",
            ko: "명함 케이스"
        },
        folderPath: "business card cases/small/color",
        name: {
            en: "Small Color Business Card Case",
            fr: "Petit Étui Cartes de Visite Color",
            ko: "스몰 컬러 명함 케이스"
        },
        description: productDescriptions.cardCase,
        price: "Price on request",
        featured: true,
        images: ["image-1.jpg", "image-2.jpg"]
    },
    {
        id: "bonbons-au-sucre",
        family: "bifold-wallets",
        category: "wallets",
        type: {
            en: "Bifold Wallet",
            fr: "Portefeuille bifold",
            ko: "반지갑"
        },
        folderPath: "wallets/bifold wallets/BonbonsAuSucre",
        name: {
            en: "Bonbons Au Sucre",
            fr: "Bonbons Au Sucre",
            ko: "Bonbons Au Sucre"
        },
        description: productDescriptions.wallet,
        price: "Price on request",
        images: ["image-1.jpg", "image-2.jpg"]
    },
    {
        id: "cest-du-noir",
        family: "bifold-wallets",
        category: "wallets",
        type: {
            en: "Bifold Wallet",
            fr: "Portefeuille bifold",
            ko: "반지갑"
        },
        folderPath: "wallets/bifold wallets/CestDuNoir",
        name: {
            en: "C’est Du Noir",
            fr: "C’est Du Noir",
            ko: "C’est Du Noir"
        },
        description: productDescriptions.wallet,
        price: "Price on request",
        images: ["image-1.jpg", "image-2.jpg"]
    },
    {
        id: "long-wallet",
        family: "long-wallets",
        category: "wallets",
        type: {
            en: "Long Wallet",
            fr: "Portefeuille long",
            ko: "장지갑"
        },
        folderPath: "wallets/long wallets",
        name: {
            en: "Long Wallet",
            fr: "Portefeuille Long",
            ko: "장지갑"
        },
        description: productDescriptions.wallet,
        price: "Price on request",
        images: ["image-1.jpg"]
    },
    {
        id: "black-long-wallet",
        family: "long-wallets",
        category: "wallets",
        type: {
            en: "Long Wallet",
            fr: "Portefeuille long",
            ko: "장지갑"
        },
        folderPath: "wallets/long wallets/Black",
        name: {
            en: "Black Long Wallet",
            fr: "Portefeuille Long Noir",
            ko: "블랙 장지갑"
        },
        description: productDescriptions.wallet,
        price: "Price on request",
        images: ["image-1.jpg"]
    },
    {
        id: "black-blue-long-wallet",
        family: "long-wallets",
        category: "wallets",
        type: {
            en: "Long Wallet",
            fr: "Portefeuille long",
            ko: "장지갑"
        },
        folderPath: "wallets/long wallets/BlackBlue",
        name: {
            en: "Black Blue Long Wallet",
            fr: "Portefeuille Long Noir Bleu",
            ko: "블랙 블루 장지갑"
        },
        description: productDescriptions.wallet,
        price: "Price on request",
        images: ["image-1.jpg"]
    },
    {
        id: "black-red-long-wallet",
        family: "long-wallets",
        category: "wallets",
        type: {
            en: "Long Wallet",
            fr: "Portefeuille long",
            ko: "장지갑"
        },
        folderPath: "wallets/long wallets/BlackRed",
        name: {
            en: "Black Red Long Wallet",
            fr: "Portefeuille Long Noir Rouge",
            ko: "블랙 레드 장지갑"
        },
        description: productDescriptions.wallet,
        price: "Price on request",
        images: ["image-1.jpg"]
    },
    {
        id: "red-black-long-wallet",
        family: "long-wallets",
        category: "wallets",
        type: {
            en: "Long Wallet",
            fr: "Portefeuille long",
            ko: "장지갑"
        },
        folderPath: "wallets/long wallets/RedBlack",
        name: {
            en: "Red Black Long Wallet",
            fr: "Portefeuille Long Rouge Noir",
            ko: "레드 블랙 장지갑"
        },
        description: productDescriptions.wallet,
        price: "Price on request",
        images: ["image-1.jpg"]
    },
    {
        id: "eclair-bon",
        family: "zipper-wallets",
        category: "wallets",
        type: {
            en: "Zipper Wallet",
            fr: "Portefeuille zippé",
            ko: "지퍼 지갑"
        },
        folderPath: "wallets/zipper wallets/ÉclairBON",
        name: {
            en: "Éclair BON",
            fr: "Éclair BON",
            ko: "Éclair BON"
        },
        description: productDescriptions.wallet,
        price: "Price on request",
        featured: true,
        images: ["image-1.jpg", "image-2.jpg", "image-3.jpg"]
    },
    {
        id: "eclair-jaune",
        family: "zipper-wallets",
        category: "wallets",
        type: {
            en: "Zipper Wallet",
            fr: "Portefeuille zippé",
            ko: "지퍼 지갑"
        },
        folderPath: "wallets/zipper wallets/ÉclairJaune",
        name: {
            en: "Éclair Jaune",
            fr: "Éclair Jaune",
            ko: "Éclair Jaune"
        },
        description: productDescriptions.wallet,
        price: "Price on request",
        images: ["image-1.jpg"]
    },
    {
        id: "eclair-toska-b",
        family: "zipper-wallets",
        category: "wallets",
        type: {
            en: "Zipper Wallet",
            fr: "Portefeuille zippé",
            ko: "지퍼 지갑"
        },
        folderPath: "wallets/zipper wallets/ÉclairToskaB",
        name: {
            en: "Éclair Toska B",
            fr: "Éclair Toska B",
            ko: "Éclair Toska B"
        },
        description: productDescriptions.wallet,
        price: "Price on request",
        images: ["image-1.jpg", "image-2.jpg", "image-3.jpg"]
    }
];

function currentLang() {
    return localStorage.getItem("yeinsocrocoLanguage") || "en";
}

function localize(value) {
    const lang = currentLang();

    if (typeof value === "string") {
        return value;
    }

    return value?.[lang] || value?.en || "";
}

function viewPiecesText() {
    const lang = currentLang();

    if (lang === "fr") {
        return "Voir les pièces";
    }

    if (lang === "ko") {
        return "피스 보기";
    }

    return "View pieces";
}

function getUrlParam(name) {
    const params = new URLSearchParams(window.location.search);
    return params.get(name);
}

function getCategoryName(categoryId) {
    const category = categories.find((item) => item.id === categoryId);
    return category ? localize(category.name) : categoryId;
}

function getFamilyName(familyId) {
    const family = families.find((item) => item.id === familyId);
    return family ? localize(family.name) : familyId;
}

function getProductType(product) {
    return localize(product.type);
}

function getProductImages(product) {
    if (!product.images || product.images.length === 0) {
        return ["image-1.jpg"];
    }

    return product.images;
}

function getProductImagePath(product, imageName) {
    return encodeURI(`./assets/products/${product.folderPath}/${imageName}`);
}

function getFamilyCoverPath(family) {
    return encodeURI(`./assets/products/${family.folderPath}/image-1.jpg`);
}

function getProductCover(product) {
    return getProductImagePath(product, getProductImages(product)[0]);
}

function createImageFrame(src, alt) {
    return `
        <div class="image-frame">
            <img 
                src="${src}" 
                alt="${alt}" 
                loading="lazy"
                onerror="this.style.display='none'; this.parentElement.classList.add('image-missing');"
            >
        </div>
    `;
}

function renderCategoryFilters() {
    const filtersContainer = document.getElementById("categoryFilters");

    if (!filtersContainer) {
        return;
    }

    const selectedFamily = getUrlParam("family");
    const selectedCategory = getUrlParam("category") || "all";

    if (selectedFamily) {
        filtersContainer.innerHTML = `
            <a href="collection.html" class="filter-btn active">
                ← ${currentLang() === "fr" ? "Retour aux collections" : currentLang() === "ko" ? "전체 컬렉션으로" : "Back to all collections"}
            </a>
        `;
        return;
    }

    filtersContainer.innerHTML = categories.map((category) => `
        <button 
            class="filter-btn ${category.id === selectedCategory ? "active" : ""}" 
            data-category="${category.id}"
            type="button"
        >
            ${localize(category.name)}
        </button>
    `).join("");

    document.querySelectorAll(".filter-btn").forEach((button) => {
        button.addEventListener("click", () => {
            const category = button.dataset.category;

            if (category === "all") {
                window.history.pushState({}, "", "collection.html");
            } else {
                window.history.pushState({}, "", `collection.html?category=${encodeURIComponent(category)}`);
            }

            renderCategoryFilters();
            renderCollection();
        });
    });
}

function renderCollection() {
    const grid = document.getElementById("productsGrid");

    if (!grid) {
        return;
    }

    const selectedFamily = getUrlParam("family");
    const selectedCategory = getUrlParam("category") || "all";

    if (selectedFamily) {
        const familyProducts = products.filter((product) => product.family === selectedFamily);
        const familyName = getFamilyName(selectedFamily);

        grid.className = "products-grid";

        grid.innerHTML = `
            <div class="collection-family-title reveal">
                <p class="section-label">Collection</p>
                <h2>${familyName}</h2>
            </div>

            ${familyProducts.map((product) => `
                <a class="product-card reveal" href="product.html?id=${encodeURIComponent(product.id)}">
                    ${createImageFrame(getProductCover(product), localize(product.name))}

                    <p class="product-category">
                        ${getProductType(product)}
                    </p>

                    <h2>
                        ${localize(product.name)}
                    </h2>

                    <p class="product-price">
                        ${product.price}
                    </p>
                </a>
            `).join("")}
        `;

        if (typeof initRevealAnimations === "function") {
            initRevealAnimations();
        }

        return;
    }

    if (selectedCategory === "all") {
        grid.className = "products-grid collection-grouped";

        const visibleCategories = categories.filter((category) => category.id !== "all");

        grid.innerHTML = visibleCategories.map((category) => {
            const categoryFamilies = families.filter((family) => family.category === category.id);

            if (categoryFamilies.length === 0) {
                return "";
            }

            return `
                <section class="collection-category-group reveal">
                    <div class="collection-category-heading">
                        <p class="section-label">${localize(category.name)}</p>
                        <h2>${localize(category.name)}</h2>
                    </div>

                    <div class="collection-category-grid">
                        ${categoryFamilies.map((family) => `
                            <a class="product-card" href="collection.html?family=${encodeURIComponent(family.id)}">
                                ${createImageFrame(getFamilyCoverPath(family), localize(family.name))}

                                <p class="product-category">
                                    ${getCategoryName(family.category)}
                                </p>

                                <h2>
                                    ${localize(family.name)}
                                </h2>

                                <p class="product-price">
                                    ${viewPiecesText()}
                                </p>
                            </a>
                        `).join("")}
                    </div>
                </section>
            `;
        }).join("");

        if (typeof initRevealAnimations === "function") {
            initRevealAnimations();
        }

        return;
    }

    grid.className = "products-grid";

    const filteredFamilies = families.filter((family) => family.category === selectedCategory);

    grid.innerHTML = filteredFamilies.map((family) => `
        <a class="product-card reveal" href="collection.html?family=${encodeURIComponent(family.id)}">
            ${createImageFrame(getFamilyCoverPath(family), localize(family.name))}

            <p class="product-category">
                ${getCategoryName(family.category)}
            </p>

            <h2>
                ${localize(family.name)}
            </h2>

            <p class="product-price">
                ${viewPiecesText()}
            </p>
        </a>
    `).join("");

    if (typeof initRevealAnimations === "function") {
        initRevealAnimations();
    }
}

function renderFeatured() {
    const featuredGrid = document.getElementById("featuredGrid");

    if (!featuredGrid) {
        return;
    }

    const featuredProducts = products.filter((product) => product.featured).slice(0, 4);

    featuredGrid.innerHTML = featuredProducts.map((product) => `
        <a class="featured-card reveal" href="product.html?id=${encodeURIComponent(product.id)}">
            ${createImageFrame(getProductCover(product), localize(product.name))}

            <h3>
                ${localize(product.name)}
            </h3>

            <p>
                ${getProductType(product)}
            </p>
        </a>
    `).join("");

    if (typeof initRevealAnimations === "function") {
        initRevealAnimations();
    }
}

function renderAllProducts() {
    renderCategoryFilters();
    renderCollection();
    renderFeatured();
}

document.addEventListener("DOMContentLoaded", renderAllProducts);
window.addEventListener("languageChanged", renderAllProducts);
window.addEventListener("popstate", renderAllProducts);