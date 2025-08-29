// Products Service - Manages product data
class ProductsService {
    constructor() {
        this.products = JSON.parse(localStorage.getItem('products')) || [
            { id: 1, name: 'hoodie', image: 'https://m.media-amazon.com/images/I/51tEciwZARL.jpg', price: 1000, colors: 'red' },
            { id: 2, name: 'jeans', image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS-gNnQj5hHFmlvbSZjACGvZ2R3GHfUC6zL3ViZGXTMC8Z5MR-If7jikESuzpUFeMRSgDiMb0FR9xPUSruyylJbc-javHeGNK50HAFKEv3PRXLP3HSIuN38', price: 2000, colors: 'blue' },
            { id: 3, name: 'shoes', image: 'https://assets.adidas.com/images/w_940,f_auto,q_auto/bdd9f8cd43664fffbd3da8bf01188fca_9366/B75807_07_standard.jpg', price: 3000, colors: 'black' },
        ];
        this.selectedProduct = null;
    }

    getProducts() {
        return this.products;
    }

    setSelectedProduct(product) {
        this.selectedProduct = product;
        localStorage.setItem('selectedProduct', JSON.stringify(product));
    }

    getSelectedProduct() {
        if (!this.selectedProduct) {
            this.selectedProduct = JSON.parse(localStorage.getItem('selectedProduct'));
        }
        return this.selectedProduct;
    }

    addProduct(product) {
        product.id = Date.now();
        this.products.push(product);
        this.saveProducts();
    }

    editProduct(updatedProduct) {
        const index = this.products.findIndex(p => p.id === updatedProduct.id);
        if (index !== -1) {
            this.products[index] = updatedProduct;
            this.saveProducts();
        }
    }

    deleteProduct(id) {
        this.products = this.products.filter(p => p.id !== id);
        this.saveProducts();
    }

    saveProducts() {
        localStorage.setItem('products', JSON.stringify(this.products));
    }
}

// Create a global instance
window.productsService = new ProductsService();