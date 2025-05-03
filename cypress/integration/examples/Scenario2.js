import P01_LoginPage from "../../support/PageObjects/P01_LoginPage";
describe('End To End Scenario 2 SwagLabs E-commerce', function()  {
  before(function() {
    cy.fixture('validLoginCredentials').then((loginData) => {
        this.loginData = loginData;
    });

    cy.fixture('validCheckOutData').then((checkoutData) => {
        this.checkoutData = checkoutData;
    });

    cy.then(() => {
        this.loginPage = new P01_LoginPage();
    });
});
    it('Successful Login > Filter Products > Select First Two Products > Get To Cart > Remove Second Product From Cart >  Complete Checkout', function() {
       cy.visit(Cypress.env('base_url'))

       this.loginPage.userLogin(this.loginData.userName, this.loginData.password)
       const productsPage = this.loginPage.confirmLogin()


       productsPage.getPageUrl().should('eq', Cypress.env('products_url'))
       productsPage.filterProducts('Price (low to high)')
       productsPage.selectDesiredProducts(2)
       productsPage.getCartCount().should('have.text', '2')
       const cartPage = productsPage.getToCartPage()

       cartPage.getPageUrl().should('eq', Cypress.env('cart_url'))
       cartPage.getPageTitle().should('have.text', 'Your Cart')
       cartPage.removeThelastProduct()
       cartPage.getCartCount().should('have.text', '1')
       const checkoutPage = cartPage.getToCheckOutPage()

        checkoutPage.getPageUrl().should('eq', Cypress.env('checkout_url'))
        checkoutPage.fillCheckOutData(this.checkoutData.FirstName, this.checkoutData.LastName, this.checkoutData.zipCode)
        const overviewPage = checkoutPage.confirmCheckOut();

        overviewPage.getPageUrl().should('eq', Cypress.env('overview_url'))
        overviewPage.validateProductsPrice()
        const orderConfirmationPage = overviewPage.getToFinishCheckOutPage()
        
        orderConfirmationPage.getPageUrl().should('eq', Cypress.env('checkout_complete_url'))
        orderConfirmationPage.getOrderConfirmationMessage().should('have.text', 'Thank you for your order!')
        orderConfirmationPage.getBackToHome()
        orderConfirmationPage.logout()
        

 
    })

})