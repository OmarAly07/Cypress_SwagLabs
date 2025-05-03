import P04_CheckoutPage from "./P04_CheckoutPage";
class P03_CartPage{
    getPageUrl() {
        return cy.url();
    }
    
    removeThelastProduct() {
        cy.get('.cart_item').last().find('.btn_secondary').click();
    }
    
    getPageTitle() {
        return cy.get('.title');
    }

    getCartCount() {
        return cy.get('.shopping_cart_badge');
    }

    getToCheckOutPage() {
        cy.get('.checkout_button').click();
        return new P04_CheckoutPage();
    }


}
export default P03_CartPage;