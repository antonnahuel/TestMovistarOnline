class searchPage{

    constructor(){ 
        this.productList = '.wrapper > .products';
    }

    clickFirstProduct() {
        cy.get(this.productList).first().click();
    }

}

export default new searchPage