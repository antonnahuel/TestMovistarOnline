class cartPage {

    constructor() {
        this.cartCounter = '.counter-label';
    }

    getCartCounter() {
        return cy.get(this.cartCounter).invoke('text').then((text) => {
            const value = parseInt(text);
            return value;
        });
    }

}

export default new cartPage();