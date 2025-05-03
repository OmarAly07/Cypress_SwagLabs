class P06_OrderConfirmationPage{
    getPageUrl() {
        return cy.url();
    }
    getOrderConfirmationMessage() {
        return cy.get('.complete-header');
    }
    getBackToHome() {
        cy.get('#back-to-products').click();
    }
    logout(){
        cy.get('#react-burger-menu-btn').click();
        cy.get('#logout_sidebar_link').click();
    }

}
export default P06_OrderConfirmationPage;