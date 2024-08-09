class homePage {
    
    constructor(){
        this.searchButton = '#search_action';
        this.searchInput = '#search';
        this.searchButtonInInput = '.action > img';

        this.filterButton = '.block-subtitle';
        this.filterMemory128 = '[data-value="802"] > a';
        this.filterPrice250_500 = '[data-value="250000_500000"] > a';
        this.selectorProducts = '.products > ol';
        this.totalProducts = '.total-products > p';

        this.miMovistarButton = '.my-movistar-button';

    }

    search = (element) => {
        cy.get(this.searchButton).click();
        cy.get(this.searchInput).type(element);
        cy.get(this.searchButtonInInput).click();
    } 

    searchFilter(){
        cy.get(this.filterButton).click();
        cy.get(this.filterPrice250_500).click();
        cy.get(this.filterMemory128).click({force:true});
    }

    countWithFilter(){
        cy.get(this.selectorProducts).should('be.visible');

        return cy.get(this.selectorProducts).find('li').then($products =>{
            const countProducts = $products.length;
            return countProducts;
        })
    }

    selectProductIndex = (index) => {
        cy.get('.products > ol').find('li').eq(index).click();              
    }

    clickMiMovistarButton(){
        cy.get(this.miMovistarButton).click();
    }

    vistitHomeURL(){
        cy.visit('https://tiendaonline.movistar.com.ar/');
    }

}

export default new homePage();