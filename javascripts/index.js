const fruitList = document.getElementById("fruitsBox");
const vegetableList = document.getElementById("vegetablesBox");

const request = new Request("http://localhost:3005/products");

eventListeners = () => {
    document.addEventListener("DOMContentLoaded",getFruits);
    document.addEventListener("DOMContentLoaded",getVegetables);
}

const getFruits = () => {
    request.get()
        .then(response => {
            response.forEach(product => {
                if (product.category === "Fruit") {
                    fruitList.innerHTML += getProductHTML(product);
                }
            });
        })
}

const getVegetables = () => {
    request.get()
        .then(response => {
            response.forEach(product => {
                if (product.category === "Vegetable") {
                    vegetableList.innerHTML += getProductHTML(product);
                }
            });
        })
}

const getProductHTML = (product) => {
    return `
        <div class="product" id="product">
            <img src="${product.imageURL}" alt="${product.name}_Image" id="productImage">
            <h3 id="productName">${product.name}</h3>
            <hr>
            <h4><span id="price">${product.price}</span>$</h4>
            <button class="addCartBtn">Add Cart</button>
        </div>
    `;
}


eventListeners();