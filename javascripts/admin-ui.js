class UI {
    constructor(){
        this.updateButton = document.getElementById("updateProductButton");
        this.addButton = document.getElementById("addProductButton");
        this.nameInput = document.getElementById("productNameInput");
        this.imageInput = document.getElementById("productImageInput");
        this.priceInput = document.getElementById("productPriceInput");
        this.categoryInput = document.getElementById("productCategoryInput");
    }
    toggleUpdateButton = target => {
        if(this.updateButton.style.display = "none"){
            this.updateButton.style.display = "block";
            this.addButton.style.display = "none";
            this.addProductInfoToInputs(target);
        }
        else {
            this.updateButton.style.display = "none";
        }
    }
    addProductInfoToInputs = target => {
        const children = target.children;

        this.nameInput.value = children[1].textContent;
        this.imageInput.value = children[2].firstChild.src;
        this.priceInput.value = children[3].textContent;
        this.categoryInput.value = children[4].textContent;
    }
}   