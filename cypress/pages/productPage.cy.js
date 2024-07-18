class productPage{

    constructor(){
        this.linkInstallment = '#open-installments-modal';
        this.inputBank = '#inputbank';
        this.inputCard = '#inputCard';
        this.calculatorButton = '#calculate_btn > .btn-primary';
        this.modal = '.modal-inner-wrap';
        
        this.buyButton = '#swatch_attribute_card';
    }

    searchInstallment = (bank, card) => {
        this.nameCard = `[data-card='${card}']`;

        cy.get(this.linkInstallment).click();
        cy.get(this.modal).should('be.visible');
        cy.get(this.inputBank ).click();
        cy.contains('.ui-menu-item', bank/*'Banco BICA'*/).click({force:true});
        cy.get(this.inputCard).click();
        cy.get(this.nameCard).click();
        cy.get(this.calculatorButton).click();
    }

    clickBuyButton(){
        cy.get(this.buyButton).click();
    }
    

}

export default new productPage