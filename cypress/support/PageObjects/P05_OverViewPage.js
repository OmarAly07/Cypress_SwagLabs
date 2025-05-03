import P06_OrderConfirmationPage from "./P06_OrderConfirmationPage";
class P05_OverViewPage{

    getPageUrl() {
        return cy.url();
    }
    validateProductsPrice() {
      let totalSum = 0;
    
      // Step 1: Calculate total sum of product prices
      cy.get('.inventory_item_price').each(($el) => {
        const price = Number($el.text().replace('$', '').trim());
        totalSum += price;
      }).then(() => {
        // Step 2: Get subtotal, tax, and total, and validate
        cy.get('.summary_subtotal_label')
          .invoke('text')
          .then((subtotalText) => {
            const subtotal = Number(subtotalText.replace('Item total: $', '').trim());
            expect(subtotal).to.be.closeTo(totalSum, 0.01); 
    
            // Step 3: Continue inside the same chain
            cy.get('.summary_tax_label')
              .invoke('text')
              .then((taxText) => {
                const tax = Number(taxText.replace('Tax: $', '').trim());
    
                cy.get('.summary_total_label')
                  .invoke('text')
                  .then((totalText) => {
                    const total = Number(totalText.replace('Total: $', '').trim());
                    const expectedTotal = totalSum + tax;
                    expect(total).to.be.closeTo(expectedTotal, 0.01); 
                  });
              });
          });
    })
  }
        
    

      getToFinishCheckOutPage() {
        cy.get('#finish').click();
        return new P06_OrderConfirmationPage();
      }
    
    
}
export default P05_OverViewPage;