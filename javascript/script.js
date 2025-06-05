const products = [
    { name: "Laptop", price: 699 },
    { name: "Handy", price: 299 },
    { name: "Tablet", price: 399 }
];

console.log(products[0].name);
console.log(products[0].price);

products.forEach(function (product) {
    console.log(product.name + ": €" + product.price);
});

const productList = document.getElementById("productList");

products.forEach((product) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = product.name + " - " + product.price + " EUR";
    productList.appendChild(listItem);
});

const search = document.getElementById("searchInput");
search.addEventListener("input", function (event) {
    const userInput = event.target.value.toLowerCase();

    const filtered = products.filter((product) => {
        return product.name.toLowerCase().includes(userInput);
    });

    productList.innerHTML = "";

    filtered.forEach((product) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = product.name + " - " + product.price + " EUR";
        productList.appendChild(listItem);
    });
});