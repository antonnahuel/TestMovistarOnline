import homePage from '../pages/homePage.cy';
import productPage from '../pages/productPage.cy';
import cartPage from '../pages/cartPage.cy';

describe('Test 5', () => {

    beforeEach(()=>{
        cy.viewport(1500, 1000); 
        cy.visit('https://tiendaonline.movistar.com.ar/');
        cy.wait(2000);
    });

    it('Check cart sum', ()=> {
        homePage.selectProductIndex(4);
        cy.wait(5000);
        productPage.clickBuyButton();
        homePage.vistitHomeURL();
        homePage.selectProductIndex(9);
        cy.wait(5000);
        productPage.clickBuyButton();
        cy.wait(5000);

        cartPage.getCartCounter().then((counterValue) => {
            expect(counterValue).not.to.equal(2);
            cy.log('Cart sum NOT working');
        });

        //Tenia mismo error que Test1
        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

    });

});


