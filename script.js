import { products } from "./products.js";

const productList = document.getElementById("productList");
const categoryFilter = document.getElementById("categoryFilter");
const sortPrice = document.getElementById("sort");

displayProducts(products);

function displayProducts(list) {
    productList.innerHTML = "";

    list.forEach(function (item) {
        const div = document.createElement("div");
        div.className = "card";

        div.innerHTML = `
    <h4>${item.name}</h4>
    <p>₹${item.price}</p>
    <p>${item.category}</p>
    <p>⭐ ${item.rating}</p>
    `;

        productList.appendChild(div);
    });
}

function updateProducts() {
    let filtered = products;

    if (categoryFilter.value !== "all") {
        filtered = filtered.filter(function (item) {
            return item.category === categoryFilter.value;
        });
    }

    if (sortPrice.value === "low") {
        filtered = [...filtered].sort(function (a, b) {
            return a.price - b.price;
        });
    }

    if (sortPrice.value === "high") {
        filtered = [...filtered].sort(function (a, b) {
            return b.price - a.price;
        });
    }

    if (sortPrice.value === "rhigh") {
        filtered = [...filtered].sort(function (a, b) {
            return b.rating - a.rating;
        });
    }

    if (sortPrice.value === "rlow") {
        filtered = [...filtered].sort(function (a, b) {
            return a.rating - b.rating;
        });
    }

    displayProducts(filtered);
}

categoryFilter.addEventListener("change", updateProducts);
sortPrice.addEventListener("change", updateProducts);

displayProducts(products);