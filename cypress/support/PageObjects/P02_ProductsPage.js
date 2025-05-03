import P03_CartPage from "./P03_CartPage";
class P02_ProductsPage {
    getPageUrl() {
        return cy.url();
    }

    addProductsToCart(numberOfProducts) {
        return cy.get('.inventory_item').then(($products) => {
            const products = $products.toArray();
            const shuffled = [...products].sort(() => 0.5 - Math.random());
            const selectedProducts = shuffled.slice(0, numberOfProducts);

            selectedProducts.forEach((product) => {
                cy.wrap(product).find('.btn_inventory').click();
            });

            return cy.wrap(null).then(() => selectedProducts.length);
        });
    }
    filterProducts(filterType) {
        cy.get('.product_sort_container').select(filterType);

    }

    selectDesiredProducts(count) {
        return cy.get('.inventory_item').then(($products) => {
            const products = $products.toArray();

            const selected = products.slice(0, count);

            selected.forEach((product) => {
                const productName = product.querySelector('.inventory_item_name').innerText;
                cy.log(`Selected product: ${productName}`);
                cy.wrap(product).find('.btn_inventory').click();
            });

        });
    }



    getProductSorting() {
        let previousPrice = 0;
        cy.get('.inventory_item_price').each(($el) => {
            const price = Number($el.text().replace('$', '').trim());
            expect(price).to.be.greaterThan(previousPrice);
            previousPrice = price;
            cy.log(price);
        });
    }


    getCartCount() {
        return cy.get('.shopping_cart_badge');
    }

    getToCartPage() {
        cy.get('.shopping_cart_link').click();
        return new P03_CartPage();

    }


}


export default P02_ProductsPage;