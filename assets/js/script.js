
document.addEventListener('DOMContentLoaded', function() {
    displayProducts(pageNumber);
});
function showMenu(){
    document.querySelector('.menu-links').classList.toggle('show');
}
function closeMenu(){
    document.querySelector('.menu-links').classList.toggle('show');
}
let allPages;
let pageNumber = 1;

function nextPage() {
    if (pageNumber < allPages) {
        displayProducts(++pageNumber);
    }
}

function prevPage() {
    if (pageNumber > 1) {
        displayProducts(--pageNumber);
    }
}

function displayProducts(pageNumber) {
    const productsContainer = document.querySelector('.products-content');
    const total = document.querySelector('.header span');
    const pageDisplay = document.querySelector('.page-number');
    const nextBtn = document.querySelector('.next-btn');
    const prevBtn = document.querySelector('.prev-btn');

    pageDisplay.innerHTML = pageNumber;
    let productsPerPage = 10;
    let productsData = getProductData();
    let allProducts = productsData.length;
    total.innerHTML = "("+allProducts+")";
    allPages = Math.ceil(allProducts / productsPerPage);
    let page = (pageNumber - 1) * productsPerPage;
    let products = '';

    nextBtn.classList.toggle('disable', pageNumber === allPages);
    prevBtn.classList.toggle('disable', pageNumber === 1);

    for (let a = page; a < allProducts && a < page + productsPerPage; a++) {
        products += `<div class="products-wrapper">
                        <div class="img-wrapper" style="background-image: url(${productsData[a].image_url});">
                            <!-- Your image content goes here -->
                        </div>
                        <div class="product-description">
                            <div class="title-wrapper">
                                ${productsData[a].name}
                            </div>
                            <div class="price-wrapper">
                                Price: <span>$${productsData[a].price}</span>
                            </div>
                            <div class="product-buttons">
                                <button class="cart-btn" onclick="addToCart(${productsData[a].id})">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="18" viewBox="0 0 576 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>
                                </button>
                                <button class="buy-btn" onclick="buyNow(${productsData[a].id})">Buy Now</button>
                            </div>
                        </div>
                    </div>`;
    }
    productsContainer.innerHTML = products;
}
function addToCart(id) {
    let modal = document.querySelector('.modal-container');
    modal.classList.add('show');

    // Add opacity transition class after a short delay to trigger the animation
    setTimeout(function() {
        modal.classList.add('opacity-animation');
    }, 50);

    // Remove the 'show' and 'opacity-animation' classes after 1000 milliseconds
    setTimeout(function() {
        modal.classList.remove('show', 'opacity-animation');
    }, 1050);
}

function getProductData(){
    let productsData = [
        { id: 1, image_url: "assets/img/products/prod-1.jpg", name: "THALIA MAXI DRESS", price: 12.4, color: ["red", "green"], size: ["L"] },
        { id: 2, image_url: "assets/img/products/prod-2.jpg", name: "Overlap Ruffles Dress", price: 24.99, color: ["red", "blue"], size: ["M", "L", "XL"] },
        { id: 3, image_url: "assets/img/products/prod-3.jpg", name: "Wrap Dress with Sleeves", price: 34.5, color: ["white", "gray"], size: ["36", "37", "38"] },
        { id: 4, image_url: "assets/img/products/prod-4.jpg", name: "Korean Skater Floral Dress", price: 29.99, color: ["pink", "yellow"], size: ["S", "M", "L"] },
        { id: 5, image_url: "assets/img/products/prod-5.jpg", name: "Corduroy Basic Tailored Shorts", price: 19.75, color: ["brown", "navy"], size: ["40", "41", "42"] },
        { id: 6, image_url: "assets/img/products/prod-6.jpg", name: "Fashionable Short Trendy and Stretchable", price: 59.99, color: ["black", "gray"], size: ["M", "L", "XL"] },
        { id: 7, image_url: "assets/img/products/prod-7.jpg", name: "Cargo Shorts", price: 45.0, color: ["blue", "lime"], size: ["39", "40", "41"] },
        { id: 8, image_url: "assets/img/products/prod-8.jpg", name: "Premium Urban Shorts", price: 22.5, color: ["pink", "blue"], size: ["S", "M", "L"] },
        { id: 9, image_url: "assets/img/products/prod-9.jpg", name: "Cotton Brass Sweat Shorts for Women", price: 18.0, color: ["brown", "beige"], size: ["37", "38", "39"] },
        { id: 10, image_url: "assets/img/products/prod-10.jpg", name: "JVF Shoes for women korean trendy", price: 32.99, color: ["denim", "black"], size: ["28", "30", "32"] },
        // Add more entries as needed
        { id: 11, image_url: "assets/img/products/prod-11.jpg", name: "Fashion rubber shoes for women ", price: 39.5, color: ["tan", "burgundy"], size: ["36", "37", "38"] },
        { id: 12, image_url: "assets/img/products/prod-12.jpg", name: "Korean casual sneakers shoes low cuts shoes", price: 79.99, color: ["camel", "navy"], size: ["M", "L", "XL"] },
        { id: 13, image_url: "assets/img/products/prod-13.jpg", name: "SK mens shoes breathable new sports", price: 28.0, color: ["orange", "purple"], size: ["S", "M", "L"] },
        { id: 14, image_url: "assets/img/products/prod-14.jpg", name: "Summer fashion high heels", price: 55.0, color: ["black", "cognac"], size: [] }, // No size specified
        { id: 15, image_url: "assets/img/products/prod-15.jpg", name: "New chunky high heels for women", price: 49.99, color: ["brown", "navy"], size: ["41", "42", "43"] },
        { id: 16, image_url: "assets/img/products/prod-16.jpg", name: "Western block heels", price: 36.5, color: ["purple", "green"], size: ["S", "M", "L"] },
        { id: 17, image_url: "assets/img/products/prod-17.jpg", name: "Classy style formal high heels", price: 15.0, color: ["black", "brown"], size: ["M", "L", "XL"] },
    ];
    
    return productsData;
    
}
displayProducts(1);