import P05_OverViewPage from './P05_OverViewPage.js';
class P04_CheckoutPage{
getPageUrl() {
    return cy.url();
}



fillCheckOutData(firstName, lastName, postalCode) {
    cy.get('#first-name').type(firstName);
    cy.get('#last-name').type(lastName);
    cy.get('#postal-code').type(postalCode);
    
}
confirmCheckOut() {
    cy.get('#continue').click();
    return new P05_OverViewPage();
}
}
export default P04_CheckoutPage;