import P02_ProductsPage from './P02_ProductsPage.js';

class P01_LoginPage{

getPageUrl(){
    return cy.url();
}

userLogin(username, password){
    cy.get('#user-name').type(username);
    cy.get('#password').type(password);
    
}
confirmLogin(){
    cy.get('#login-button').click();
    return new P02_ProductsPage();
}


}
export default P01_LoginPage;