const form = document.getElementById("productForm");
const productList = document.getElementById("productTableList");
const nameInput = document.getElementById("productNameInput");
const imageInput = document.getElementById("productImageInput");
const priceInput = document.getElementById("productPriceInput");
const categoryInput = document.getElementById("productCategoryInput");
const updateDataButton = document.getElementById("updateProductButton");

const request = new Request("http://localhost:3005/products");
const ui = new UI();

let updateState = null;

eventListeners = () => {
    document.addEventListener("DOMContentLoaded",getAllProductsFromData);
    form.addEventListener("submit",addProduct);
    productList.addEventListener("click",updateOrDelete);
    updateDataButton.addEventListener("click",updateProduct);
}

const getAllProductsFromData = () => {
    request.get()
    .then(response => {
        response.forEach(product => {
            productList.innerHTML += `
            <tr>
                <td>${product.id}</td>
                <td>${product.name}</td>
                <td><img src="${product.imageURL}" alt="${product.name}_Image"></td>
                <td>${product.price}</td>
                <td>${product.category}</td>
                <td><a href="#" id="update">Update</a></td>
                <td><a href="#" id="delete">Delete</a></td>
            </tr>
            `
        });
    })
    .catch(err => console.log(err));
}
const addProduct = (e) => {
    const productName = nameInput.value.trim();
    const productImage = imageInput.value.trim();
    const productPrice = Number(priceInput.value);
    const productCategory = categoryInput.value.trim();

    if(productName === "" || productImage === "" || productPrice === "" || productCategory === ""){
        alert("Please fill in all fields");
    }
    else {
        request.post({
            name: productName,
            imageURL: productImage,
            price: productPrice,
            category: productCategory
        })
        .then()
        .catch(err => console.log(err));
    }
    e.preventDefault();
}
const updateOrDelete = (e) => {
    if(e.target.id === "update"){
        // Update
        updateProductController(e.target.parentElement.parentElement);
    }
    else if(e.target.id === "delete"){
        // Delete
        deleteProduct(e.target.parentElement.parentElement);
    }
}
const deleteProduct = (target) => {
    if(confirm("Are you sure?")){
        const id = target.children[0].textContent;

        request.delete(id);
    }
}
const updateProductController = (targetProduct) => {
    ui.toggleUpdateButton(targetProduct);

    if(updateState === null){
        updateState = {
            updateID : targetProduct.children[0].textContent,
            updateParent : targetProduct
        }
    }
    else {
        updateState === null;
    }
}
const updateProduct = () => {
    if(updateState){
        const data = {
            name : nameInput.value.trim(),
            imageURL : imageInput.value.trim(),
            price : Number(priceInput.value),
            category : categoryInput.value.trim()
        }
        request.put(updateState.updateID,data)
        .then()
        .catch(err => console.log(err));
    }
}

eventListeners();